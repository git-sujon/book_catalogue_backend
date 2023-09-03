"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const getProfileData = (authorization) => __awaiter(void 0, void 0, void 0, function* () {
    const isAuthenticate = yield jwtHelpers_1.jwtHelpers.verifyToken(authorization, config_1.default.jwt.secret);
    if (!isAuthenticate) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Your are Not Authorized');
    }
    const result = yield prisma_1.default.user.findUnique({
        where: {
            id: isAuthenticate.userId,
            role: isAuthenticate.role,
        },
    });
    return result;
});
exports.ProfileServices = {
    getProfileData,
};
