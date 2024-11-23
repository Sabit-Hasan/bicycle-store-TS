import mongoose from "mongoose";
import { TBicycle } from "./bicycle.interface";

const bicycleSchema = new mongoose.Schema<TBicycle>({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: {
        type: String,
        enum: ["Mountain", "Road", "Hybrid", "BMX", "Electric"],
        required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
}, { timestamps: true });


const Bicycle = mongoose.model<TBicycle>("Bicycle", bicycleSchema);

export default Bicycle;