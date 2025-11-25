import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function SignalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
            Signals & Intelligence
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-white sm:text-2xl">
            Comprendre les transformations du secteur.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-white">
            Veille sélective sur les signaux faibles, les fonds à impact, les
            nouveaux modèles d'exploitation et les tendances qui transforment la
            fabrique de la ville.
          </p>
        </div>
      </Section>

      {/* 3 Cards */}
      <Section spacing="md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                Curiosity Insights
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Décryptages et analyses croisées sur les usages, les territoires
                et les modèles économiques émergents.
              </p>
              <p className="mt-4 text-sm italic text-black">
                Comprendre les mutations structurelles du secteur.
              </p>
            </Card>

            <Card>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                Sustainable Capital Watch
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Suivi des fonds, véhicules et deals à impact, en France et à
                l'international.
              </p>
              <p className="mt-4 text-sm italic text-black">
                Observer comment la finance accélère la transition.
              </p>
            </Card>

            <Card>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                Operators Watch
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Étude des nouveaux opérateurs et modèles d'exploitation :
                hospitalité, résidences gérées, tiers-lieux, bureaux réinventés.
              </p>
              <p className="mt-4 text-sm italic text-black">
                Anticiper les nouveaux standards de performance.
              </p>
            </Card>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Consulter</Button>
            <Button href="/contact" variant="secondary">
              S'abonner
            </Button>
          </div>
        </div>
      </Section>

      {/* Studies Gallery */}
      <Section spacing="md" className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Études & livres blancs
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Nos publications en recherche appliquée explorent les mutations du
            secteur à travers des études, diagnostics et analyses de fond.
            <br />
            <br />
            Chaque document est disponible à la demande — ou peut inspirer une
            étude sur mesure pour votre organisation.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Placeholder pour les études - à remplacer par un CMS */}
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                Étude exemple 1
              </h3>
              <p className="mt-2 text-sm text-black">
                Thème • Durée de lecture
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Résumé de l'étude...
              </p>
              <div className="mt-6">
                <Button variant="secondary" className="text-sm">
                  Télécharger le PDF
                </Button>
              </div>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                Étude exemple 2
              </h3>
              <p className="mt-2 text-sm text-black">
                Thème • Durée de lecture
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Résumé de l'étude...
              </p>
              <div className="mt-6">
                <Button variant="secondary" className="text-sm">
                  Télécharger le PDF
                </Button>
              </div>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                Étude exemple 3
              </h3>
              <p className="mt-2 text-sm text-black">
                Thème • Durée de lecture
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Résumé de l'étude...
              </p>
              <div className="mt-6">
                <Button variant="secondary" className="text-sm">
                  Télécharger le PDF
                </Button>
              </div>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button href="/contact">Commander une étude</Button>
          </div>
        </div>
      </Section>

      {/* Book */}
      <Section spacing="md">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Changer l'Immobilier : de l'Utopie à la Réalité
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            300 pages pour comprendre que le secteur immobilier est en
            mouvement.
          </p>
          <blockquote className="mt-6 border-l-4 border-black pl-4 italic text-black">
            "Travailler dès aujourd'hui à la construction d'un futur désirable
            et rentable n'est pas un rêve — c'est un impératif business."
          </blockquote>
          <div className="mt-8">
            <Button href="/contact">Commander l'ouvrage</Button>
          </div>
        </div>
      </Section>

      {/* Page Footer CTA */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Chaque projet commence par la même question :{" "}
            <em>comment testez-vous vos hypothèses ?</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            Curiosity.Builders accompagne les fonds, foncières et opérateurs à{" "}
            <strong>structurer leurs stratégies future-proof</strong>.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="inverted">
              Nous écrire
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
