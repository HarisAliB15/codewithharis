import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, budget, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Note: Use this testing email if 'harisdev.online' is not verified in Resend yet
      to: ['harisaliasghar43@gmail.com'], 
      reply_to: email, // Added so you can directly reply to the user!
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

    if (error) {
      console.error('RESEND API ERROR:', error);
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('SERVER ERROR:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}