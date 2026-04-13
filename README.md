# telegram-orders-dashboard
Dashboard task
# Telegram Orders Dashboard

## Description
This is a Node.js project that retrieves the latest orders from Supabase and sends them to Telegram as a formatted notification.

The script connects to the `orders` table, gets the latest 5 records, formats them into a readable message, and sends the result to a Telegram chat using Telegram Bot API.

## Project Goal
The goal of this project is to demonstrate a working integration between:
- Supabase
- Telegram Bot API
- Node.js
- Vercel

## Repository
- GitHub Repository: https://github.com/YOUR_USERNAME/telegram-orders-dashboard
- Live Dashboard / Deployment: https://YOUR-VERCEL-LINK.vercel.app

## Example Telegram Output

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

## How It Works
1. The script connects to Supabase using environment variables.
2. It reads the latest 5 orders from the `orders` table.
3. It formats the orders into a Telegram message.
4. It sends the message to the specified Telegram chat.

## Technologies Used
- Node.js
- Supabase
- Telegram Bot API
- Axios
- Vercel

## Environment Variables
The project uses environment variables instead of hardcoded secrets.

Required variables:
- `SUPABASE_URL`
- `SUPABASE_KEY`
- `TELEGRAM_TOKEN`
- `CHAT_ID`

## Installation

```bash
npm install
