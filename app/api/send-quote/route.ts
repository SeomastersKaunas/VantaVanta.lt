import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, whisks, quantity } = body;

    const selectedWhisks = [];
    if (whisks.oak) selectedWhisks.push("Europinio Ąžuolo (European Oak)");
    if (whisks.canadian)
      selectedWhisks.push("Kanadietiško Ąžuolo (Canadian Oak)");
    if (whisks.birch) selectedWhisks.push("Beržo (Birch)");

    const whiskString =
      selectedWhisks.length > 0 ? selectedWhisks.join(", ") : "None selected";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Vanta Vanta Website" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F543F;">New Wholesale Quote Request</h2>
          <p>You have received a new inquiry from the website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Contact:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${contact}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Quantity:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${quantity} units</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Interested In:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${whiskString}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; font-size: 12px; color: #888;">This email was sent automatically from your website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
