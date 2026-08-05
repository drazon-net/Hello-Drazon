import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: 'RESEND_API_KEY environment variable is missing. Please set it in Vercel Environment Variables.',
      });
    }

    const resend = new Resend(apiKey);
    const recipient = (req.query.to as string) || (req.body?.to as string) || 'hellodrazon@outlook.com';
    const sender = (req.query.from as string) || (req.body?.from as string) || 'Drazon <hello@drazon.cc.cd>';

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      subject: 'Test Email from Drazon Agency',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; border: 1px solid #10B981; border-radius: 12px; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <h2 style="color: #10B981; margin-top: 0;">Test Email Delivery Successful 🎉</h2>
          <p style="color: #334155; font-size: 15px; line-height: 1.5;">This is a test email sent using the latest Resend SDK from <strong>Drazon Agency</strong>.</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <table style="width: 100%; text-align: left; font-size: 14px; color: #64748b;">
            <tr>
              <td style="padding: 4px 0; font-weight: bold;">Sender:</td>
              <td style="padding: 4px 0; color: #0f172a;">${sender}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: bold;">Recipient:</td>
              <td style="padding: 4px 0; color: #0f172a;">${recipient}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: bold;">Timestamp:</td>
              <td style="padding: 4px 0; color: #0f172a;">${new Date().toISOString()}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error('Resend test email error:', error);
      return res.status(500).json({
        success: false,
        error: error.message,
        details: error,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Test email sent successfully.',
      data,
    });
  } catch (err: any) {
    console.error('Test email handler exception:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'An unexpected error occurred while processing test email.',
    });
  }
}
