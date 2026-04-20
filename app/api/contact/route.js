import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, budget, message } = body;

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    const [adminResult, clientResult] = await Promise.all([

      // 1. Notify you
      resend.emails.send({
        from: 'Contact Form <contact@harisdev.online>',
        to: ['harisaliasghar43@gmail.com'],
        reply_to: email,
        subject: `New Contact Request from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission | CodeWithHaris</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      }),

      // 2. Confirm to client
      resend.emails.send({
        from: 'Haris <contact@harisdev.online>',
        to: [email],
        subject: `Thanks for reaching out, ${firstName}! 🙌`,
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
          <body style="margin:0;padding:0;background-color:#0f0f0f;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f0f;padding:40px 0;">
              <tr><td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;border-radius:16px;overflow:hidden;border:1px solid #2a2a2a;max-width:600px;width:100%;">
                  <tr>
                    <td style="background:#6366f1;padding:40px 40px 30px;text-align:center;">
                      <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">CodeWithHaris</h1>
                      <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Full-Stack Developer & Designer</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:40px 40px 20px;">
                      <h2 style="margin:0 0 12px;color:#ffffff;font-size:22px;">Hey ${firstName}! 👋</h2>
                      <p style="margin:0;color:#a0a0a0;font-size:15px;line-height:1.7;">
                        Thanks for reaching out! I've received your message and will get back to you within <strong style="color:#8b5cf6;">24–48 hours</strong>.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 40px 30px;">
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#242424;border-radius:12px;border:1px solid #2e2e2e;overflow:hidden;">
                        <tr><td style="padding:20px 24px;border-bottom:1px solid #2e2e2e;">
                          <p style="margin:0;color:#6b6b6b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Service requested</p>
                          <p style="margin:4px 0 0;color:#ffffff;font-size:15px;font-weight:600;">${service}</p>
                        </td></tr>
                        <tr><td style="padding:20px 24px;border-bottom:1px solid #2e2e2e;">
                          <p style="margin:0;color:#6b6b6b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Budget</p>
                          <p style="margin:4px 0 0;color:#ffffff;font-size:15px;font-weight:600;">${budget}</p>
                        </td></tr>
                        <tr><td style="padding:20px 24px;">
                          <p style="margin:0;color:#6b6b6b;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Your message</p>
                          <p style="margin:4px 0 0;color:#c0c0c0;font-size:14px;line-height:1.6;">${message}</p>
                        </td></tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 40px 40px;text-align:center;">
                      <a href="https://harisdev.online" style="display:inline-block;background:#6366f1;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;">Visit My Portfolio →</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color:#111111;padding:24px 40px;text-align:center;border-top:1px solid #2a2a2a;">
                      <p style="margin:0;color:#4a4a4a;font-size:13px;">© 2026 CodeWithHaris · All rights reserved</p>
                      <p style="margin:6px 0 0;color:#4a4a4a;font-size:12px;">If you didn't submit this form, please ignore this email.</p>
                    </td>
                  </tr>
                </table>
              </td></tr>
            </table>
          </body>
          </html>
        `
      })
    ]);

    console.log('Admin email:', adminResult.error || 'sent ok');
    console.log('Client email:', clientResult.error || 'sent ok');

    if (adminResult.error) {
      return Response.json({ error: adminResult.error }, { status: 400 });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error('SERVER ERROR:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}