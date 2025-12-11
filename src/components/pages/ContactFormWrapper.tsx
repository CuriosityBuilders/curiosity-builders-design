"use client";

import { ContactForm } from "@/components/pages/ContactForm";
import { ContactUnsureSection } from "@/components/pages/ContactUnsureSection";
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
    // Scroll vers le formulaire après un court délai pour laisser le temps au DOM de se mettre à jour
    setTimeout(() => {
      const formElement = document.getElementById("contact-form-section");
      if (formElement) {
        const elementPosition = formElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <>
      <ContactUnsureSection
        data={unsureData}
        onRequestBrochure={handleShowForm}
      />
      {formData && (
        <div
          id="contact-form-section"
          className={showForm ? "block" : "hidden"}
        >
          <ContactForm data={formData} />
        </div>
      )}
    </>
  );
}
