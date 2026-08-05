import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI, Type } from '@google/genai';

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
    const { businessName, businessType, goals, budget, requestedFeatures } = req.body || {};

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const prompt = `You are the lead AI Solutions Architect at Drazon, an official digital launch agency.
Drazon offers three core launch services:
1. Website Development - Starting from NZ$699 (One-time) - Primary Service
2. UI/UX Design - Starting from NZ$299 (One-time)
3. Website Maintenance - NZ$199/month

Generate an instant custom website proposal for a client with the following details:
- Business Name: ${businessName || 'Valued Client'}
- Industry/Type: ${businessType || 'Small Business / Startup'}
- Main Goals: ${goals || 'Establish online presence and convert visitors'}
- Budget Target: ${budget || 'NZ$699'}
- Key Features Desired: ${Array.isArray(requestedFeatures) ? requestedFeatures.join(', ') : requestedFeatures || 'Custom website, responsive design, modern UI setup'}

Provide a highly professional, encouraging project scope proposal in valid JSON format with:
1. "recommendedPlan": "Website Development (Starting NZ$699)", "UI/UX Design (Starting NZ$299)", or "Website Maintenance (NZ$199/mo)"
2. "estimatedTimeline": string (e.g. "5 to 10 Days")
3. "executiveSummary": brief compelling summary of how Drazon will build their digital presence
4. "coreDeliverables": array of 4-5 specific deliverables matching the selected Drazon service
5. "growthStrategy": string describing how this modern website builds trust and converts local visitors
6. "suggestedAddons": array of 2-3 suggestions like "UI/UX Concept Design (NZ$299)" or "Website Maintenance (NZ$199/mo)"`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        systemInstruction: 'You generate clear, inspiring, professional agency project proposals in JSON.',
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedPlan: { type: Type.STRING },
            estimatedTimeline: { type: Type.STRING },
            executiveSummary: { type: Type.STRING },
            coreDeliverables: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            growthStrategy: { type: Type.STRING },
            suggestedAddons: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: [
            'recommendedPlan',
            'estimatedTimeline',
            'executiveSummary',
            'coreDeliverables',
            'growthStrategy',
            'suggestedAddons',
          ],
        },
      },
    });

    if (!response.text) {
      throw new Error('No response generated from AI model.');
    }

    const proposalData = JSON.parse(response.text.trim());
    return res.status(200).json({ success: true, proposal: proposalData });
  } catch (error: any) {
    console.error('Error generating proposal:', error);
    return res.status(200).json({
      success: false,
      error: 'Unable to generate AI proposal right now. Fallback proposal generated.',
      fallback: {
        recommendedPlan: 'Professional',
        estimatedTimeline: '2-3 Weeks',
        executiveSummary:
          'Drazon will build a high-converting, mobile-optimized website tailored to elevate your business brand and drive qualified customer leads.',
        coreDeliverables: [
          'Custom Glassmorphism Responsive Design',
          'Ultra-fast performance (98+ Google Lighthouse score)',
          'SEO foundation & Schema markup',
          'Interactive Lead Capture & Contact Forms',
          'Mobile & Tablet optimization',
        ],
        growthStrategy:
          'By combining clean aesthetic design with fast load times and clear call-to-actions, your website will turn casual visitors into paying clients.',
        suggestedAddons: [
          'AI Instant Chat Assistant',
          'Google Business Profile Sync',
          'Monthly Performance Analytics',
        ],
      },
    });
  }
}
