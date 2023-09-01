import express from 'express';
import { UserRoute } from '../modules/user/user.route';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/auth",
    route: UserRoute
  },
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
