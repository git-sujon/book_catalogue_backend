import { Book } from '@prisma/client';
import prisma from '../../../shared/prisma';


const insertIntoDb = async (payload: Book):Promise<Book> => {

    

  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};


const getAllFromDb = async ():Promise<Book[]> => {
    const result = prisma.book.findMany()
    return result
}

const getSingleById = async(id:string):Promise<Book | null> => {
    const result = await prisma.book.findUnique({
        where:{
            id
        }
    })

    return result
}

const updateData = async(id:string, payload:Partial<Book>):Promise<Book> => {
    const result = await prisma.book.update({
        where:{
            id
        },
        data:payload
    })

    return result
}

const deleteSingleData = async (id:string):Promise<Book | null> => {
    const result = await prisma.book.delete({
        where:{
            id
        }
    })

    return result
}

export const BookServices = {
  insertIntoDb,
  getAllFromDb,
  getSingleById,
  updateData,
  deleteSingleData

};
