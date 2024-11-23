"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bicycle_route_1 = __importDefault(require("./app/modules/bicycle/bicycle.route"));
const order_router_1 = __importDefault(require("./app/modules/order/order.router"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
// routes
app.use('/api/products', bicycle_route_1.default); // bicycle route
app.use('/api/orders', order_router_1.default); // order route
exports.default = app;
