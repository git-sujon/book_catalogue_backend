"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
const orderedBookSchema = zod_1.z.object({
    bookId: zod_1.z.string({
        required_error: 'BookId is required',
    }),
    quantity: zod_1.z
        .number({
        required_error: 'BookId is required',
    })
        .min(1),
});
const insertIntoDb = zod_1.z.object({
    body: zod_1.z.object({
        orderedBooks: zod_1.z.array(orderedBookSchema),
    }),
});
exports.OrderValidation = {
    insertIntoDb,
};
