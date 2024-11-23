import Bicycle from '../bicycle/bicycle.model';
import { TOrder } from './order.interface';
import Order from './order.model';

// create order
const createOrderService = async (orderData: TOrder) => {
    try {
        const product = await Bicycle.findById(orderData.product);
        if (!product) {
            return {
                success: false,
                message: 'Product not found',
            };
        }

        if (product.quantity < orderData.quantity) {
            return {
                success: false,
                message: 'Insufficient stock',
            };
        }

        // Reduce quantity in bicycle model
        product.quantity -= orderData.quantity;
        if (product.quantity === 0) {
            product.inStock = false;
        }
        await product.save();

        // Create order
        const order = new Order(orderData);
        await order.save();

        return {
            success: true,
            data: order,
        };
    } catch {
        return {
            success: false,
            message: 'Error creating order',
        };
    }
};

// calculate revenue
const calculateRevenueService = async () => {
    // aggregate revenue using $multiply
    const revenueData = await Order.aggregate([
        {
            $project: {
                dynamicRevenue: { $multiply: ["$totalPrice", "$quantity"] },
            },
        },
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$dynamicRevenue" },
            },
        },
        {
            $project: {
                _id: 0,
                totalRevenue: 1,
            },
        },
    ]);


    return revenueData[0]?.totalRevenue || 0;
};

export const orderService = {
    createOrderService,
    calculateRevenueService
};