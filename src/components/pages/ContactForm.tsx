"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { useState } from "react";

interface ContactFormProps {
  data?: {
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

export function ContactForm({ data }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    interest: "",
    brochure: false,
    bookExtract: false,
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter l'envoi du formulaire
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        organization: "",
        email: "",
        interest: "",
        brochure: false,
        bookExtract: false,
        consent: false,
      });
    }, 5000);
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
    <Section spacing="md" className="bg-white">
      <div className="mx-auto max-w-2xl px-4">
        {data?.title && (
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {data.title}
          </h2>
        )}
        {data?.description && (
          <p className="mt-6 text-lg leading-relaxed text-black">
            {data.description}
          </p>
        )}
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          {/* Checkboxes pour les documents */}
          <div className="space-y-4">
            {data?.brochureLabel && (
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="brochure"
                  name="brochure"
                  checked={formData.brochure}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-black/20 text-black focus:ring-black"
                />
                <label
                  htmlFor="brochure"
                  className="ml-3 text-sm leading-relaxed text-black"
                >
                  {data.brochureLabel}
                </label>
              </div>
            )}
            {data?.bookExtractLabel && (
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="bookExtract"
                  name="bookExtract"
                  checked={formData.bookExtract}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-black/20 text-black focus:ring-black"
                />
                <label
                  htmlFor="bookExtract"
                  className="ml-3 text-sm leading-relaxed text-black"
                >
                  {data.bookExtractLabel}{" "}
                  {data.bookTitle && (
                    <Link
                      href="/signals"
                      className="underline transition-colors hover:text-gray-700"
                    >
                      "{data.bookTitle}"
                    </Link>
                  )}
                </label>
              </div>
            )}
          </div>

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
                {data.consentLabel}
              </label>
            </div>
          )}

          {submitted && data?.successMessage && (
            <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
              {data.successMessage}
            </div>
          )}

          {data?.submitButton && (
            <Button type="submit">{data.submitButton}</Button>
          )}
        </form>
      </div>
    </Section>
  );
}
