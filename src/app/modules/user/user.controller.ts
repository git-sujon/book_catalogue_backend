import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserServices } from "./user.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";


const getAllFromDb = catchAsync (async (req:Request, res:Response) => {

    const result = await UserServices.getAllFromDb()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Users retrieved successfully",
        data:result

    })
})
const getSingleById = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await UserServices.getSingleById(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"User getched successfully",
        data:result

    })
})
const updateData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const payload = req.body
    const result = await UserServices.updateData(id, payload)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"User updated successfully",
        data:result

    })
})

const deleteSingleData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await UserServices.deleteSingleData(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Uers deleted successfully",
        data:result

    })
})



export const UserController = {
    getAllFromDb,
    getSingleById,
    updateData,
    deleteSingleData
}