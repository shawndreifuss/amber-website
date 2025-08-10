import { NextResponse } from "next/server";

const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.SENDGRID_FROM || process.env.SENDGRID_TO; // fallback
    const toEmail = process.env.SENDGRID_TO || process.env.SENDGRID_FROM;   // fallback

    if (!apiKey || !fromEmail || !toEmail) {
      return NextResponse.json(
        { error: "Email service not configured. Set SENDGRID_API_KEY, SENDGRID_FROM, SENDGRID_TO." },
        { status: 500 }
      );
    }

    const sgPayload = {
      personalizations: [
        {
          to: [{ email: toEmail }],
          subject: subject || `New contact form submission from ${name}`,
        },
      ],
      from: { email: fromEmail, name: "Website Contact" },
      reply_to: { email, name },
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "(none)"}\n\nMessage:\n${message}`,
        },
      ],
    };

    const res = await fetch(SENDGRID_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sgPayload),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Failed to send email", detail: text },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Unexpected error", detail: err?.message || String(err) },
      { status: 500 }
    );
  }
}

