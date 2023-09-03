import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { OrderValidation } from './order.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { OrderController } from './order.controller';

const route = express.Router();

route.post(
  '/',
  // validateRequest(OrderValidation.insertIntoDb),
  OrderController.insertIntoDb,
);
route.get('/', OrderController.getAllFromDb);
route.get('/:id', OrderController.getSingleById);
route.patch(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  // validateRequest(OrderValidation.updateData),
  OrderController.updateData,
);
route.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.ADMIN),
  OrderController.deleteSingleData,
);

export const OrderRoute = route;
