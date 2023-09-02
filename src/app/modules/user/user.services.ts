import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';



const getAllFromDb = async (): Promise<User[]> => {
  const result = prisma.user.findMany();
  return result;
};

const getSingleById = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateData = async (
  id: string,
  payload: Partial<User>,
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleData = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });

  return result;
};

export const UserServices = {

  getAllFromDb,
  getSingleById,
  updateData,
  deleteSingleData,
};
