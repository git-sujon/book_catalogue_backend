import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { BookServices } from './book.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import {
  bookFilterAbleFields,
  bookFilterAbleFieldsForCategoryId,
} from './book.constants';
import { paginationFields } from '../../../constants/pagination';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await BookServices.insertIntoDb(payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully!',
    data: result,
  });
});
const getAllFromDb = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterAbleFields);

  const options = pick(req.query, paginationFields);

  const result = await BookServices.getAllFromDb(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});
const getAllFromDbByCategory = catchAsync(
  async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    const filters = pick(req.query, bookFilterAbleFieldsForCategoryId);

    const options = pick(req.query, paginationFields);

    const result = await BookServices.getAllFromDbByCategory(
      categoryId,
      filters,
      options,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  },
);
const getSingleById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookServices.getSingleById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data retrieve Successfully',
    data: result,
  });
});
const updateData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BookServices.updateData(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data update Successfully',
    data: result,
  });
});

const deleteSingleData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookServices.deleteSingleData(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data deleted Successfully',
    data: result,
  });
});

export const BookController = {
  insertIntoDb,
  getAllFromDb,
  getAllFromDbByCategory,
  getSingleById,
  updateData,
  deleteSingleData,
};
