import express from 'express';
import { CategoryController } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const route = express.Router();

route.post(
  '/',
  validateRequest(CategoryValidation.insertIntoDb),
  CategoryController.insertIntoDb,
);
route.get('/', CategoryController.getAllFromDb);
route.get('/:id', CategoryController.getSingleById);
route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.updateData),
  CategoryController.updateData,
);
route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteSingleData,
);

export const CategoryRoute = route;
