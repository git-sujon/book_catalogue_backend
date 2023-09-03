import { OrderStatusEnum } from '@prisma/client';
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
    userId: z.string({
      required_error: 'userId is required',
    }),
    status: z.enum(
      [...Object.values(OrderStatusEnum)] as [string, ...string[]],
      {
        required_error:
          "Status is required and must be 'pending', 'shipped', 'delivered'",
      },
    ),
    orderedBooks: z.array(orderedBookSchema),
  }),
});

export const OrderValidation = {
  insertIntoDb,
};
