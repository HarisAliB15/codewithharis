import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
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
