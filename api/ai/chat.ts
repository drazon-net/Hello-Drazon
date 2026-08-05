import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { message, chatHistory } = req.body || {};

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const systemInstruction = `You are Drazon's Lead Digital Strategy Consultant.
Drazon provides three official launch services for New Zealand businesses:
1. Website Development: Starting from NZ$699 (One-time). Includes custom business website, responsive design for all devices, modern UI implementation, basic website setup, deployment assistance.
2. UI/UX Design: Starting from NZ$299 (One-time). Includes website layout design, user experience planning, modern visual design, professional design concepts, design improvement suggestions.
3. Website Maintenance: NZ$199/month. Includes website updates, bug fixes, technical support, regular maintenance, performance monitoring.

Important Rule: Do NOT discuss or offer digital marketing, customer support, AI chatbots, or legacy services outside these three official offerings.
Be friendly, professional, concise, persuasive, and helpful. Always quote pricing clearly in New Zealand Dollars (NZ$).`;

    const contents: any[] = [];
    if (Array.isArray(chatHistory)) {
      chatHistory.forEach((item: { role: string; text: string }) => {
        contents.push({
          role: item.role === 'user' ? 'user' : 'model',
          parts: [{ text: item.text }],
        });
      });
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.status(200).json({ success: true, reply: response.text });
  } catch (error: any) {
    console.error('AI Chat error:', error);
    return res.status(200).json({
      success: true,
      reply:
        'Drazon specializes in building fast, high-converting websites starting at affordable rates. How can we help transform your online presence today?',
    });
  }
}
