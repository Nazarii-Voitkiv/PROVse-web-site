import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { type, formData } = data;

    let message = '';
    switch (type) {
      case 'callback':
        message = `🔔 Нова заявка на зворотній дзвінок:\n\n` +
          `👤 Ім'я: ${formData.name}\n` +
          `📞 Телефон: ${formData.phone}\n` +
          `❓ Питання: ${formData.question}`;
        break;
      case 'service':
        message = `🛠 Нове замовлення послуги:\n\n` +
          `👤 Ім'я: ${formData.name}\n` +
          `📞 Телефон: ${formData.phone}\n` +
          `🔧 Послуга: ${formData.service}\n` +
          `📝 Опис: ${formData.description}`;
        break;
      default:
        message = `📨 Нове повідомлення:\n${JSON.stringify(formData, null, 2)}`;
    }

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
