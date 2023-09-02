import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserServices } from "./auth.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const userSignUp = catchAsync (async (req:Request, res:Response) => {
    const payload = req.body
    const result = await UserServices.userSignUp(payload)

    sendResponse(res, {
        success:true,
        statusCode: httpStatus.OK,
        message:"User created successfully!",
        data:result

    })
})
const   userLogin = catchAsync (async (req:Request, res:Response) => {
    const payload = req.body
    const result = await UserServices.  userLogin(payload)

    sendResponse(res, {
        success:true,
        statusCode: httpStatus.OK,
        message:"User signin successfully!",
        data:result

    })
})




export const UserController = {
    userSignUp,
    userLogin
}