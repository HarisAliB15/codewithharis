import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, budget, message } = body;

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.RESEND_TO_EMAIL || 'hello@harisdev.online'],
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
    });

    if (data.error) {
      console.error('RESEND API ERROR:', data.error);
      return Response.json({ error: data.error }, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('SERVER ERROR:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
