import express from 'express';
import { ProfileController } from './profile.controller';
import auth from '../../middlewares/auth';
import { UserRolesEnum } from '@prisma/client';

const route = express.Router();

route.get(
  '/',
  auth(UserRolesEnum.admin, UserRolesEnum.customer),
  ProfileController.getProfileData,
);

export const ProfileRoute = route;
