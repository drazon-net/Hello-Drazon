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
    const { name, company, website, email, service, budget, timeline, message } = req.body || {};

    // Server-side Validation
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
      return res.status(400).json({ success: false, error: 'Project details are required.' });
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
    const cleanCompany = typeof company === 'string' ? company.trim() : '';
    const cleanWebsite = typeof website === 'string' ? website.trim() : '';
    const cleanEmail = email.trim();
    const cleanService = (typeof service === 'string' && service.trim()) ? service.trim() : 'Website Development';
    const cleanBudget = (typeof budget === 'string' && budget.trim()) ? budget.trim() : 'NZ$500–1,000';
    const cleanTimeline = (typeof timeline === 'string' && timeline.trim()) ? timeline.trim() : 'Within 2 Weeks';
    const cleanMessage = message.trim();

    // Format Website Link if provided
    let formattedWebsiteHtml = 'Not provided';
    if (cleanWebsite) {
      const urlPattern = /^https?:\/\//i.test(cleanWebsite) ? cleanWebsite : `https://${cleanWebsite}`;
      formattedWebsiteHtml = `<a href="${urlPattern}" target="_blank" style="color: #10B981; font-weight: 600; text-decoration: underline;">${cleanWebsite}</a>`;
    }

    // 1. Send Main Project Enquiry Email to Agency (hellodrazon@outlook.com)
    const { data: mainData, error: mainError } = await resend.emails.send({
      from: 'Drazon Contact Form <hello@drazon.cc.cd>',
      to: ['hellodrazon@outlook.com'],
      replyTo: cleanEmail,
      subject: `New Project Enquiry from ${cleanName}${cleanCompany ? ` (${cleanCompany})` : ''} - ${cleanService}`,
      html: `
        <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 28px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header Banner -->
          <div style="border-bottom: 2px solid #10B981; padding-bottom: 18px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="background-color: #ecfdf5; color: #059669; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.8px; border: 1px solid #a7f3d0;">High-Quality Enquiry</span>
              <h2 style="color: #0f172a; margin: 8px 0 0 0; font-size: 22px; font-weight: 800; tracking: -0.5px;">New Project Inquiry</h2>
              <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">Received via Drazon Web Development Agency</p>
            </div>
          </div>

          <!-- Project Metadata Cards Grid -->
          <div style="margin-bottom: 24px; background-color: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #f1f5f9;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 150px; border-bottom: 1px solid #edf2f7;">Full Name:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 800; border-bottom: 1px solid #edf2f7;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Email Address:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;"><a href="mailto:${cleanEmail}" style="color: #10B981; font-weight: 700; text-decoration: none;">${cleanEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Company Name:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600; border-bottom: 1px solid #edf2f7;">${cleanCompany || '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Business Website:</td>
                <td style="padding: 8px 0; color: #0f172a; border-bottom: 1px solid #edf2f7;">${formattedWebsiteHtml}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Service Required:</td>
                <td style="padding: 8px 0; color: #059669; font-weight: 700; border-bottom: 1px solid #edf2f7;">${cleanService}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Estimated Budget:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 700; border-bottom: 1px solid #edf2f7;"><span style="background-color: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 6px; font-size: 13px;">${cleanBudget}</span></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Preferred Timeline:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 700;"><span style="background-color: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 6px; font-size: 13px;">${cleanTimeline}</span></td>
              </tr>
            </table>
          </div>

          <!-- Project Details Section -->
          <div style="margin-bottom: 28px;">
            <h3 style="color: #0f172a; font-size: 14px; font-weight: 800; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.6px;">Project Requirements & Details:</h3>
            <div style="background-color: #f1f5f9; padding: 18px; border-radius: 10px; color: #334155; font-size: 14px; line-height: 1.65; white-space: pre-wrap; border-left: 4px solid #10B981;">${cleanMessage}</div>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e2e8f0; padding-top: 18px; text-align: center; font-size: 12px; color: #94a3b8;">
            <p style="margin: 0;">Hit <strong>Reply</strong> to directly communicate with <strong>${cleanName}</strong> (${cleanEmail}).</p>
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
        from: 'Drazon Web Agency <hello@drazon.cc.cd>',
        to: [cleanEmail],
        replyTo: 'hellodrazon@outlook.com',
        subject: `Enquiry Confirmation: ${cleanService} - Drazon Agency`,
        html: `
          <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px;">
            <div style="border-bottom: 2px solid #10B981; padding-bottom: 18px; margin-bottom: 20px; text-align: center;">
              <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 22px; font-weight: 800;">Thank You for Reaching Out, ${cleanName}!</h2>
              <p style="color: #10B981; margin: 0; font-weight: 700; font-size: 14px;">Drazon Web Development Agency</p>
            </div>

            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin-bottom: 18px;">
              We have successfully received your project enquiry regarding <strong>${cleanService}</strong>. Our lead digital architect is reviewing your details and will get back to you with an action plan within 2 business hours.
            </p>

            <div style="background-color: #f8fafc; padding: 18px; border-radius: 12px; margin-bottom: 22px; border: 1px solid #f1f5f9; border-left: 4px solid #10B981;">
              <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px; font-weight: 700;">Summary of Your Submission:</h4>
              <ul style="margin: 0; padding-left: 18px; color: #475569; font-size: 13px; line-height: 1.7;">
                <li><strong>Service:</strong> ${cleanService}</li>
                <li><strong>Estimated Budget:</strong> ${cleanBudget}</li>
                <li><strong>Preferred Timeline:</strong> ${cleanTimeline}</li>
                ${cleanCompany ? `<li><strong>Company:</strong> ${cleanCompany}</li>` : ''}
              </ul>
            </div>

            <p style="color: #334155; font-size: 14px; line-height: 1.6;">
              Need to add more details? Feel free to reply directly to this email or write to us at <a href="mailto:hellodrazon@outlook.com" style="color: #10B981; font-weight: 700;">hellodrazon@outlook.com</a>.
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
      message: 'Your project enquiry has been submitted successfully!',
      id: mainData?.id,
    });
  } catch (err: any) {
    console.error('Contact handler exception:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'An error occurred while submitting your enquiry.',
    });
  }
}
