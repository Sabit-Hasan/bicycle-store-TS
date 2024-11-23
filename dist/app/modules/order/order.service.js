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
exports.orderService = void 0;
const bicycle_model_1 = __importDefault(require("../bicycle/bicycle.model"));
const order_model_1 = __importDefault(require("./order.model"));
// create order
const createOrderService = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield bicycle_model_1.default.findById(orderData.product);
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
        yield product.save();
        // Create order
        const order = new order_model_1.default(orderData);
        yield order.save();
        return {
            success: true,
            data: order,
        };
    }
    catch (_a) {
        return {
            success: false,
            message: 'Error creating order',
        };
    }
});
// calculate revenue
const calculateRevenueService = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // aggregate revenue using $multiply
    const revenueData = yield order_model_1.default.aggregate([
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
    return ((_a = revenueData[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
});
exports.orderService = {
    createOrderService,
    calculateRevenueService
};
