import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { OrderServices } from './order.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const { authorization } = req.headers;

  if (authorization) {
    const result = await OrderServices.insertIntoDb(authorization, payload);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } else {
    // Handle the case where authorization is undefined
    sendResponse(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      message: 'Your are Not Authorized',
    });
  }
});

const getAllFromDb = catchAsync(async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    if (authorization) {
      const result = await OrderServices.getAllFromDb(authorization);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Orders retrieved successfully',
        data: result,
      });
    } else {
      // Handle the case where authorization is undefined
      sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: 'Your are Not Authorized',
      });
    }
});


const getSingleById = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
  const { authorization } = req.headers;
  if (authorization) {
    const result = await OrderServices.getSingleById(id, authorization);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order fetched successfully',
      data: result,
    });
  } else {
    // Handle the case where authorization is undefined
    sendResponse(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      message: 'Your are Not Authorized',
    });
  }
});

const deleteSingleData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OrderServices.deleteSingleData(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order deleted successfully',
    data: result,
  });
});

export const OrderController = {
  insertIntoDb,
  getAllFromDb,
  getSingleById,
  deleteSingleData,
};
