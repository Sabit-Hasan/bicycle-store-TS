import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    email: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Bicycle", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;