const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

if (!SUPABASE_URL || !SUPABASE_KEY || !TELEGRAM_TOKEN || !CHAT_ID) {
  console.error('Missing required environment variables.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function sendOrdersToTelegram() {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('id', { ascending: false })
      .limit(5);

    if (error) {
      console.error('Supabase error:', error.message || error);
      return;
    }

    if (!data || data.length === 0) {
      console.log('No orders found.');
      return;
    }

    const message =
      '📦 Последние заказы:\n\n' +
      data
        .map((order) => {
          const name = order.name || order.customer_name || 'Без имени';
          const amount = order.amount || order.price || order.total || 0;
          const id = order.id || '-';

          return `👤 ${name}\n💰 ${amount}\n🆔 ${id}`;
        })
        .join('\n\n');

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    const response = await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
    });

    console.log('Message sent successfully.');
    console.log(response.data);
  } catch (err) {
    console.error('Unexpected error:', err.response?.data || err.message || err);
  }
}

sendOrdersToTelegram();
