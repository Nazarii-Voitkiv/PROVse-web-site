import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

// Завантажуємо змінні оточення
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

console.log('Token:', token);
console.log('Chat ID:', chatId);

if (!token || !chatId) {
  throw new Error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not found in environment variables');
}

const bot = new TelegramBot(token, { polling: false });

interface OrderData {
  name: string;
  phone: string;
  service?: string;
  services?: string[];
  question?: string;
}

export const sendOrderNotification = async (data: OrderData) => {
  try {
    const message = formatOrderMessage(data);
    console.log('Sending message to Telegram:', message);
    await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    console.log('Message sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return false;
  }
};

const formatOrderMessage = (data: OrderData): string => {
  const { name, phone, service, services, question } = data;
  
  let message = `<b>🔔 Нове замовлення!</b>\n\n`;
  message += `<b>👤 Ім'я:</b> ${name}\n`;
  message += `<b>📞 Телефон:</b> ${phone}\n`;
  
  if (services && services.length > 0) {
    message += `\n<b>🛠 Обрані послуги:</b>\n`;
    services.forEach((service, index) => {
      message += `${index + 1}. ${service}\n`;
    });
  } else if (service) {
    message += `<b>🛠 Послуга:</b> ${service}\n`;
  }
  
  if (question) {
    message += `\n<b>❓ Питання:</b>\n${question}`;
  }
  
  return message;
};
