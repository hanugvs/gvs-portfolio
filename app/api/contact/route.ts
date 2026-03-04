import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  // Here you would typically handle the form submission, e.g., send an email or save to a database
  // For demonstration, we'll just log the data and return a success response

  console.log(data);

  return NextResponse.json(
    { message: 'Contact form submitted successfully!' },
    { status: 200 },
  );
}
