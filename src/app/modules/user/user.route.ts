import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const route = express.Router();

route.get('/', UserController.getAllFromDb);
route.get('/:id', UserController.getSingleById);
route.patch(
  '/:id',
  validateRequest(UserValidation.updateData),
  UserController.updateData,
);
route.delete('/:id', UserController.deleteSingleData);

export const UserRoute = route;
