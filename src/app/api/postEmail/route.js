import { Resend } from 'resend'; // Import Resend correctly
import Email from '@/emails/email'; // Email template
import { NextResponse } from 'next/server'; // Use NextResponse

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {

  try {
    const { name, email, message } = await request.json();

    const emailContent = <Email name={name} email={email} message={message} />;

    const { data, error } = await resend.emails.send({
      from: 'email@alison.dev',
      to: 'alison.jyue.sun@gmail.com',
      subject: `hello ${name}`,
      react: emailContent
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Caught error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
