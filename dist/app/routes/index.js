"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const category_route_1 = require("../modules/category/category.route");
const book_route_1 = require("../modules/book/book.route");
const order_route_1 = require("../modules/order/order.route");
const profile_route_1 = require("../modules/profile/profile.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: "/auth",
        route: auth_route_1.AuthRoute
    },
    {
        path: "/users",
        route: user_route_1.UserRoute
    },
    {
        path: "/catagories",
        route: category_route_1.CategoryRoute
    },
    {
        path: "/books",
        route: book_route_1.BookRoute
    },
    {
        path: "/orders",
        route: order_route_1.OrderRoute
    },
    {
        path: "/profile",
        route: profile_route_1.ProfileRoute
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
