import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { IOrderData } from './order.interface';

const insertIntoDb = async (payload: IOrderData):Promise<IOrderData |null> => {
  const { orderedBooks, ...orderData } = payload;

  const completedOrder = await prisma.$transaction(async orderTransaction => {
    const orderCreate = await orderTransaction.order.create({
      data: orderData,
    });

    if (!orderCreate) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to Create Orders');
    }

    if (orderedBooks && orderedBooks.length > 0) {
      for (let book = 0; orderedBooks.length > book; book++) {
        await orderTransaction.orderedBook.create({
          data: {
            orderId: orderCreate.id,
            bookId: orderedBooks[book].bookId,
            quantity: orderedBooks[book].quantity,
          },
        });
      }
    }
    return orderCreate;
  });
  if(completedOrder){
    const responseData = await prisma.order.findUnique({
      where:{
        id:completedOrder.id
      },
      include:{
        orderedBooks:true
      }
    
    })

    return responseData
  }

  throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to Create Orders');
};

const getAllFromDb = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany({
    include:{
      orderedBooks:true
    }
  });
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
  deleteSingleData,
};
