import express from 'express'
import { BookController } from './book.controller'


const route = express.Router()

route.post('/', BookController.insertIntoDb)
route.get('/', BookController.getAllFromDb)
route.get('/', BookController.getSingleById)
route.patch('/', BookController.updateData)
route.delete('/', BookController.deleteSingleData)




export const BookRoute = route