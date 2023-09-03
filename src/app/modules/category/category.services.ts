import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDb = async (payload: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data: payload,
  });

  return result;
};

const getAllFromDb = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();
  return result;
};

const getSingleById = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateData = async (
  id: string,
  payload: Partial<Category>,
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleData = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });

  return result;
};

export const CategoryServices = {
  insertIntoDb,
  getAllFromDb,
  getSingleById,
  updateData,
  deleteSingleData,
};
