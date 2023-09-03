"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const route = express_1.default.Router();
route.post('/signup', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.userSignUp), auth_controller_1.UserController.userSignUp);
route.post('/signin', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.userLogin), auth_controller_1.UserController.userLogin);
exports.AuthRoute = route;
