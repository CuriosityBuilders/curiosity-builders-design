import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <Section spacing="lg">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-black sm:text-6xl">
            Une infrastructure d'apprentissage, d'expérimentation et de
            développement stratégique
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-black sm:text-2xl">
            pour les organisations qui font évoluer leurs modèles d'affaires.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-black">
            À la croisée de trois expertises — conseil stratégique immobilier,
            R&D territoriale & programmatique, venture development à impact —
            nous aidons acteurs de l'immobilier, territoires et de
            l'exploitation à concevoir, développer et gérer des
            lieux-entreprises performantes, désirables et durables.
          </p>
          <div className="mt-8">
            <Button href="/methode">Découvrir notre méthode</Button>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section spacing="md">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            3 leviers pour accélérer vos projets
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            De la veille à l'intra- ou entrepreneuriat, nos services couvrent
            l'ensemble du cycle d'innovation : identifier, tester, déployer.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <div className="text-2xl">1️⃣</div>
              <h3 className="mt-4 font-heading text-xl font-bold text-black">
                Diagnostics & Rapid Tests
              </h3>
              <div className="mt-6">
                <a
                  href="#diagnostics"
                  className="text-sm text-black underline transition-colors hover:text-gray-700"
                >
                  En savoir plus →
                </a>
              </div>
            </Card>
            <Card>
              <div className="text-2xl">2️⃣</div>
              <h3 className="mt-4 font-heading text-xl font-bold text-black">
                R&D Studio & Strategic Advisory
              </h3>
              <div className="mt-6">
                <a
                  href="#r-d-studio"
                  className="text-sm text-black underline transition-colors hover:text-gray-700"
                >
                  En savoir plus →
                </a>
              </div>
            </Card>
            <Card>
              <div className="text-2xl">3️⃣</div>
              <h3 className="mt-4 font-heading text-xl font-bold text-black">
                Venture Development & Scale-up Support
              </h3>
              <div className="mt-6">
                <a
                  href="#venture-dev"
                  className="text-sm text-black underline transition-colors hover:text-gray-700"
                >
                  En savoir plus →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Diagnostics */}
      <Section id="diagnostics" spacing="md">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Diagnostics & Rapid Tests — analyser, tester, décider vite
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Parce que{" "}
            <strong>le contexte est à la base de toute bonne décision</strong>,
            nos diagnostics associent{" "}
            <strong>
              data, sciences comportementales, micro-enquêtes, ingénierie,
              planification urbaine et finance
            </strong>{" "}
            pour révéler le potentiel social, environnemental et économique de
            chaque site ou portefeuille.
            <br />
            <br />
            Nous aidons développeurs, investisseurs et collectivités à
            identifier les <strong>vrais besoins utilisateurs</strong>, les{" "}
            <strong>opportunités programmatiques et financière</strong> et les{" "}
            <strong>modèles économiques viables</strong>.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-xl">🔹</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-black">
                  Études de site et de portefeuille
                </h3>
                <p className="mt-1 text-sm text-black">
                  Données multi-sources, analyse d'attractivité, cartographie
                  d'opportunités.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">🔹</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-black">
                  Audits et tests rapides
                </h3>
                <p className="mt-1 text-sm text-black">
                  Impact, mix d'usages, scénarios, prévisionnels simplifiés.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">🔹</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-black">
                  Stratégies financières
                </h3>
                <p className="mt-1 text-sm text-black">
                  Business plans, opportunités de financement et modélisations
                  opérationnelles.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">🔹</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-black">
                  Pitches opérationnels
                </h3>
                <p className="mt-1 text-sm text-black">
                  OpCo, PropCo, véhicules hybrides, investor decks.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-gray-light p-6">
            <p className="font-heading text-lg font-semibold text-black">
              Nous sommes impact-first :
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black">
              Nous aidons tous nos clients à construire des{" "}
              <strong>thèses d'impact crédibles</strong> - carbone, social,
              gouvernance - conçues comme des leviers de performance et de
              légitimité.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Demander la présentation</Button>
            <Button href="/contact" variant="secondary">
              Commander un diagnostic
            </Button>
          </div>
        </div>
      </Section>

      {/* R&D Studio */}
      <Section id="r-d-studio" spacing="md">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            R&D Studio & Product Experimentation — concevoir, tester,
            transformer
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Passer de l'idée à l'exécution exige une démarche structurée : poser
            des hypothèses, concevoir des scénarios, prototyper, mesurer,
            décider.
            <br />
            <br />
            Le R&D Studio de Curiosity.Builders opère en boucles courtes{" "}
            <strong>
              (diagnosis → experiment → prototype → learning → venture)
            </strong>{" "}
            pour produire des preuves et des décisions actionnables.
            <br />
            <br />
            Combinant product design et ingénierie financière, nous agissons
            comme une extension de vos capacités internes pour : concevoir,
            tester, structurer et déployer les modèles et produits immobiliers
            de demain.
          </p>

          <div className="mt-8 space-y-6">
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                🔹 Fractional Chief R&D Officer
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Direction de la R&D intégrée à vos comités de pilotage ou
                d'investissement.
              </p>
              <p className="mt-2 text-sm italic text-black">
                → Objectif : piloter la feuille de route d'innovation, prioriser
                les sujets et instaurer une culture d'expérimentation.
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                🔹 R&D externalisée
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Programme complet de 6 à 12 mois combinant analyse, prototypage
                et validation terrain.
              </p>
              <p className="mt-2 text-sm italic text-black">
                → Objectif : accélérer le développement, réduire les risques et
                fiabiliser les décisions avant déploiement.
              </p>
            </Card>
            <Card>
              <h3 className="font-heading text-lg font-semibold text-black">
                🔹 Senior Advisory
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Accompagnement d'experts sur des sujets à forte complexité :
                produit, modèle économique, stratégie d'investissement, impact.
              </p>
              <p className="mt-2 text-sm italic text-black">
                → Objectif : renforcer vos décisions stratégiques par des
                éclairages opérationnels experts.
              </p>
            </Card>
          </div>

          <div className="mt-8 rounded-lg bg-gray-light p-6">
            <p className="font-heading text-lg font-semibold text-black">
              Nous sommes impact-first :
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black">
              Donc nous intégrons vos ambitions d'impact au business model pour
              qu'elles deviennent des leviers de compétitivité et non des coûts
              supplémentaires à porter.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/contact">Nous écrire</Button>
          </div>
        </div>
      </Section>

      {/* Venture Development */}
      <Section id="venture-dev" spacing="md">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Venture Development & Scale-up Support — du test au déploiement à
            l'échelle
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Nous accompagnons les fondateurs et dirigeants qui veulent passer de
            l'expérimentation à la croissance maîtrisée : transformer un
            prototype en produit, un projet en entreprise, un concept en
            portefeuille.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-xl">🔹</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-black">
                  Structuration de véhicules
                </h3>
                <p className="mt-1 text-sm text-black">
                  PropCos, OpCos, spin-offs, business units ou véhicules
                  d'investissement.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">🔹</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-black">
                  Scale-up Support
                </h3>
                <p className="mt-1 text-sm text-black">
                  Appui à la croissance et à l'exécution : positionnement
                  marché, structuration d'équipe, partenariats stratégiques,
                  levée de fonds.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-xl">🔹</span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-black">
                  Strategic Advisory
                </h3>
                <p className="mt-1 text-sm text-black">
                  Playbooks & outils, comité de mission ou d'impact, conseil de
                  direction sur les enjeux stratégiques, financiers et de
                  gouvernance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-gray-light p-6">
            <p className="font-heading text-lg font-semibold text-black">
              Nous sommes impact-first :
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black">
              Nous aidons à transformer vos politiques d'impact en modèle
              d'affaire performant et différenciant sur le marché.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/contact">Nous écrire</Button>
          </div>
        </div>
      </Section>

      {/* Page Footer CTA */}
      <Section spacing="md" className="bg-gray-light">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            L'innovation n'est pas un département, c'est un état d'esprit et une
            curiosité permanente qui fait grandir avec son temps.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Curiosity.Builders agit comme un cofounder stratégique pour les
            projets à fort potentiel : un partenaire capable de relier design,
            finance et impact pour faire passer vos innovations à l'échelle.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Nous écrire</Button>
            <Button href="/methode" variant="secondary">
              Découvrir la méthode
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
