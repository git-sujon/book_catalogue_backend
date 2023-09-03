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
exports.UserServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const excludingfieldsHelpers_1 = __importDefault(require("../../../helpers/excludingfieldsHelpers"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const getAllFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findMany();
    const keysToExclude = ['password'];
    if (result.length > 0) {
        const updatedResult = result.map((user) => (0, excludingfieldsHelpers_1.default)(user, keysToExclude));
        return updatedResult;
    }
    else {
        return undefined;
    }
});
const getSingleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
    });
    if (!result) {
        return undefined;
    }
    const keysToExclude = ['password'];
    const updatedResult = (0, excludingfieldsHelpers_1.default)(result, keysToExclude);
    return updatedResult;
});
const updateData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Hash the password asynchronously
    if (payload.password) {
        const hash = yield bcrypt_1.default.hash(payload.password, Number(config_1.default.bycrypt_salt_rounds));
        payload.password = hash;
    }
    const result = yield prisma_1.default.user.update({
        where: {
            id,
        },
        data: payload,
    });
    if (!result) {
        return undefined;
    }
    const keysToExclude = ['password'];
    const updatedResult = (0, excludingfieldsHelpers_1.default)(result, keysToExclude);
    return updatedResult;
});
const deleteSingleData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.delete({
        where: {
            id,
        },
    });
    if (!result) {
        return null;
    }
    return null;
});
exports.UserServices = {
    getAllFromDb,
    getSingleById,
    updateData,
    deleteSingleData,
};
