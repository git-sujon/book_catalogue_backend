"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const route = express_1.default.Router();
route.post('/', book_controller_1.BookController.insertIntoDb);
route.get('/', book_controller_1.BookController.getAllFromDb);
route.get('/:categoryId/category', book_controller_1.BookController.getAllFromDbByCategory);
route.get('/:id', book_controller_1.BookController.getSingleById);
route.patch('/:id', (0, auth_1.default)(client_1.UserRolesEnum.admin), book_controller_1.BookController.updateData);
route.delete('/:id', (0, auth_1.default)(client_1.UserRolesEnum.admin), book_controller_1.BookController.deleteSingleData);
exports.BookRoute = route;
