import express from 'express';


const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/pathName",
    route: routeName
  },
  
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
