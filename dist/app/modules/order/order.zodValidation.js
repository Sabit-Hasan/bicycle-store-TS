"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const mongoose_1 = __importDefault(require("mongoose"));
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email("Invalid email format")
        .min(1, "Email is required"),
    product: zod_1.z
        .string()
        .refine((value) => mongoose_1.default.Types.ObjectId.isValid(value), {
        message: "Invalid product ObjectId",
    }),
    quantity: zod_1.z
        .number()
        .int("Quantity must be an integer")
        .min(1, "Quantity must be at least 1"),
    totalPrice: zod_1.z
        .number()
        .min(0, "Total price must be greater than or equal to 0"),
});
exports.default = orderValidationSchema;
