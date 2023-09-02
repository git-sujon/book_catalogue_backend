import express from 'express';
import { CategoryController } from './category.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidation } from './category.validation';

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
  validateRequest(CategoryValidation.updateData),
  CategoryController.updateData,
);
route.delete('/:id', CategoryController.deleteSingleData);

export const CategoryRoute = route;
