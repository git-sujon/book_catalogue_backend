import { UserRolesEnum } from '@prisma/client';
import { z } from 'zod';


const updateData = z.object({
    body: z.object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      password: z.string().min(6).optional(),
      role: z.enum([...Object.values(UserRolesEnum)] as [string, ...string[]]).optional(),
      contactNo: z.string().optional(),
      address: z.string().optional(),
      profileImg: z.string().optional(),
    }),
  });
  

export const UserValidation = {
  updateData
};
