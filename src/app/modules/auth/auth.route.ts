import express from 'express';
import { UserController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';

const route = express.Router();

route.post(
  '/signup',
  validateRequest(AuthValidation.userSignUp),
  UserController.userSignUp,
);
route.post(
  '/signin',
  validateRequest(AuthValidation.userLogin),
  UserController.userLogin,
);

export const AuthRoute = route;
