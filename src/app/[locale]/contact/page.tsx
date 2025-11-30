"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [showBrochureForm, setShowBrochureForm] = useState(false);
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
      setShowBrochureForm(false);
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
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white">
            {t("hero.body")}
          </p>
        </div>
      </Section>

      {/* Section Contact */}
      <Section spacing="md" className="bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-16">
            {/* Travaillons ensemble */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                {t("contactSection.workWithUs.title")}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black">
                {t("contactSection.workWithUs.body")}
              </p>
              <p className="mt-4">
                <a
                  href={`mailto:${t("contactSection.workWithUs.email")}`}
                  className="text-lg text-black underline transition-colors hover:text-gray-700"
                >
                  {t("contactSection.workWithUs.email")}
                </a>
              </p>
            </div>

            {/* Presse & interventions */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                {t("contactSection.press.title")}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black">
                {t("contactSection.press.body")}
              </p>
              <p className="mt-4">
                <a
                  href={`mailto:${t("contactSection.press.email")}`}
                  className="text-lg text-black underline transition-colors hover:text-gray-700"
                >
                  {t("contactSection.press.email")}
                </a>
              </p>
            </div>

            {/* S'abonner à la newsletter */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                {t("contactSection.newsletter.title")}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black">
                {t("contactSection.newsletter.body")}
              </p>
              <p className="mt-4">
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-black underline transition-colors hover:text-gray-700"
                >
                  {t("contactSection.newsletter.link")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Vous ne savez pas par où commencer ? */}
      <Section spacing="md" className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            {t("unsure.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            {t("unsure.body")}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="primary"
              onClick={() => window.open("https://substack.com", "_blank")}
            >
              {t("unsure.button1")}
            </Button>
            <Button
              variant="primary"
              onClick={() => window.open("https://calendly.com", "_blank")}
            >
              {t("unsure.button2")}
            </Button>
            <Button variant="primary" onClick={() => setShowBrochureForm(true)}>
              {t("unsure.button3")}
            </Button>
          </div>
        </div>
      </Section>

      {/* Formulaire Brochure */}
      {showBrochureForm && (
        <Section spacing="md" className="bg-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              {t("form.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-black">
              {t("form.description")}
            </p>
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              {/* Checkboxes pour les documents */}
              <div className="space-y-4">
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
                    {t("form.brochureLabel")}
                  </label>
                </div>
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
                    {t("form.bookExtractLabel")}{" "}
                    <Link
                      href="/signals"
                      className="underline transition-colors hover:text-gray-700"
                    >
                      "{t("form.bookTitle")}"
                    </Link>
                  </label>
                </div>
              </div>

              {/* Champs du formulaire */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black"
                >
                  {t("form.nameLabel")}
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

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-black"
                >
                  {t("form.organizationLabel")}
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

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  {t("form.emailLabel")}
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

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-black"
                >
                  {t("form.interestLabel")}
                </label>
                <input
                  type="text"
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  placeholder={t("form.interestPlaceholder")}
                  className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

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
                  {t("form.consentLabel")}
                </label>
              </div>

              {submitted && (
                <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
                  {t("form.successMessage")}
                </div>
              )}

              <Button type="submit">{t("form.submitButton")}</Button>
            </form>
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t("finalCta.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            {t("finalCta.body1")}
          </p>
          {t("finalCta.body2") && (
            <p className="mt-4 text-lg leading-relaxed text-white">
              {t("finalCta.body2")}
            </p>
          )}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="mailto:contact@curiosity.builders" variant="inverted">
              {t("finalCta.button1")}
            </Button>
            <Button href="/methode" variant="secondary-inverted">
              {t("finalCta.button2")}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
