import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { CategoryServices } from "./category.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const insertIntoDb = catchAsync (async (req:Request, res:Response) => {
    const payload = req.body
    const result = await CategoryServices.insertIntoDb(payload)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Category created successfully",
        data:result

    })
})
const getAllFromDb = catchAsync (async (req:Request, res:Response) => {

    const result = await CategoryServices.getAllFromDb()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Categories fetched successfully",
        data:result

    })
})
const getSingleById = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await CategoryServices.getSingleById(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Category fetched successfully",
        data:result

    })
})
const updateData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const payload = req.body
    const result = await CategoryServices.updateData(id, payload)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Category updated successfully",
        data:result

    })
})

const deleteSingleData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await CategoryServices.deleteSingleData(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"Category deleted successfully",
        data:result

    })
})



export const CategoryController = {
    insertIntoDb,
    getAllFromDb,
    getSingleById,
    updateData,
    deleteSingleData
}