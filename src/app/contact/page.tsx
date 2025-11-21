"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    interest: "",
    context: "",
    role: "",
    skills: "",
    portfolio: "",
    message: "",
    media: "",
    subject: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implémenter l'envoi du formulaire
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
            Discutons de votre vision. Parlons de vos projets.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white">
            Un diagnostic rapide, un programme de R&D ou une venture à
            structurer ? Choisissez votre besoin ci-dessous et remplissez le
            formulaire.
          </p>
        </div>
      </Section>

      {/* Forms */}
      <Section spacing="md" className="bg-gray-100">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-bold text-black">
              Travaillons ensemble
            </h2>
            <Accordion title="Travaillons ensemble" defaultOpen>
              <p className="mb-4 text-sm text-black">
                Cadrez votre demande en 2 minutes.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black"
                  >
                    Nom et prénom *
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
                    Organisation *
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
                    Email professionnel *
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
                    htmlFor="phone"
                    className="block text-sm font-medium text-black"
                  >
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-black"
                  >
                    Intérêt principal *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="diagnostics">
                      Diagnostics & Rapid Tests
                    </option>
                    <option value="r-d">
                      R&D Studio / Fractional Chief R&D Officer
                    </option>
                    <option value="venture">
                      Venture Development & Scale-up
                    </option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="context"
                    className="block text-sm font-medium text-black"
                  >
                    Contexte du projet * (objectifs, périmètre, échéance)
                  </label>
                  <textarea
                    id="context"
                    name="context"
                    required
                    rows={4}
                    value={formData.context}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="documents"
                    className="block text-sm font-medium text-black"
                  >
                    Documents (optionnel — upload 1 PDF)
                  </label>
                  <input
                    type="file"
                    id="documents"
                    name="documents"
                    accept=".pdf"
                    className="mt-1 text-sm text-black"
                  />
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-black">
                    Consentement RGPD *
                  </label>
                </div>
                {submitted && (
                  <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
                    Merci ! Nous revenons vers vous sous 48 h ouvrées pour
                    proposer un premier cadrage.
                  </div>
                )}
                <Button type="submit">Nous écrire</Button>
              </form>
            </Accordion>

            <Accordion title="Rejoindre l'équipe">
              <p className="mb-4 text-sm text-black">
                Talents, experts, studios et partenaires d'essais terrain :
                écrivez-nous.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name-team"
                    className="block text-sm font-medium text-black"
                  >
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    id="name-team"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-team"
                    className="block text-sm font-medium text-black"
                  >
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email-team"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-black"
                  >
                    Rôle visé *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="stage">Stage</option>
                    <option value="cdi">CDI</option>
                    <option value="freelance">Freelance</option>
                    <option value="partenaire">Partenaire</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="skills"
                    className="block text-sm font-medium text-black"
                  >
                    Compétences clés * (ex. urban data, product design, finance,
                    IA)
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    required
                    value={formData.skills}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="portfolio"
                    className="block text-sm font-medium text-black"
                  >
                    Portfolio / LinkedIn / Site (URL)
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message-team"
                    className="block text-sm font-medium text-black"
                  >
                    Message (motivations, disponibilités) *
                  </label>
                  <textarea
                    id="message-team"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent-team"
                    name="consent"
                    required
                    className="mt-1"
                  />
                  <label
                    htmlFor="consent-team"
                    className="ml-2 text-sm text-black"
                  >
                    Consentement RGPD *
                  </label>
                </div>
                {submitted && (
                  <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
                    Merci ! Nous reviendrons vers vous si votre
                    profil/partenariat correspond à nos besoins du moment.
                  </div>
                )}
                <Button type="submit">Nous écrire</Button>
              </form>
            </Accordion>

            <Accordion title="Presse">
              <p className="mb-4 text-sm text-black">
                Interviews, tribunes, conférences : contact direct.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name-presse"
                    className="block text-sm font-medium text-black"
                  >
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    id="name-presse"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="media"
                    className="block text-sm font-medium text-black"
                  >
                    Média / Organisation *
                  </label>
                  <input
                    type="text"
                    id="media"
                    name="media"
                    required
                    value={formData.media}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-presse"
                    className="block text-sm font-medium text-black"
                  >
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email-presse"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone-presse"
                    className="block text-sm font-medium text-black"
                  >
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone-presse"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-black"
                  >
                    Sujet de la demande *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="interview">Interview</option>
                    <option value="citation">Citation</option>
                    <option value="conference">Conférence</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-black"
                  >
                    Détails & délais *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-black/20 px-3 py-2 text-black focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent-presse"
                    name="consent"
                    required
                    className="mt-1"
                  />
                  <label
                    htmlFor="consent-presse"
                    className="ml-2 text-sm text-black"
                  >
                    Consentement RGPD *
                  </label>
                </div>
                <p className="text-xs text-black">
                  Vos informations ne sont utilisées que pour répondre à la
                  demande presse.
                </p>
                {submitted && (
                  <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
                    Merci ! Nous vous répondons très rapidement selon vos délais
                    rédactionnels.
                  </div>
                )}
                <Button type="submit">Nous écrire</Button>
              </form>
            </Accordion>

            <div className="pt-4">
              <h2 className="font-heading text-2xl font-bold text-black">
                Juste nous suivre pour prendre la température ?
              </h2>
              <div className="mt-4 space-y-2">
                <Accordion title="S'abonner à la newsletter">
                  <p className="text-sm text-black">
                    Abonnez-vous à notre newsletter Signals & Intelligence.
                  </p>
                  <div className="mt-4">
                    <Button href="https://substack.com" variant="secondary">
                      S'abonner sur Substack
                    </Button>
                  </div>
                </Accordion>
                <Accordion title="Discuter d'un event">
                  <p className="text-sm text-black">
                    Vous organisez un événement et souhaitez nous inviter ?
                  </p>
                  <div className="mt-4">
                    <Button href="mailto:hello@curiositybuilders.com">
                      Nous écrire
                    </Button>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Alt Contact */}
      <Section spacing="md" className="bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-lg text-black">
            Vous préférez un email direct ? →{" "}
            <a
              href="mailto:contact@curiositybuilders.com"
              className="underline transition-colors hover:text-gray-700"
            >
              contact@curiositybuilders.com
            </a>
          </p>
          <div className="mt-4">
            <Button href="https://substack.com" variant="secondary">
              S'abonner à la newsletter
            </Button>
          </div>
        </div>
      </Section>

      {/* Page Footer CTA */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Transformer plus vite, décider plus juste.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            Prêt à accélérer ?
            <br />
            Ecrivez-nous sur :{" "}
            <a
              href="mailto:hello@curiositybuilders.com"
              className="underline transition-colors hover:text-white/80"
            >
              hello@curiositybuilders.com
            </a>
            <br />
            Ou suivez nos publications sur :{" "}
            <a
              href="https://substack.com"
              className="underline transition-colors hover:text-white/80"
            >
              Substack — Signals & Intelligence
            </a>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white">
            Curiosity.Builders relie design, finance et impact pour faire passer
            vos innovations urbaines à l'échelle.
          </p>
        </div>
      </Section>
    </div>
  );
}
