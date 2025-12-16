"use client";

import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/routing";
import { useState } from "react";

interface ContactFormProps {
  data?: {
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
  };
  formType?: "brochure" | "bookExtract";
  onSuccess?: () => void;
}

export function ContactForm({
  data,
  formType = "brochure",
  onSuccess,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    interest: "",
    brochure: formType === "brochure",
    bookExtract: formType === "bookExtract",
    consent: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Une erreur est survenue.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        organization: "",
        email: "",
        interest: "",
        brochure: formType === "brochure",
        bookExtract: formType === "bookExtract",
        consent: false,
      });
      // Fermer la modale après 2 secondes pour laisser le temps de voir le message de succès
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (!data) return null;

  return (
    <div className="mx-auto max-w-2xl">
      {data?.description && (
        <p className="mb-6 text-lg leading-relaxed text-black">
          {data.description}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champs du formulaire */}
        {data?.nameLabel && (
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              {data.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        )}

        {data?.organizationLabel && (
          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-black"
            >
              {data.organizationLabel}
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        )}

        {data?.emailLabel && (
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              {data.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        )}

        {data?.interestLabel && (
          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-black"
            >
              {data.interestLabel}
            </label>
            <input
              type="text"
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              placeholder={data.interestPlaceholder}
              className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>
        )}

        {data?.consentLabel && (
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-black/20 text-black focus:ring-black"
            />
            <label htmlFor="consent" className="ml-3 text-sm text-black">
              {data.consentLabel}{" "}
              <Link
                href="/politique-confidentialite"
                className="underline transition-colors hover:text-gray-700"
              >
                (privacy policy)
              </Link>
            </label>
          </div>
        )}

        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {error}
          </div>
        )}

        {submitted && data?.successMessage && (
          <div className="rounded-md border border-green-200 bg-green-50 p-4 text-base text-green-800">
            {data.successMessage}
          </div>
        )}

        {data?.submitButton && (
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Envoi en cours..." : data.submitButton}
          </Button>
        )}
      </form>
    </div>
  );
}
