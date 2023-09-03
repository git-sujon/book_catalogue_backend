"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const route = express_1.default.Router();
route.get('/', user_controller_1.UserController.getAllFromDb);
route.get('/:id', user_controller_1.UserController.getSingleById);
route.patch('/:id', (0, validateRequest_1.default)(user_validation_1.UserValidation.updateData), user_controller_1.UserController.updateData);
route.delete('/:id', user_controller_1.UserController.deleteSingleData);
exports.UserRoute = route;
