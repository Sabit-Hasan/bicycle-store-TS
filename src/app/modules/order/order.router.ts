import express from "express";
import { orderController } from "./order.controller";
const route = express.Router();


route.post("/create-order", orderController.createOrderController); // create order
route.get("/revenue", orderController.calculateRevenueController); // calculate revenue

const orderRoute = route;

export default orderRoute;