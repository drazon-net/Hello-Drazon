import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", agency: "Drazon Web Development Agency" });
});

// AI Proposal Generator Endpoint
app.post("/api/ai/proposal", async (req, res) => {
  try {
    const { businessName, businessType, goals, budget, requestedFeatures } = req.body;

    const prompt = `You are the lead AI Solutions Architect at Drazon, an official digital launch agency.
Drazon offers three core launch services:
1. Website Development - Starting from NZ$699 (One-time) - Primary Service
2. UI/UX Design - Starting from NZ$299 (One-time)
3. Website Maintenance - NZ$199/month

Generate an instant custom website proposal for a client with the following details:
- Business Name: ${businessName || "Valued Client"}
- Industry/Type: ${businessType || "Small Business / Startup"}
- Main Goals: ${goals || "Establish online presence and convert visitors"}
- Budget Target: ${budget || "NZ$699"}
- Key Features Desired: ${Array.isArray(requestedFeatures) ? requestedFeatures.join(", ") : requestedFeatures || "Custom website, responsive design, modern UI setup"}

Provide a highly professional, encouraging project scope proposal in valid JSON format with:
1. "recommendedPlan": "Website Development (Starting NZ$699)", "UI/UX Design (Starting NZ$299)", or "Website Maintenance (NZ$199/mo)"
2. "estimatedTimeline": string (e.g. "5 to 10 Days")
3. "executiveSummary": brief compelling summary of how Drazon will build their digital presence
4. "coreDeliverables": array of 4-5 specific deliverables matching the selected Drazon service
5. "growthStrategy": string describing how this modern website builds trust and converts local visitors
6. "suggestedAddons": array of 2-3 suggestions like "UI/UX Concept Design (NZ$299)" or "Website Maintenance (NZ$199/mo)"`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction: "You generate clear, inspiring, professional agency project proposals in JSON.",
        responseMimeType: "application/json",
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
          required: ["recommendedPlan", "estimatedTimeline", "executiveSummary", "coreDeliverables", "growthStrategy", "suggestedAddons"],
        },
      },
    });

    if (!response.text) {
      throw new Error("No response generated from AI model.");
    }

    const proposalData = JSON.parse(response.text.trim());
    res.json({ success: true, proposal: proposalData });
  } catch (error: any) {
    console.error("Error generating proposal:", error);
    res.status(500).json({
      success: false,
      error: "Unable to generate AI proposal right now. Fallback proposal generated.",
      fallback: {
        recommendedPlan: "Professional",
        estimatedTimeline: "2-3 Weeks",
        executiveSummary: "Drazon will build a high-converting, mobile-optimized website tailored to elevate your business brand and drive qualified customer leads.",
        coreDeliverables: [
          "Custom Glassmorphism Responsive Design",
          "Ultra-fast performance (98+ Google Lighthouse score)",
          "SEO foundation & Schema markup",
          "Interactive Lead Capture & Contact Forms",
          "Mobile & Tablet optimization"
        ],
        growthStrategy: "By combining clean aesthetic design with fast load times and clear call-to-actions, your website will turn casual visitors into paying clients.",
        suggestedAddons: ["AI Instant Chat Assistant", "Google Business Profile Sync", "Monthly Performance Analytics"]
      }
    });
  }
});

// AI Agency Assistant Chat Endpoint
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message, chatHistory } = req.body;

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
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.text }],
        });
      });
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ success: true, reply: response.text });
  } catch (error: any) {
    console.error("AI Chat error:", error);
    res.json({
      success: true,
      reply: "Drazon specializes in building fast, high-converting websites starting at affordable rates. How can we help transform your online presence today?",
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Drazon Agency Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
