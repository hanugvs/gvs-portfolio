import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: 'Invalid JSON body.' },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const subject = body.subject?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: 'Name, email, subject, and message are required.' },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: 'Please provide a valid email address.' },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          'Contact email is not configured. Set RESEND_API_KEY to enable the form, or email gvs1.dev@gmail.com directly.',
      },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || 'gvs1.dev@gmail.com';
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    'Portfolio Contact <onboarding@resend.dev>';

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Failed to send message. Please try again later.' },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully. I will get back to you soon.' },
      { status: 200 },
    );
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { message: 'Unexpected server error while sending message.' },
      { status: 500 },
    );
  }
}
