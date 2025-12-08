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
          message: "Tous les champs requis doivent être remplis.",
        },
        { status: 400 }
      );
    }

    // Validation du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Format d'email invalide." },
        { status: 400 }
      );
    }

    // Vérifier qu'au moins un document est demandé
    if (!brochure && !bookExtract) {
      return NextResponse.json(
        {
          success: false,
          message: "Veuillez sélectionner au moins un document.",
        },
        { status: 400 }
      );
    }

    // Variables d'environnement
    const fromEmail = process.env.FROM_EMAIL;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!fromEmail || !contactEmail) {
      console.error("FROM_EMAIL ou CONTACT_EMAIL non configuré");
      return NextResponse.json(
        { success: false, message: "Erreur de configuration serveur." },
        { status: 500 }
      );
    }

    // Générer l'email HTML avec React Email
    const emailHtml = await render(
      ContactFormEmail({
        name: name.trim(),
        organization: organization.trim(),
        email: email.trim(),
        interest: interest?.trim() || undefined,
        brochure: Boolean(brochure),
        bookExtract: Boolean(bookExtract),
      })
    );

    // Envoyer l'email via Resend
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      subject: `Nouvelle demande de documentation - ${name.trim()}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { success: false, message: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email envoyé avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
