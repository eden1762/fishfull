const line = require('@line/bot-sdk');

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET
};

const client = new line.Client(config);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const events = req.body.events || [];
      const results = await Promise.all(events.map(handleEvent));
      return res.status(200).json(results);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Webhook error' });
    }
  }

  return res.status(200).send('Sustainable Catch Map 2D webhook is live.');
}

async function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const userMsg = event.message.text.trim();
  let replyMessages = [];

  if (userMsg.includes('推薦') || userMsg.includes('吃什麼') || userMsg.includes('魚')) {
    replyMessages.push({
      type: 'text',
      text: '【AI 永續智能推薦】目前推薦：秋刀魚、鬼頭刀。請打開首頁後點選「友善海鮮地圖」探索店家。'
    });
  } else if (userMsg.includes('標籤') || userMsg.includes('永續')) {
    replyMessages.push({
      type: 'text',
      text: '請在首頁點選「永續標籤」，用清楚的 2D 資訊卡理解魚種、漁法、產地與資源狀態。'
    });
  } else {
    replyMessages.push({
      type: 'text',
      text: `您好，歡迎來到永續漁獲地圖。\n您剛才說的是：「${userMsg}」\n可輸入「推薦」或直接進站探索友善海鮮地圖。`
    });
  }

  return client.replyMessage(event.replyToken, replyMessages);
}
