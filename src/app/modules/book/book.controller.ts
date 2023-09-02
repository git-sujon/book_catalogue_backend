import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { BookServices } from "./book.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const insertIntoDb = catchAsync (async (req:Request, res:Response) => {
    const payload = req.body
    const result = await BookServices.insertIntoDb(payload)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Book created successfully!",
        data:result

    })
})
const getAllFromDb = catchAsync (async (req:Request, res:Response) => {

    const result = await BookServices.getAllFromDb()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Books retrieved successfully",
        data:result

    })
})
const getSingleById = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await BookServices.getSingleById(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Data retrieve Successfully",
        data:result

    })
})
const updateData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const payload = req.body
    const result = await BookServices.updateData(id, payload)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Data update Successfully",
        data:result

    })
})

const deleteSingleData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await BookServices.deleteSingleData(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Data deleted Successfully",
        data:result

    })
})



export const BookController = {
    insertIntoDb,
    getAllFromDb,
    getSingleById,
    updateData,
    deleteSingleData
}