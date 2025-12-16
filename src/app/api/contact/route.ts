import { ContactFormEmail } from "@/emails/ContactFormEmail";
import { render } from "@react-email/render";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation des champs requis
    const {
      name,
      organization,
      email,
      interest,
      brochure,
      bookExtract,
      consent,
    } = body;

    if (!name || !organization || !email || !consent) {
      return NextResponse.json(
        {
          success: false,
          message: "All required fields must be filled.",
        },
        { status: 400 }
      );
    }

    // Validation du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    // Variables d'environnement
    const fromEmail = process.env.FROM_EMAIL;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!fromEmail || !contactEmail) {
      console.error("FROM_EMAIL or CONTACT_EMAIL not configured");
      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      );
    }

    // Déterminer le type de demande pour le sujet de l'email
    const isBrochure = Boolean(brochure);
    const isBookExtract = Boolean(bookExtract);

    let emailSubject: string;
    if (isBookExtract && !isBrochure) {
      // Uniquement pour le livre
      emailSubject = `Livre - Nouvelle demande de ${name.trim()}`;
    } else if (isBrochure && !isBookExtract) {
      // Uniquement pour la brochure
      emailSubject = `Brochure - Nouvelle demande de ${name.trim()}`;
    } else {
      // Les deux
      emailSubject = `Documentation - Nouvelle demande de ${name.trim()}`;
    }

    // Générer l'email HTML avec React Email
    const emailHtml = await render(
      ContactFormEmail({
        name: name.trim(),
        organization: organization.trim(),
        email: email.trim(),
        interest: interest?.trim() || undefined,
        brochure: isBrochure,
        bookExtract: isBookExtract,
      })
    );

    // Envoyer l'email via Resend
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Error sending email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred." },
      { status: 500 }
    );
  }
}
