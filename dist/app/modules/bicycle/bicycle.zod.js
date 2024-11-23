"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const bicycleValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    brand: zod_1.z.string().min(1, "Brand is required"), // "1 means string must have at least 1 character"
    price: zod_1.z.number().min(0, "Price must be a positive number"), // "0 means number must be positive means greater than 0 or equal to 0"
    type: zod_1.z.enum(["Mountain", "Road", "Hybrid", "BMX", "Electric"]),
    description: zod_1.z.string().min(1, "Description is required"),
    quantity: zod_1.z.number().int().min(0, "Quantity must be a positive integer"),
    inStock: zod_1.z.boolean(),
});
exports.default = bicycleValidationSchema;
