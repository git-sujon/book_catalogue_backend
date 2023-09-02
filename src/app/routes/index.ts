import express from 'express';
import { UserRoute } from '../modules/user/user.route';
import { AuthRoute } from '../modules/auth/auth.route';
import {  CategoryRoute } from '../modules/category/category.route';
import { BookRoute } from '../modules/book/book.route';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/auth",
    route: AuthRoute
  },
  {
    path: "/users",
    route: UserRoute
  },
  {
    path: "/catagories",
    route: CategoryRoute
  },
  {
    path: "/books",
    route: BookRoute
  },
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
