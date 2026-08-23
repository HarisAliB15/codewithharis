import { Resend } from 'resend';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request) {
  try {
    const resend = getResendClient();
    if (!resend) {
      return Response.json({ error: 'Email service is not configured' }, { status: 503 });
    }

    const { email } = await request.json();

    const data = await resend.emails.send({
      from: 'Newsletter <contact@harisdev.online>',
      to: [process.env.RESEND_TO_EMAIL || 'hello@harisdev.online'],
      subject: `New Newsletter Subscription`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    if (data.error) {
      return Response.json({ error: data.error }, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
