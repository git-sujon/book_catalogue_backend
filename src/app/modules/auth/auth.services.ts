import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';
import bcrypt from 'bcrypt';
import config from '../../../config';
import { IUserLogin } from './auth.interface';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import excludeFields from '../../../helpers/excludingfieldsHelpers';

const userSignUp = async (payload: User): Promise<Partial<User |null>> => {
  // Hash the password asynchronously
  const hash = await bcrypt.hash(
    payload.password,
    Number(config.bycrypt_salt_rounds),
  );
  payload.password = hash;

   const createdUser = await prisma.user.create({
    data: payload,
  });

  const keysToExclude: (keyof User)[] = ['password'];
  const updatedUser = excludeFields(createdUser, keysToExclude);

return updatedUser
};

const userLogin = async (payload: IUserLogin): Promise<string> => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User Not Found');
  }

  const isPasswordMatch = await bcrypt.compare(
    payload.password,
    isUserExist.password,
  );

  console.log('isPasswordMatch:', isPasswordMatch);

  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password doesn't match");
  }

  const userId = isUserExist.id;
  const userRole = isUserExist.role;

  const token = jwtHelpers.createToken(
    { userId, userRole },
    config.jwt.secret as string,
    config.jwt.expires_in as string,
  );

  const deCodedToken = jwtHelpers.verifyToken(token, config.jwt.secret as string)

  console.log("deCodedToken:", deCodedToken)


  return token;
};

export const UserServices = {
  userSignUp,
  userLogin,
};
