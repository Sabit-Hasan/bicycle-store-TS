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
exports.orderController = void 0;
const order_zodValidation_1 = __importDefault(require("./order.zodValidation"));
const order_service_1 = require("./order.service");
const mongoose_1 = __importDefault(require("mongoose"));
// create order
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatedOrder = yield order_zodValidation_1.default.parseAsync(req.body);
        // Convert product string to ObjectId
        const orderData = Object.assign(Object.assign({}, validatedOrder), { product: new mongoose_1.default.Types.ObjectId(validatedOrder.product) });
        const order = yield order_service_1.orderService.createOrderService(orderData);
        if (order.success === false) {
            res.status(400).json({
                message: order.message,
                success: false,
                error: true,
            });
        }
        else {
            res.status(201).json({
                message: order.message,
                success: true,
                error: false,
                data: order.data,
            });
        }
    }
    catch (error) {
        res.status(400).json({
            message: 'Failed to create order',
            success: false,
            error: true,
            stack: error.stack
        });
    }
});
// calculate revenue
const calculateRevenueController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.orderService.calculateRevenueService();
        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: { totalRevenue },
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to calculate revenue",
            status: false,
            error: true,
            stack: error.stack
        });
    }
});
exports.orderController = {
    createOrderController,
    calculateRevenueController
};
