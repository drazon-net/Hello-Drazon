import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
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

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ success: false, error: 'Full name is required.' });
    }

    if (!email || typeof email !== 'string' || !email.trim()) {
      return res.status(400).json({ success: false, error: 'Email address is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message content is required.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY environment variable is missing.');
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please set RESEND_API_KEY in environment variables.',
      });
    }

    const resend = new Resend(apiKey);
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanService = (service || 'General Scope').trim();
    const cleanMessage = message.trim();

    // 1. Send Main Inquiry Email to Agency (hellodrazon@outlook.com)
    const { data: mainData, error: mainError } = await resend.emails.send({
      from: 'Drazon Contact Form <onboarding@resend.dev>',
      to: ['hellodrazon@outlook.com'],
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
      console.error('Resend main email error:', mainError);
      return res.status(500).json({
        success: false,
        error: mainError.message || 'Failed to deliver message via Resend.',
      });
    }

    // 2. Send Automatic Confirmation Email to Visitor
    try {
      await resend.emails.send({
        from: 'Drazon Web Agency <onboarding@resend.dev>',
        to: [cleanEmail],
        replyTo: 'hellodrazon@outlook.com',
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
      console.warn('Visitor confirmation email skipped or unverified domain restriction:', confErr);
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
      id: mainData?.id,
    });
  } catch (err: any) {
    console.error('Contact handler exception:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'An error occurred while attempting to send your message.',
    });
  }
}
