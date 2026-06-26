import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT = "oneworldkololi@gmail.com";
const FROM      = "One World Website <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const { name, phone, email, subject, message } = await req.json();

    if (!name || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to:   RECIPIENT,
      replyTo: email || undefined,
      subject: `[One World Website] ${subject} — from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1B2A87;padding:24px 32px;border-radius:12px 12px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:20px;">New Contact Form Submission</h2>
            <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:14px;">One World Financial Services website</p>
          </div>
          <div style="background:#f9fafb;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb;border-top:none;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;color:#111827;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:8px 0;color:#111827;">${phone || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:8px 0;color:#111827;">${email || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Subject</td><td style="padding:8px 0;color:#111827;">${subject}</td></tr>
            </table>
            <div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e5e7eb;">
              <p style="margin:0 0 8px;color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
              <p style="margin:0;color:#111827;line-height:1.6;white-space:pre-wrap;">${message}</p>
            </div>
            ${email ? `<p style="margin-top:20px;font-size:13px;color:#6b7280;">Reply directly to this email to respond to ${name}.</p>` : ""}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
