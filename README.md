# PROVse - Freight Work and Handyman Services in Lviv
# PROVse - Вантажні роботи та різноробочі послуги у Львові

Website for ordering freight work and handyman services in Lviv. The site includes order forms with Telegram integration for instant owner notifications about new orders.

Веб-сайт для замовлення вантажних робіт та різноробочих послуг у Львові. Сайт включає форми замовлення з інтеграцією Telegram для миттєвого сповіщення власника про нові замовлення.

## 🚀 Technologies / Технології

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Telegram Bot API

## 📋 Prerequisites / Передумови

- Node.js (recommended version 20.x.x LTS / рекомендована версія 20.x.x LTS)
- npm or/або yarn
- Telegram bot (for receiving order notifications / для отримання сповіщень про замовлення)

## 🛠 Project Setup / Налаштування проекту

1. Clone the repository / Склонуйте репозиторій:
```bash
git clone https://github.com/[your-username]/provse-website.git
cd provse-website
```

2. Install dependencies / Встановіть залежності:
```bash
npm install
# or/або
yarn install
```

3. Create `.env.local` file in the project root with the following variables / Створіть файл `.env.local` в корені проекту з наступними змінними:
```env
NEXT_PUBLIC_PHONE_NUMBER="your-phone-number"
NEXT_PUBLIC_PHONE_DISPLAY="your-display-phone-number"
TELEGRAM_BOT_TOKEN="your-bot-token"
TELEGRAM_CHAT_ID="your-chat-id"
```

4. Start the development server / Запустіть проект в режимі розробки:
```bash
npm run dev
# or/або
yarn dev
```

## 📁 Project Structure / Структура проекту

```
frontend/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── telegram/
│   │   │       └── route.ts    # Telegram integration API route / API роут для Telegram інтеграції
│   │   ├── layout.tsx          # Main layout with ToastProvider / Головний layout з ToastProvider
│   │   └── page.tsx            # Main page / Головна сторінка
│   ├── components/
│   │   ├── CallbackModal.tsx   # Callback request modal / Модальне вікно зворотного дзвінка
│   │   ├── HeroSection.tsx     # Hero section / Головна секція
│   │   ├── Navbar.tsx          # Navigation bar / Навігаційна панель
│   │   ├── OrderForm.tsx       # Order form / Форма замовлення
│   │   ├── ServiceOrderModal.tsx# Service order modal / Модальне вікно замовлення послуг
│   │   ├── ServicesModal.tsx   # Services selection modal / Модальне вікно вибору послуг
│   │   ├── ServicesSection.tsx # Services section / Секція послуг
│   │   └── Toast.tsx           # Notifications component / Компонент сповіщень
│   └── styles/
│       └── globals.css         # Global styles / Глобальні стилі
└── .env.local                  # Local environment variables / Локальні змінні середовища
```

## 🤖 Telegram Bot Setup / Налаштування Telegram бота

1. Create a new bot via [@BotFather](https://t.me/botfather) / Створіть нового бота через [@BotFather](https://t.me/botfather)
2. Get the bot token / Отримайте токен бота
3. Start a chat with your bot / Почніть чат з вашим ботом
4. Get your Chat ID via [@userinfobot](https://t.me/userinfobot) / Отримайте ваш Chat ID через [@userinfobot](https://t.me/userinfobot)
5. Add the obtained data to `.env.local` / Додайте отримані дані в `.env.local`

## 🔒 Security / Безпека

- Don't commit `.env.local` file to the repository / Не комітьте файл `.env.local` до репозиторію
- Keep the bot token secret / Зберігайте токен бота в секреті
- Use environment variables in production / Використовуйте environment variables в production

## 📱 Features / Функціонал

- Responsive design / Адаптивний дизайн
- Service order forms / Форми замовлення послуг
- Telegram integration for instant notifications / Інтеграція з Telegram для миттєвих сповіщень
- Animations using Framer Motion / Анімації з використанням Framer Motion
- Toast notifications for user feedback / Toast сповіщення для користувача

## 🌐 Deployment / Деплой

The project can be deployed on Vercel / Проект можна розгорнути на Vercel:

1. Create an account on [Vercel](https://vercel.com) / Створіть акаунт на [Vercel](https://vercel.com)
2. Connect your GitHub repository / Підключіть ваш GitHub репозиторій
3. Add environment variables in project settings / Додайте змінні середовища в налаштуваннях проекту
4. Vercel will automatically deploy your site / Vercel автоматично розгорне ваш сайт

## 📝 License / Ліцензія

MIT
