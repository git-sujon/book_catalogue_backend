"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoute = void 0;
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("./profile.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const route = express_1.default.Router();
route.get('/', (0, auth_1.default)(client_1.UserRolesEnum.admin, client_1.UserRolesEnum.customer), profile_controller_1.ProfileController.getProfileData);
exports.ProfileRoute = route;
