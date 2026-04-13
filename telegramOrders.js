const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');

// 🔑 ТВОИ ДАННЫЕ
const SUPABASE_URL = 'https://ihmqehwnqvnqeuhleooj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_7j7wBChfmcbGgYD9tagCRw_jtQcuvYt';

const TELEGRAM_TOKEN = '8746472416:AAFLG61hl8FhjFmoZeWZPH8pt_TtaLEkb5A';
const CHAT_ID = '6222262889';

// подключение к Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function sendOrdersToTelegram() {
  try {
    // берем заказы
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('id', { ascending: false })
      .limit(5); // последние 5 заказов

    if (error) {
      console.log('❌ Ошибка Supabase:', error);
      return;
    }

    if (!data || data.length === 0) {
      console.log('⚠️ Нет заказов');
      return;
    }

    // формируем сообщение
    let message = '📦 Последние заказы:\n\n';

    data.forEach(order => {
      message += `👤 ${order.first_name}\n`;
      message += `💰 ${order.total}\n`;
      message += `🆔 ${order.external_id}\n\n`;
    });

    // отправка в Telegram
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
    });

    console.log('✅ Отправлено в Telegram');

  } catch (err) {
    console.log('❌ Ошибка:', err.response?.data || err.message);
  }
}

sendOrdersToTelegram();
