import { z } from "zod";

const bicycleValidationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    brand: z.string().min(1, "Brand is required"), // "1 means string must have at least 1 character"
    price: z.number().min(0, "Price must be a positive number"), // "0 means number must be positive means greater than 0 or equal to 0"
    type: z.enum(["Mountain", "Road", "Hybrid", "BMX", "Electric"]),
    description: z.string().min(1, "Description is required"),
    quantity: z.number().int().min(0, "Quantity must be a positive integer"),
    inStock: z.boolean(),
});

export default bicycleValidationSchema;