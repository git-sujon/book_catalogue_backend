import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import excludeFields from '../../../helpers/excludingfieldsHelpers';
import bcrypt from 'bcrypt'
import config from '../../../config';



const getProfileData = async (id: string): Promise<Partial<User | undefined>> => {
  const result: User | null = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!result) {
    return undefined;
  }

  const keysToExclude: (keyof User)[] = ['password'];
  const updatedResult = excludeFields(result, keysToExclude);

  return updatedResult;
};

export const ProfileServices = {
  getProfileData
};
