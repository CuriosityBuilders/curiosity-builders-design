"use client";

import { ContactForm } from "@/components/pages/ContactForm";
import { ContactUnsureSection } from "@/components/pages/ContactUnsureSection";
import { Modal } from "@/components/ui/Modal";
import type { PortableTextBlock } from "@portabletext/types";
import { useState } from "react";

interface ContactFormWrapperProps {
  unsureData?: {
    title?: string;
    body?: PortableTextBlock[];
    button1?: string;
    button1Url?: string;
    button2?: string;
    button2Url?: string;
    button3?: string;
    button4?: string;
    button4Pdf?: {
      asset?: {
        url?: string;
        originalFilename?: string;
      };
    };
  };
  formData?: {
    title?: string;
    description?: string;
    brochureLabel?: string;
    bookExtractLabel?: string;
    bookTitle?: string;
    nameLabel?: string;
    organizationLabel?: string;
    emailLabel?: string;
    interestLabel?: string;
    interestPlaceholder?: string;
    consentLabel?: string;
    submitButton?: string;
    successMessage?: string;
  };
}

export function ContactFormWrapper({
  unsureData,
  formData,
}: ContactFormWrapperProps) {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const [showBookExtractForm, setShowBookExtractForm] = useState(false);

  const handleShowBrochureForm = () => {
    setShowBrochureForm(true);
  };

  const handleCloseBrochureForm = () => {
    setShowBrochureForm(false);
  };

  const handleShowBookExtractForm = () => {
    setShowBookExtractForm(true);
  };

  const handleCloseBookExtractForm = () => {
    setShowBookExtractForm(false);
  };

  const handleBookExtractSuccess = () => {
    // Télécharger le PDF après soumission réussie
    if (unsureData?.button4Pdf?.asset?.url) {
      const link = document.createElement("a");
      link.href = unsureData.button4Pdf.asset.url;
      link.download =
        unsureData.button4Pdf.asset.originalFilename || "extrait-livre.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // Fermer la modale après 2 secondes
    setTimeout(() => {
      handleCloseBookExtractForm();
    }, 2000);
  };

  return (
    <>
      <ContactUnsureSection
        data={unsureData}
        onRequestBrochure={handleShowBrochureForm}
        onRequestBookExtract={handleShowBookExtractForm}
      />
      {formData && (
        <>
          {/* Modal pour la brochure */}
          <Modal
            isOpen={showBrochureForm}
            onClose={handleCloseBrochureForm}
            title={formData.title}
          >
            <ContactForm
              data={formData}
              formType="brochure"
              onSuccess={handleCloseBrochureForm}
            />
          </Modal>
          {/* Modal pour l'extrait du livre */}
          <Modal
            isOpen={showBookExtractForm}
            onClose={handleCloseBookExtractForm}
            title={formData.title}
          >
            <ContactForm
              data={formData}
              formType="bookExtract"
              onSuccess={handleBookExtractSuccess}
            />
          </Modal>
        </>
      )}
    </>
  );
}
