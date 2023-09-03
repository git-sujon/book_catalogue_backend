"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const userSignUp = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required',
        }),
        email: zod_1.z.string({
            required_error: 'Email is required and must be a valid email address',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
        role: zod_1.z.enum([...Object.values(client_1.UserRolesEnum)], {
            required_error: "Role is required and must be 'user' or 'admin'",
        }),
        contactNo: zod_1.z.string({
            required_error: 'Contact number is required',
        }),
        address: zod_1.z.string({
            required_error: 'Address is required',
        }),
        profileImg: zod_1.z.string({
            required_error: 'Profile image URL is required',
        }),
    }),
});
const userLogin = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: 'Email is required and must be a valid email address',
        }),
        password: zod_1.z.string({
            required_error: 'Password is required',
        }),
    }),
});
exports.AuthValidation = {
    userSignUp,
    userLogin,
};
