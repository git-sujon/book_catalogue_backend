import express from 'express'
import { BookController } from './book.controller'


const route = express.Router()

route.post('/', BookController.insertIntoDb)
route.get('/', BookController.getAllFromDb)
route.get('/:categoryId/category', BookController.getAllFromDbByCategory)
route.get('/:id', BookController.getSingleById)
route.patch('/:id', BookController.updateData)
route.delete('/:id', BookController.deleteSingleData)




export const BookRoute = route