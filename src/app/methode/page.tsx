import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function MethodePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-black sm:text-6xl">
            Notre méthode pour transformer vos idées en produits robustes et
            désirables.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Notre approche UX Immo transpose au secteur immobilier les méthodes
            de design thinking, lean product development et venture building
            éprouvée dans la tech et la grande consommation.
            <br />
            <br />
            Elle repose sur un principe simple : analyser avant de construire,
            pour garantir que chaque projet s'ancre dans la réalité du
            territoire dans lequel il s'implante.
          </p>
        </div>
      </Section>

      {/* Curiosity Loop */}
      <Section spacing="md">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Le Curiosity Loop — 5 étapes pour connecter vision, contexte et
            exécution
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Chaque phase combine analyse de données, expertise terrain et
            modélisation stratégique pour transformer la connaissance en
            avantage compétitif.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                Observer — le contexte
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Identifier les dynamiques territoriales, économiques et
                environnementales qui façonnent un projet.
              </p>
              <p className="mt-4 text-xs italic text-black">
                Outils : analyses multi-sources, data territoriale,
                cartographies et scoring d'attractivité.
              </p>
            </Card>

            <Card>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                Comprendre — les usages
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Décoder les comportements et attentes réelles des usagers
                finaux, partenaires et acteurs locaux.
              </p>
              <p className="mt-4 text-xs italic text-black">
                Outils : micro-panels, entretiens, UX mapping, analyses
                comportementales.
              </p>
            </Card>

            <Card>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                Concevoir — le produit et le modèle
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Transformer les insights en scénarios d'usage et d'exploitation,
                concepts programmatiques et modèles économiques.
              </p>
              <p className="mt-4 text-xs italic text-black">
                Outils : modélisation financière et spatiale, design produit,
                théorie de changement.
              </p>
            </Card>

            <Card>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  4
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                Développer — la stratégie d'exécution
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Structurer un modèle d'affaires rentable et finançable.
              </p>
              <p className="mt-4 text-xs italic text-black">
                Outils : business modeling PropCo/OpCo, structuration des
                financements, montages immobiliers, thèse d'impact,
                identification des partenaires.
              </p>
            </Card>

            <Card>
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  5
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-black">
                Déployer — la venture
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Transformer la stratégie en réalité : du concept à l'entreprise,
                du pilote au marché.
              </p>
              <p className="mt-4 text-xs italic text-black">
                Outils : structuration de véhicules (OpCo/PropCo, fonds,
                spin-offs), partenariats stratégiques, gouvernance et capital
                raising.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Impact-first */}
      <Section spacing="md" className="bg-gray-light">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Impact-first, by design
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Chaque projet que nous accompagnons intègre une thèse d'impact
            pragmatique — carbone, social, gouvernance — conçue non comme une
            contrainte, mais comme un levier de performance et de résilience.
          </p>
        </div>
      </Section>

      {/* Singularité */}
      <Section spacing="md">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Notre singularité
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Curiosity.Builders réunit les standards du conseil stratégique, la
            rigueur de la recherche appliquée et la créativité du design
            produit.
            <br />
            <br />
            Nous travaillons sur toute la chaîne de valeur immobilière — du
            diagnostic territorial à la stratégie d'investissement — en
            combinant data, design, ingénierie et impact pour transformer les
            idées en modèles robustes et performants.
            <br />
            <br />
            Nos expertises couvrent cinq champs d'innovation : produit et
            spatial, technologique, managérial, impact et durabilité, et venture
            development.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                Interdisciplinarité totale
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Croiser immobilier, finance, design et data pour une vision
                intégrée.
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                Méthodes éprouvées
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Issues du product design, du venture building et du conseil
                stratégique.
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                Formats agiles
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Du diagnostic express à la structuration complète de venture.
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                Tech & IA augmentées
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Des outils d'analyse avancés, au service de l'expertise humaine.
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                Impact intégré
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Chaque projet est conçu avec une thèse d'impact et des
                indicateurs mesurables.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Citations */}
      <Section spacing="md" className="bg-gray-light">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-2xl font-bold text-black">
            Un meilleur ancrage, de meilleures performances.
          </h2>
          <div className="mt-8 space-y-6">
            <blockquote className="border-l-4 border-black pl-4">
              <p className="text-lg italic text-black">
                Un projet aligné sur son contexte se commercialise 20 % plus
                vite et conserve une valeur durablement supérieure
              </p>
              <p className="mt-2 text-sm text-black">
                (Cushman & Wakefield, 2024)
              </p>
            </blockquote>
            <blockquote className="border-l-4 border-black pl-4">
              <p className="text-lg italic text-black">
                L'impact n'est plus un différenciant dans la recherche de
                capital, c'est un impératif business-as-usual
              </p>
              <p className="mt-2 text-sm text-black">
                (Lisette Van Doorn, ULI)
              </p>
            </blockquote>
            <blockquote className="border-l-4 border-black pl-4">
              <p className="text-lg italic text-black">
                Une compréhension fine du contexte local réduit les retards de
                livraison des projets jusqu'à 30 %.
              </p>
            </blockquote>
          </div>
          <div className="mt-8">
            <Button href="/contact">Nous écrire</Button>
          </div>
        </div>
      </Section>

      {/* Page Footer CTA */}
      <Section spacing="md">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Transformer plus vite, décider plus juste.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Curiosity.Builders est une plateforme de conseil augmenté fondée par
            Claire Flurin Bellec, à la croisée du conseil stratégique
            immobilier, de la R&D territoriale & programmatique et du venture
            development à impact.
          </p>
          <div className="mt-8">
            <p className="text-sm text-black">
              Aken Écosystèmes · Nhood · Keys REIM · Ynov · Pardi! · Archipel &
              Co
            </p>
          </div>
          <div className="mt-8">
            <Button href="/contact">Nous écrire</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
