import { Request, Response } from 'express';
import orderValidationSchema from './order.zodValidation';
import { orderService } from './order.service';
import { TOrder } from './order.interface';
import mongoose from 'mongoose';

// create order
const createOrderController = async (req: Request, res: Response) => {
    try {
        const validatedOrder = await orderValidationSchema.parseAsync(req.body);

        // Convert product string to ObjectId
        const orderData: TOrder = {
            ...validatedOrder,
            product: new mongoose.Types.ObjectId(validatedOrder.product),
        };

        const order = await orderService.createOrderService(orderData);

        if (order.success === false) {
            res.status(400).json({
                message: order.message,
                success: false,
                error: true,
            });
        } else {
            res.status(201).json({
                message: order.message,
                success: true,
                error: false,
                data: order.data,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: 'Failed to create order',
            success: false,
            error: true,
            stack: (error as { stack: string }).stack
        });
    }
};

// calculate revenue
const calculateRevenueController = async (req: Request, res: Response) => {
    try {
        const totalRevenue = await orderService.calculateRevenueService();

        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: { totalRevenue },
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to calculate revenue",
            status: false,
            error: true,
            stack: (error as { stack: string }).stack
        });
    }
};

export const orderController = {
    createOrderController,
    calculateRevenueController
};