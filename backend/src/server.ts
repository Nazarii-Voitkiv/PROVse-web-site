import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { createOrder } from './controllers/order.controller';

// Завантажуємо змінні оточення з правильного шляху
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3001;

// Перевіряємо змінні оточення
console.log('Environment variables loaded:');
console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('TELEGRAM_BOT_TOKEN:', process.env.TELEGRAM_BOT_TOKEN);
console.log('TELEGRAM_CHAT_ID:', process.env.TELEGRAM_CHAT_ID);

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to the API' });
});

// Routes
app.post('/api/orders', (req: Request, res: Response) => {
  return createOrder(req, res);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
