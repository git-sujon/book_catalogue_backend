"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const order_validation_1 = require("./order.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const order_controller_1 = require("./order.controller");
const route = express_1.default.Router();
route.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CUSTOMER), (0, validateRequest_1.default)(order_validation_1.OrderValidation.insertIntoDb), order_controller_1.OrderController.insertIntoDb);
route.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getAllFromDb);
route.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getSingleById);
route.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.deleteSingleData);
exports.OrderRoute = route;
