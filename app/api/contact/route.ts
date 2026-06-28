import { NextResponse } from "next/server";

import { resend } from "@/lib/resend";
import { validateContact, ContactFormData } from "@/lib/validation";

import {
  adminEnquiryTemplate,
  clientEnquiryTemplate,
} from "@/lib/email-template";

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    /* ---------------------------------------
       1. SPAM PROTECTION (HONEYPOT)
    ---------------------------------------- */
    if (body.website) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    /* ---------------------------------------
       2. VALIDATION
    ---------------------------------------- */
    const validationError = validateContact(body);

    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    /* ---------------------------------------
       3. CLEAN DATA
    ---------------------------------------- */
    const enquiry = {
      name: body.name.trim(),
      organization: body.organization?.trim() || "",
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      industry: body.industry?.trim() || "",
      message: body.message.trim(),
    };

    /* ---------------------------------------
       4. SEND ADMIN EMAIL (YOU)
    ---------------------------------------- */
    const adminEmail = await resend.emails.send({
      from: "noreply@rakshaksecuretech.com",
      // production:
      // from: "Rakshak Secure Tech <noreply@rakshaksecuretech.com>",

      to: ["info@rakshaksecuretech.com"],

      replyTo: enquiry.email,

      subject: `🚨 New Lead | ${enquiry.name} | Rakshak Secure Tech`,

      html: adminEnquiryTemplate(enquiry),
    });

    if (adminEmail.error) {
      console.error("Admin Email Error:", adminEmail.error);

      return NextResponse.json(
        { error: "Failed to send admin notification email." },
        { status: 500 }
      );
    }

    /* ---------------------------------------
       5. SEND CLIENT AUTO-REPLY
    ---------------------------------------- */
    const clientEmail = await resend.emails.send({
      from: "Rakshak Secure Tech <noreply@rakshaksecuretech.com>",

      to: [enquiry.email],

      subject: "✅ We Received Your Enquiry – Rakshak Secure Tech",

      html: clientEnquiryTemplate(enquiry),
    });

    if (clientEmail.error) {
      console.error("Client Email Error:", clientEmail.error);

      // NOTE: admin email already sent, so we still return success
    }

    /* ---------------------------------------
       6. SUCCESS RESPONSE
    ---------------------------------------- */
    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      {
        error: "Unable to submit enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}