import express, { Application } from 'express';
import bicycleRoute from './app/modules/bicycle/bicycle.route';
import orderRoute from './app/modules/order/order.router';

const app: Application = express();

// middleware
app.use(express.json());

// routes
app.use('/api/products', bicycleRoute); // bicycle route
app.use('/api/orders', orderRoute); // order route

export default app;