import express from 'express'
import { UserController } from './user.controller'

const route = express.Router()


route.post('/signup', UserController.insertIntoDb)


export const UserRoute = route