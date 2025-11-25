"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
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
    >
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
            Échangeons ensemble.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white">
            En reliant design, finance et impact pour faire passer vos
            innovations urbaines à l'échelle, Curiosity.Builders accompagne les
            dirigeants, fondateurs, investisseurs et opérateurs à concevoir,
            tester ou lancer de nouveaux projets, produits ou ventures — dans
            l'immobilier, l'architecture, l'urbanisme, ou le développement
            territorial.
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
                Travaillons ensemble
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black">
                Pour toute demande de projet, partenariat ou collaboration :
              </p>
              <p className="mt-4">
                <a
                  href="mailto:contact@curiosity.builders"
                  className="text-lg text-black underline transition-colors hover:text-gray-700"
                >
                  contact@curiosity.builders
                </a>
              </p>
            </div>

            {/* Presse & interventions */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                Presse & interventions
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black">
                Interviews, conférences, keynotes, panels :
              </p>
              <p className="mt-4">
                <a
                  href="mailto:media@curiosity.builders"
                  className="text-lg text-black underline transition-colors hover:text-gray-700"
                >
                  media@curiosity.builders
                </a>
              </p>
            </div>

            {/* S'abonner à la newsletter */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
                S'abonner à la newsletter
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black">
                Veille, études et signaux sur la transformation de l'immobilier
                et des territoires :
              </p>
              <p className="mt-4">
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-black underline transition-colors hover:text-gray-700"
                >
                  S'abonner
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Vous ne savez pas par où commencer ? */}
      <Section spacing="md" className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Nous pouvons vous aider à clarifier vos besoins — d'un diagnostic
            rapide à une roadmap d'innovation complète.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="secondary"
              onClick={() => window.open("https://substack.com", "_blank")}
            >
              S'abonner à la newsletter
            </Button>
            <Button
              variant="secondary"
              onClick={() => window.open("https://calendly.com", "_blank")}
            >
              Prendre un rendez-vous
            </Button>
            <Button
              variant="secondary"
              onClick={() => setShowBrochureForm(true)}
            >
              Demander la brochure
            </Button>
          </div>
        </div>
      </Section>

      {/* Formulaire Brochure */}
      {showBrochureForm && (
        <Section spacing="md" className="bg-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
              Formulaire
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-black">
              Choisissez les documents que vous souhaitez recevoir :
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
                    Brochure Curiosity.Builders
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
                    Extrait du livre{" "}
                    <Link
                      href="/signals"
                      className="underline transition-colors hover:text-gray-700"
                    >
                      "Changer l'Immobilier : de l'Utopie à la Réalité"
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
                  Nom *
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
                  htmlFor="interest"
                  className="block text-sm font-medium text-black"
                >
                  Sujet d'intérêt
                </label>
                <input
                  type="text"
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  placeholder="..."
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
                  Consentement RGPD *
                </label>
              </div>

              {submitted && (
                <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
                  Merci — nous revenons vers vous très rapidement.
                </div>
              )}

              <Button type="submit">Envoyer</Button>
            </form>
          </div>
        </Section>
      )}

      {/* Final CTA */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Transformer plus vite. Décider plus juste.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            Curiosity.Builders est un cabinet de conseil nouvelle génération qui
            combine recherche, design, data et impact pour imaginer des lieux
            utiles, désirables et durables.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white">
            Nous aidons les acteurs de l'immobilier à transformer leurs modèles,
            du financement à l'exploitation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="mailto:contact@curiosity.builders" variant="inverted">
              Nous écrire
            </Button>
            <Button href="/methode" variant="secondary-inverted">
              Découvrir notre méthode
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
