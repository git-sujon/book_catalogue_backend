import { z } from 'zod';

const orderedBookSchema = z.object({
  bookId: z.string({
    required_error: 'BookId is required',
  }),
  quantity: z
    .number({
      required_error: 'BookId is required',
    })
    .min(1),
});

const insertIntoDb = z.object({
  body: z.object({
    orderedBooks: z.array(orderedBookSchema),
  }),
});

export const OrderValidation = {
  insertIntoDb,
};
