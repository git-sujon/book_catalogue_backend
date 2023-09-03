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
exports.OrderServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../config"));
const insertIntoDb = (authorization, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isAuthenticate = yield jwtHelpers_1.jwtHelpers.verifyToken(authorization, config_1.default.jwt.secret);
    if (!isAuthenticate) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Your are Not Authorized');
    }
    const { orderedBooks } = payload;
    const completedOrder = yield prisma_1.default.$transaction((orderTransaction) => __awaiter(void 0, void 0, void 0, function* () {
        const orderCreate = yield orderTransaction.order.create({
            data: {
                userId: isAuthenticate.userId,
            },
        });
        if (!orderCreate) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Unable to Create Orders');
        }
        if (orderedBooks && orderedBooks.length > 0) {
            for (let book = 0; orderedBooks.length > book; book++) {
                yield orderTransaction.orderedBook.create({
                    data: {
                        orderId: orderCreate.id,
                        bookId: orderedBooks[book].bookId,
                        quantity: orderedBooks[book].quantity,
                    },
                });
            }
        }
        return orderCreate;
    }));
    if (completedOrder) {
        const responseData = yield prisma_1.default.order.findUnique({
            where: {
                id: completedOrder.id,
            },
            include: {
                orderedBooks: true,
            },
        });
        return responseData;
    }
    throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Unable to Create Orders');
});
const getAllFromDb = (authorization) => __awaiter(void 0, void 0, void 0, function* () {
    const isAuthenticate = yield jwtHelpers_1.jwtHelpers.verifyToken(authorization, config_1.default.jwt.secret);
    if (!isAuthenticate) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Your are Not Authorized');
    }
    if (isAuthenticate.role === 'customer') {
        const result = yield prisma_1.default.order.findMany({
            where: {
                userId: isAuthenticate.userId,
            },
            include: {
                orderedBooks: true,
            },
        });
        return result;
    }
    else {
        const result = yield prisma_1.default.order.findMany({
            include: {
                orderedBooks: true,
            },
        });
        return result;
    }
});
const getSingleById = (id, authorization) => __awaiter(void 0, void 0, void 0, function* () {
    const isAuthenticate = yield jwtHelpers_1.jwtHelpers.verifyToken(authorization, config_1.default.jwt.secret);
    if (!isAuthenticate) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Your are Not Authorized');
    }
    if (isAuthenticate.role === 'customer') {
        const result = yield prisma_1.default.order.findMany({
            where: {
                id: id,
                userId: isAuthenticate.userId,
            },
            include: {
                orderedBooks: true,
            },
        });
        return result;
    }
    else {
        const result = yield prisma_1.default.order.findMany({
            include: {
                orderedBooks: true,
            },
        });
        return result;
    }
});
const deleteSingleData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.OrderServices = {
    insertIntoDb,
    getAllFromDb,
    getSingleById,
    deleteSingleData,
};
