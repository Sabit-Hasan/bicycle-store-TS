import { z } from "zod";
import mongoose from "mongoose";

const orderValidationSchema = z.object({
    email: z
        .string()
        .email("Invalid email format")
        .min(1, "Email is required"),
    product: z
        .string()
        .refine((value) => mongoose.Types.ObjectId.isValid(value), {
            message: "Invalid product ObjectId",
        }),
    quantity: z
        .number()
        .int("Quantity must be an integer")
        .min(1, "Quantity must be at least 1"),
    totalPrice: z
        .number()
        .min(0, "Total price must be greater than or equal to 0"),
});

export default orderValidationSchema;

