import DOMPurify from 'isomorphic-dompurify';
import { NextResponse } from 'next/server';
import transporter from '../../lib/nodemailer';

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: Request) {
  const {
    name, email, subject, text,
  } = await req.json();
  if (!name || !email || !subject || !text) {
    return NextResponse.json({ message: 'Bad request' });
  }
  try {
    const cleanedName = DOMPurify.sanitize(name);
    const cleanedEmail = DOMPurify.sanitize(email);
    const cleanedSubject = DOMPurify.sanitize(subject);
    const cleanedText = DOMPurify.sanitize(text);
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.RECIPENT_EMAIL,
      subject: cleanedSubject,
      text: 'This is a text string',
      html: createContent({
        name: cleanedName, email: cleanedEmail, subject: cleanedSubject, text: cleanedText,
      }),
    });
    return NextResponse.json({ message: 'Message succesfully sent' });
  } catch (err) {
    if (err && typeof err === 'object' && 'message' in err) {
      return NextResponse.json({ message: err.message as string });
    }
  }
  return NextResponse.json({ message: 'Bad request' });
}

function createContent({
  name, email, subject, text,
}: { name: string, email: string, subject: string, text: string }) {
  return `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <style>
        </style>
        <body>
            <main>
                <h1>Otrzymałeś wiadomość ze strony daniel-szkarupski.pl</h1>
                <section>
                    <h3>Nazwisko:</h3>
                    <p>${name}</p>
                    <h3>Email:</h3>
                    <p>${email}</p>
                    <h3>Temat:</h3>
                    <p>${subject}</p>
                    <h3>Opis:</h3>
                    <p>${text}</p>
                </section>
            </main>
        </body>
        </html>
    `;
}
