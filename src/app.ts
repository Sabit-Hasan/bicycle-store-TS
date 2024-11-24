import express, { Application } from 'express';
import bicycleRoute from './app/modules/bicycle/bicycle.route';
import orderRoute from './app/modules/order/order.router';
import cors from 'cors';

const app: Application = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/products', bicycleRoute); // bicycle route
app.use('/api/orders', orderRoute); // order route

// testing
app.get('/', (req, res) => {
    res.send('Bicycle Store API');
});

export default app;