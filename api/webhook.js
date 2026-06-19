const LINE_REPLY_ENDPOINT = 'https://api.line.me/v2/bot/message/reply';

const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send('🌊 FishFull 漁有料 webhook is live.');
  }

  try {
    const body = parseBody(req.body);
    const events = Array.isArray(body.events) ? body.events : [];
    const results = await Promise.all(events.map(handleEvent));
    return res.status(200).json(results);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Webhook error' });
  }
}

function parseBody(body) {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
}

async function handleEvent(event) {
  if (!event || event.type !== 'message' || !event.message || event.message.type !== 'text') {
    return null;
  }

  const userMsg = String(event.message.text || '').trim();
  const replyMessages = buildReplyMessages(userMsg);

  if (!channelAccessToken) {
    console.warn('LINE_CHANNEL_ACCESS_TOKEN is not configured. Skip LINE reply.');
    return { skipped: true, reason: 'missing LINE_CHANNEL_ACCESS_TOKEN' };
  }

  if (!event.replyToken) {
    return { skipped: true, reason: 'missing replyToken' };
  }

  const response = await fetch(LINE_REPLY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${channelAccessToken}`
    },
    body: JSON.stringify({
      replyToken: event.replyToken,
      messages: replyMessages
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`LINE reply failed: ${response.status} ${text}`);
  }

  return { ok: true };
}

function buildReplyMessages(userMsg) {
  if (userMsg.includes('推薦') || userMsg.includes('吃什麼') || userMsg.includes('魚')) {
    return [{
      type: 'text',
      text: '🌊【FishFull 永續海鮮推薦】\n目前推薦：當季友善魚種與低碳漁法選擇。\n請打開首頁點選「友善海鮮地圖」，查看合作通路、食譜任務與採購回饋。'
    }];
  }

  if (userMsg.includes('AR') || userMsg.includes('體驗')) {
    return [{
      type: 'text',
      text: '📱 請在首頁點選「AR 永續任務」，掃描標籤、解鎖徽章、查看漁法故事，也可在支援裝置上開啟相機互動。'
    }];
  }

  return [{
    type: 'text',
    text: `您好，歡迎來到 FishFull 漁有料。\n您剛才說的是：「${userMsg}」\n可輸入「推薦」或進站探索友善海鮮地圖與 AR 永續任務。`
  }];
}
