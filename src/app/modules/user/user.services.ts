import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import excludeFields from '../../../helpers/excludingfieldsHelpers';
import bcrypt from 'bcrypt'
import config from '../../../config';


const getAllFromDb = async (): Promise<Partial<User>[] | undefined> => {
  const result: User[] = await prisma.user.findMany();
  const keysToExclude: (keyof User)[] = ['password'];

  if (result.length > 0) {
    const updatedResult = result.map((user) => excludeFields(user, keysToExclude));
    return updatedResult as Partial<User>[]; 
  } else {
    return undefined;
  }
};

const getSingleById = async (id: string): Promise<Partial<User | undefined>> => {
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
const updateData = async (
  id: string,
  payload: Partial<User>,
): Promise<Partial<User | undefined>> => {

    // Hash the password asynchronously
if(payload.password){
  const hash = await bcrypt.hash(
    payload.password,
    Number(config.bycrypt_salt_rounds),
  );
  payload.password = hash;
}


  const result: User | null = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });

  if (!result) {
    return undefined;
  }

  const keysToExclude: (keyof User)[] = ['password'];
  const updatedResult = excludeFields(result, keysToExclude);

  return updatedResult;
};

const deleteSingleData = async (id: string): Promise<User | null> => {
  const result: User | null = await prisma.user.delete({
    where: {
      id,
    },
  });

  if (!result) {
    return null; 
  }



  return null;
};

export const UserServices = {

  getAllFromDb,
  getSingleById,
  updateData,
  deleteSingleData,
};
