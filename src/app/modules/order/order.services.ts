import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDb = async (payload: any) => {
  const {orderedBooks,  ...orderData } = payload

  const completedOrder = await prisma.$transaction(async(orderTransaction)=> {
    const order = await orderTransaction.order.create({
      data: orderData,
    });

  
  
  })



 return completedOrder
};

const getAllFromDb = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany();
  return result;
};

const getSingleById = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateData = async (
  id: string,
  payload: Partial<Order>,
): Promise<Order> => {
  const result = await prisma.order.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleData = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.delete({
    where: {
      id,
    },
  });

  return result;
};

export const OrderServices = {
  insertIntoDb,
  getAllFromDb,
  getSingleById,
  updateData,
  deleteSingleData,
};
