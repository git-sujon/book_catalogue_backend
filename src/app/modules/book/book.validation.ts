
import { z } from 'zod';



const insertIntoDb = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    price: z.string({
      required_error: 'Price is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    publicationDate: z.date({
      required_error: 'Publication date is required',
    }),
    categoryId: z.string({
      required_error: 'Category ID is required',
    }),
  }),
});



const updateData = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    price: z.string().optional(),
    genre: z.string().optional(),
    publicationDate: z.date().optional(),
    categoryId: z.string().optional(),
  }),
});

export const UserValidation = {
  insertIntoDb,
  updateData
};
