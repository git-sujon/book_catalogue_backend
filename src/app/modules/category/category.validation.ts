
import { z } from 'zod';



const insertIntoDb = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

const updateData = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});
export const CategoryValidation = {
  insertIntoDb,
  updateData
};
