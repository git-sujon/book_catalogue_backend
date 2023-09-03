import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const getProfileData = async (
  authorization: string,
): Promise<Partial<User | null>> => {
  const isAuthenticate = await jwtHelpers.verifyToken(
    authorization,
    config.jwt.secret as string,  
  );

  if (!isAuthenticate) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Your are Not Authorized');
  }

  const result = await prisma.user.findUnique({
    where: {
      id: isAuthenticate.userId,
      role: isAuthenticate.role,
    },
  });

  return result;
};

export const ProfileServices = {
  getProfileData,
};
