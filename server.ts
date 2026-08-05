import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";
import { Resend } from "resend";
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

// Contact Form Endpoint using Resend
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, service, message } = req.body || {};

    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ success: false, error: "Full name is required." });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ success: false, error: "Email address is required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: "Please enter a valid email address." });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ success: false, error: "Message content is required." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY environment variable is missing.");
      return res.status(500).json({
        success: false,
        error: "Email service is not configured. Please set RESEND_API_KEY in environment variables.",
      });
    }

    const resend = new Resend(apiKey);
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanService = (service || "General Scope").trim();
    const cleanMessage = message.trim();

    // 1. Send Main Inquiry Email to Agency (hellodrazon@outlook.com)
    const { data: mainData, error: mainError } = await resend.emails.send({
      from: "Drazon Contact Form <onboarding@resend.dev>",
      to: ["hellodrazon@outlook.com"],
      replyTo: cleanEmail,
      subject: `New Inquiry from ${cleanName} (${cleanService})`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
          <div style="border-bottom: 2px solid #10B981; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0 0 4px 0; font-size: 20px; font-weight: 800;">New Contact Form Submission</h2>
            <p style="color: #64748b; margin: 0; font-size: 13px;">Received via Drazon Web Development Agency</p>
          </div>

          <div style="margin-bottom: 20px; background-color: #f8fafc; padding: 16px; border-radius: 8px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Client Email:</td>
                <td style="padding: 6px 0; color: #10B981; font-weight: 700;"><a href="mailto:${cleanEmail}" style="color: #10B981; text-decoration: none;">${cleanEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Selected Service:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${cleanService}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #0f172a; font-size: 14px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message Details:</h3>
            <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${cleanMessage}</div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">Direct reply enabled: replying to this email will send your response directly to <strong>${cleanEmail}</strong>.</p>
          </div>
        </div>
      `,
    });

    if (mainError) {
      console.error("Resend main email error:", mainError);
      return res.status(500).json({
        success: false,
        error: mainError.message || "Failed to deliver message via Resend.",
      });
    }

    // 2. Send Automatic Confirmation Email to Visitor
    try {
      await resend.emails.send({
        from: "Drazon Web Agency <onboarding@resend.dev>",
        to: [cleanEmail],
        replyTo: "hellodrazon@outlook.com",
        subject: `We've received your inquiry - Drazon Agency`,
        html: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
            <div style="border-bottom: 2px solid #10B981; padding-bottom: 16px; margin-bottom: 20px; text-align: center;">
              <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 22px; font-weight: 800;">Thank You for Reaching Out, ${cleanName}!</h2>
              <p style="color: #10B981; margin: 0; font-weight: 600; font-size: 14px;">Drazon Web Development Agency</p>
            </div>

            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin-bottom: 16px;">
              We have received your request regarding <strong>${cleanService}</strong>. Our team is reviewing your requirements and will respond to you shortly.
            </p>

            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #10B981;">
              <h4 style="margin: 0 0 8px 0; color: #0f172a; font-size: 14px; font-weight: 700;">Summary of Your Message:</h4>
              <p style="margin: 0; color: #64748b; font-size: 13px; font-style: italic;">"${cleanMessage.length > 180 ? cleanMessage.slice(0, 180) + '...' : cleanMessage}"</p>
            </div>

            <p style="color: #334155; font-size: 14px; line-height: 1.6;">
              If you have any immediate updates or urgent questions, feel free to reply directly to this email or write to <a href="mailto:hellodrazon@outlook.com" style="color: #10B981; font-weight: 600;">hellodrazon@outlook.com</a>.
            </p>

            <div style="border-top: 1px solid #e2e8f0; margin-top: 24px; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0;">Drazon Web Agency &bull; High-performance Digital Solutions</p>
            </div>
          </div>
        `,
      });
    } catch (confErr) {
      console.warn("Visitor confirmation email skipped or unverified domain restriction:", confErr);
    }

    return res.json({
      success: true,
      message: "Your message has been sent successfully!",
      id: mainData?.id,
    });
  } catch (err: any) {
    console.error("Contact endpoint exception:", err);
    return res.status(500).json({
      success: false,
      error: err.message || "An error occurred while attempting to send your message.",
    });
  }
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
