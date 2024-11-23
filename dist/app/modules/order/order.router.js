"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const route = express_1.default.Router();
route.post("/create-order", order_controller_1.orderController.createOrderController); // create order
route.get("/revenue", order_controller_1.orderController.calculateRevenueController); // calculate revenue
const orderRoute = route;
exports.default = orderRoute;
