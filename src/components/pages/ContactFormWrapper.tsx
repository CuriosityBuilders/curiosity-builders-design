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
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <ContactUnsureSection
        data={unsureData}
        onRequestBrochure={handleShowForm}
      />
      {formData && (
        <Modal
          isOpen={showForm}
          onClose={handleCloseForm}
          title={formData.title}
        >
          <ContactForm data={formData} onSuccess={handleCloseForm} />
        </Modal>
      )}
    </>
  );
}
