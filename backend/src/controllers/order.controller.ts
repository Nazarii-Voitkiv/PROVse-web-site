import { Request, Response } from 'express';
import { sendOrderNotification } from '../services/telegram.service';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phone, service, question } = req.body;

    // Валідація
    if (!name || !phone) {
      res.status(400).json({ 
        success: false, 
        message: 'Name and phone are required' 
      });
      return;
    }

    // Відправка повідомлення в Telegram
    const notificationSent = await sendOrderNotification({
      name,
      phone,
      service,
      question
    });

    if (!notificationSent) {
      res.status(500).json({ 
        success: false, 
        message: 'Failed to send notification' 
      });
      return;
    }

    res.status(200).json({ 
      success: true, 
      message: 'Order created successfully' 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
};
