"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const insertIntoDb = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        price: zod_1.z.string({
            required_error: 'Price is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Genre is required',
        }),
        publicationDate: zod_1.z.date({
            required_error: 'Publication date is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'Category ID is required',
        }),
    }),
});
const updateData = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        price: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        publicationDate: zod_1.z.date().optional(),
        categoryId: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    insertIntoDb,
    updateData
};
