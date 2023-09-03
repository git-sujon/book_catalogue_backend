import express from 'express';
import { BookController } from './book.controller';
import auth from '../../middlewares/auth';
import { UserRolesEnum } from '@prisma/client';

const route = express.Router();

route.post('/', BookController.insertIntoDb);
route.get('/', BookController.getAllFromDb);
route.get('/:categoryId/category', BookController.getAllFromDbByCategory);
route.get('/:id', BookController.getSingleById);
route.patch('/:id', auth(UserRolesEnum.admin), BookController.updateData);
route.delete('/:id',auth(UserRolesEnum.admin), BookController.deleteSingleData);

export const BookRoute = route;
