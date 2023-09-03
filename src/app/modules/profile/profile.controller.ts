import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProfileServices } from "./profile.services";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";



const getProfileData = catchAsync (async (req:Request, res:Response) => {
    const {id} = req.params
    const result = await ProfileServices.getProfileData(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success:true,
        message:"User retrieve successfully",
        data:result

    })
})



export const ProfileController = {
    getProfileData
}