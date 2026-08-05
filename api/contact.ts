import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
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
    const { name, email, service, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY environment variable is missing.');
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please set RESEND_API_KEY in Vercel Environment Variables.',
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: 'Drazon Contact Form <onboarding@resend.dev>',
      to: ['hellodrazon@outlook.com'],
      replyTo: email,
      subject: `New Website Inquiry from ${name} (${service || 'General Scope'})`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
          <div style="border-bottom: 2px solid #10B981; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0 0 4px 0; font-size: 20px; font-weight: 800;">New Contact Form Submission</h2>
            <p style="color: #64748b; margin: 0; font-size: 13px;">Received via Drazon Agency Website</p>
          </div>

          <div style="margin-bottom: 20px; background-color: #f8fafc; padding: 16px; border-radius: 8px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Client Email:</td>
                <td style="padding: 6px 0; color: #10B981; font-weight: 700;"><a href="mailto:${email}" style="color: #10B981; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Interested Service:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">${service || 'General Scope'}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="color: #0f172a; font-size: 14px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</h3>
            <div style="background-color: #f1f5f9; padding: 16px; border-radius: 8px; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">Click Reply in your email client to respond directly to <strong>${email}</strong>.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to deliver email through Resend API.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
      id: data?.id,
    });
  } catch (err: any) {
    console.error('Contact endpoint exception:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'An error occurred while attempting to send your message.',
    });
  }
}
