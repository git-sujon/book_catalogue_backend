import { UserRolesEnum } from '@prisma/client';
import { z } from 'zod';

const userSignUp = z.object({
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
const userLogin = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required and must be a valid email address',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

export const AuthValidation = {
  userSignUp,
  userLogin,
};
