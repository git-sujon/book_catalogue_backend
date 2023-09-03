import express from 'express';
import { ProfileController } from './profile.controller';


const route = express.Router();


route.get('/:id', ProfileController.getProfileData);



export const ProfileRoute = route;
