import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    try {
        const body = await request.json();

        if (body.intent === "newsletter") {
            const email = typeof body.email === "string" ? body.email.trim() : "";
            if (!email || !EMAIL_REGEX.test(email)) {
                return Response.json(
                    { error: "A valid email is required" },
                    { status: 400 }
                );
            }

            const { data, error } = await resend.emails.send({
                from: "MVSR Tax <onboarding@resend.dev>",
                to: ["sripathivamshiyadav@gmail.com"],
                replyTo: email,
                subject: "Subscribed to updates — MVSR Tax blog",
                html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #2d6a4f; padding-bottom: 12px;">
            New blog / updates subscriber
          </h2>
          <p style="margin-top: 20px; color: #1a1a1a;">
            Someone requested to stay informed via the blog newsletter form.
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 140px;">Email:</td>
              <td style="padding: 10px 0; color: #1a1a1a;">
                <a href="mailto:${email}" style="color: #2d6a4f;">${email}</a>
              </td>
            </tr>
          </table>
          <p style="margin-top: 32px; font-size: 12px; color: #999;">
            This email was sent from the MVSR Tax blog newsletter signup.
          </p>
        </div>
      `,
            });

            if (error) {
                return Response.json({ error: error.message }, { status: 500 });
            }

            return Response.json({ success: true, data });
        }

        const { name, email, phone, service, message } = body;

        const { data, error } = await resend.emails.send({
            from: "MVSR Tax <onboarding@resend.dev>",
            to: ["Mvsrtax@gmail.com"],
            replyTo: email,
            subject: `New Contact Form Submission - ${service}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #2d6a4f; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 140px;">Name:</td>
              <td style="padding: 10px 0; color: #1a1a1a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px 0; color: #1a1a1a;">
                <a href="mailto:${email}" style="color: #2d6a4f;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 10px 0; color: #1a1a1a;">
                <a href="tel:${phone}" style="color: #2d6a4f;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Service:</td>
              <td style="padding: 10px 0; color: #1a1a1a;">${service}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background-color: #f8f8f8; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #555;">Message:</p>
            <p style="margin: 0; color: #1a1a1a; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #999;">
            This email was sent from the MVSR Tax website contact form.
          </p>
        </div>
      `,
        });

        if (error) {
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch {
        return Response.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
