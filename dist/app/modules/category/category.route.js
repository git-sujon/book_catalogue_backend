"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_validation_1 = require("./category.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const route = express_1.default.Router();
route.post('/', (0, validateRequest_1.default)(category_validation_1.CategoryValidation.insertIntoDb), category_controller_1.CategoryController.insertIntoDb);
route.get('/', category_controller_1.CategoryController.getAllFromDb);
route.get('/:id', category_controller_1.CategoryController.getSingleById);
route.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(category_validation_1.CategoryValidation.updateData), category_controller_1.CategoryController.updateData);
route.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), category_controller_1.CategoryController.deleteSingleData);
exports.CategoryRoute = route;
