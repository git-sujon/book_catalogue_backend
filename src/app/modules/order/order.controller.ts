import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OrderServices } from "./order.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const insertIntoDb = catchAsync (async (req:Request, res:Response) => {
    const payload = req.body
    const result = await OrderServices.insertIntoDb(payload)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Order created successfully",
        data:result

    })
})
const getAllFromDb = catchAsync (async (req:Request, res:Response) => {

    const result = await OrderServices.getAllFromDb()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Orders retrieved successfully",
        data:result

    })
})
const getSingleById = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await OrderServices.getSingleById(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Order fetched successfully",
        data:result

    })
})
const updateData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const payload = req.body
    const result = await OrderServices.updateData(id, payload)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Order updated successfully",
        data:result

    })
})

const deleteSingleData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await OrderServices.deleteSingleData(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Order deleted successfully",
        data:result

    })
})



export const OrderController = {
    insertIntoDb,
    getAllFromDb,
    getSingleById,
    updateData,
    deleteSingleData
}