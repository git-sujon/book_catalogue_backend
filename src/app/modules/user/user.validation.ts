import { UserRolesEnum } from '@prisma/client';
import { z } from 'zod';

const insertIntoDb = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required and must be a valid email address',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.enum([...Object.values(UserRolesEnum)] as [string, ...string[]], {
      required_error: "Role is required and must be 'user' or 'admin'",
    }),

    contactNo: z.string({
      required_error: 'Contact number is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    profileImg: z.string({
      required_error: 'Profile image URL is required',
    }),
  }),
});

const updateData = z.object({
    body: z.object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().min(6).optional(),
      role: z.enum(["user", "admin"]).optional(),
      contactNo: z.string().optional(),
      address: z.string().optional(),
      profileImg: z.string().optional(),
    }),
  });
  

export const UserValidation = {
  insertIntoDb,
  updateData
};
