"use client";

import { ContactForm } from "@/components/pages/ContactForm";
import { Modal } from "@/components/ui/Modal";
import { Download } from "lucide-react";
import { useState } from "react";

interface BookExtractButtonProps {
  pdfUrl: string;
  pdfFilename?: string;
  buttonText: string;
  formData?: {
    title?: string;
    description?: string;
    nameLabel?: string;
    organizationLabel?: string;
    emailLabel?: string;
    interestLabel?: string;
    interestPlaceholder?: string;
    consentLabel?: string;
    submitButton?: string;
    successMessage?: string;
    bookExtractSuccessMessage?: string;
  };
}

export function BookExtractButton({
  pdfUrl,
  pdfFilename,
  buttonText,
  formData,
}: BookExtractButtonProps) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSuccess = () => {
    // Télécharger le PDF après soumission réussie
    if (pdfUrl) {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = pdfFilename || "extrait-livre.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // Fermer la modale après 2 secondes
    setTimeout(() => {
      handleCloseForm();
    }, 2000);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleShowForm}
        className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-colors border border-black/90 bg-white text-black hover:border-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 gap-2"
      >
        <Download className="h-4 w-4" />
        {buttonText}
      </button>
      {formData && (
        <Modal
          isOpen={showForm}
          onClose={handleCloseForm}
          title={formData.title}
        >
          <ContactForm
            data={formData}
            formType="bookExtract"
            onSuccess={handleSuccess}
          />
        </Modal>
      )}
    </>
  );
}
