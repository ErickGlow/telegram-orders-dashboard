# Telegram Orders Dashboard

## Описание
Это простой Node.js проект, который получает последние заказы из Supabase и отправляет их в Telegram в виде сообщения.

Скрипт подключается к таблице `orders`, берет последние 5 записей, форматирует их и отправляет в Telegram через Bot API.

## Цель проекта
Показать рабочую интеграцию между:
- Supabase
- Telegram Bot API
- Node.js
- Vercel

## Ссылки
- GitHub репозиторий: https://github.com/your-username/telegram-orders-dashboard
- Дашборд (Vercel): https://your-vercel-link.vercel.app

## Пример сообщения в Telegram

📦 Последние заказы:

👤 Айгуль  
💰 15000  
🆔 41  

👤 Дина  
💰 40000  
🆔 42  

👤 Нургуль  
💰 58000  
🆔 43  

👤 Малика  
💰 45000  
🆔 44  

👤 Зарина  
💰 56000  
🆔 45  

## Как это работает
1. Скрипт подключается к Supabase через переменные окружения  
2. Получает последние 5 заказов из таблицы `orders`  
3. Формирует сообщение  
4. Отправляет его в Telegram  

## Технологии
- Node.js  
- Supabase  
- Telegram Bot API  
- Axios  
- Vercel  

## Переменные окружения

Используются переменные (без хранения секретов в коде):

- `SUPABASE_URL`  
- `SUPABASE_KEY`  
- `TELEGRAM_TOKEN`  
- `CHAT_ID`  

## Установка

```bash
npm install
