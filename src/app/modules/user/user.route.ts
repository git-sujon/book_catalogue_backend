import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const route = express.Router();

route.get('/', UserController.getAllFromDb);
route.get('/:id', UserController.getSingleById);
route.get(
  '/:id',
  validateRequest(UserValidation.updateData),
  UserController.updateData,
);
route.get('/:id', UserController.deleteSingleData);

export const UserRoute = route;
