import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ProfileServices } from './profile.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const getProfileData = catchAsync(async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (authorization) {
    const result = await ProfileServices.getProfileData( authorization);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User retrieve successfully',
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

export const ProfileController = {
  getProfileData,
};
