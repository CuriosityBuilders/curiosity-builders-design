import DotCard from "@/components/mvpblocks/dot-card";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section spacing="lg" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl">
            Trois manières d'accélérer vos projets
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white">
            De la première intuition au développement du projet-entreprise à
            grande échelle. Nous vous accompagnons sur tout le cycle
            d'innovation : identifier, tester, déployer.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#diagnostics" variant="inverted">
              Diagnostics & Tests
            </Button>
            <Button href="#r-d-studio" variant="inverted">
              Studio R&D
            </Button>
            <Button href="#venture-dev" variant="inverted">
              Venture Development
            </Button>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section spacing="md" className="relative bg-gray-50">
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Une infrastructure de développement pour vos nouveaux produits et
            projets-entreprises.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Nous mobilisons recherche, design, data et impact pour aider
            développeurs, investisseurs, opérateurs et collectivités à imaginer,
            tester et déployer des projets immobiliers ancrés dans la réalité
            des territoires et des usages.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Notre rôle : transformer vos intuitions en produits, programmes,
            modèles opérationnels et ventures capables de tenir dans le temps —
            techniquement, économiquement et socialement.
          </p>
          <div className="mt-8">
            <Button href="/methode">Notre méthode</Button>
          </div>
        </div>
      </Section>

      {/* Diagnostics et tests */}
      <Section id="diagnostics" spacing="md" className="relative bg-white">
        {/* <GridBackground size={350} opacity={0.1} /> */}
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Diagnostics et tests
          </h2>
          <p className="mt-2 font-heading text-xl font-semibold text-black">
            analyser, tester, décider vite
          </p>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Parce que la bonne compréhension du contexte est à la base de toute
            bonne décision. Nos diagnostics associent data, sciences
            comportementales, micro-enquêtes, ingénierie, planification urbaine
            et finance pour révéler le potentiel social, environnemental et
            économique de chaque site ou portefeuille.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            En exploitant les possibilités ouvertes par la data et l'IA, nous
            construisons des outils d'analyse avancés pour aider développeurs,
            investisseurs et collectivités à identifier :
          </p>
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-black">
            <li>• les besoins réels des usagers,</li>
            <li>• les opportunités programmatiques et financières,</li>
            <li>• et les modèles économiques viables.</li>
          </ul>

          <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
            <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
              Ce que vous obtenez
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Diagnostic contextuel
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Données multi-sources, démographie, mobilités, signaux de
                  marché, cartographie des opportunités.
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Scenario planning
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Mix d'usages, user journeys, trajectoires opérationnelles,
                  production d'impact, opportunités de marché.
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  B.A.-BA financier
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Principes de business plan, prévisionnels simplifiés,
                  opportunités de financement, modélisation OpCo/PropCo.
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Narrative produit
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Storyline, positionnement, concept book, deck investisseurs.
                </p>
              </DotCard>
            </div>
          </div>
        </div>
      </Section>

      {/* R&D Studio */}
      <Section id="r-d-studio" spacing="md" className="relative bg-white">
        {/* <GridBackground size={300} opacity={0.1} /> */}
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Studio R&D
          </h2>
          <p className="mt-2 font-heading text-xl font-semibold text-black">
            concevoir, tester, transformer
          </p>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Passer de l'idée à l'exécution exige une démarche structurée : poser
            des hypothèses, concevoir des scénarios, prototyper, mesurer,
            décider.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Notre R&D Studio agit comme une extension de vos capacités internes,
            en pilotant des boucles d'innovation courtes qui combinent logique
            produit, intelligence territoriale, recherche usagers et ingénierie
            financière pour concevoir, tester, structurer et déployer les
            modèles et produits immobiliers de demain. Nous nous intégrons dans
            vos équipes pour vous aider à hiérarchiser les priorités, préparer
            les projets au lancement, piloter l'ensemble du cycle d'innovation —
            du diagnostic au déploiement.
          </p>

          <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
            <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
              Ce que vous obtenez
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Proofs of Concept
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Gestion de projets pilotes de lieux, services, modèles
                  d'exploitation ou véhicules de financement, pour valider
                  usages, programmes et soutenabilité économique.
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Programme d'innovation externalisé
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Votre cycle complet de R&D géré par notre équipe : analyse →
                  expérimentation → prototypage → décision → déploiement.
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Responsable R&D mutualisé
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Un lead R&D intégré chez vous pour faire avancer l'innovation
                  de l'intérieur.
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Advisory expert
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Un accompagnement mensuel pour clarifier les priorités, lever
                  les blocages, et accélérer la prise de décision.
                </p>
              </DotCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Bannière Le Loop */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="mb-8 flex items-center justify-center gap-4 text-lg font-medium text-white sm:text-xl">
              <span>Diagnostic</span>
              <span>→</span>
              <span>expérimentation</span>
              <span>→</span>
              <span>prototype</span>
              <span>→</span>
              <span>apprentissage</span>
              <span>→</span>
              <span>venture</span>
            </div>
            <blockquote className="mt-8 text-lg italic leading-relaxed text-white sm:text-xl">
              « Il faut en effet pouvoir tester, prototyper, comprendre comment
              d'autres mondes et modes d'être sont possibles et viables. »
            </blockquote>
            <p className="mt-4 text-sm text-white">
              Cynthia Fleury, philosophe, professeure au Conservatoire national
              des arts et métiers et aux Mines de Paris – PSL
            </p>
            <p className="mt-8 text-base leading-relaxed text-white">
              Dans un secteur longtemps resté immobile, prétendre "faire de
              l'impact" exige bien plus que des intentions : cela requiert de
              savoir expérimenter — vite, frugalement, et toujours en phase avec
              l'économie réelle.
            </p>
          </div>
        </div>
      </Section>

      {/* Venture Development */}
      <Section id="venture-dev" spacing="md" className="relative bg-white">
        {/* <GridBackground size={300} opacity={0.1} /> */}
        <div className="relative mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Venture Development
          </h2>
          <p className="mt-2 font-heading text-xl font-semibold text-black">
            amorcer, bâtir, déployer
          </p>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Quand un projet mérite de devenir un produit, ou une entreprise.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Certains projets ont le potentiel de devenir des business units, des
            véhicules d'investissement ou de véritables entreprises. Mais
            pénétrer, et naviguer, le secteur immobilier avec clarté,
            crédibilité et traction reste un défi majeur.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Nous accompagnons les fondateurs, opérateurs et dirigeants qui
            veulent passer de l'expérimentation à une croissance maîtrisée :
            transformer un prototype en produit, un projet en entreprise, un
            concept en portefeuille.
          </p>

          <div className="mt-12 bg-gray-50 -mx-4 px-4 py-8">
            <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl">
              Ce que vous obtenez
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Business plans des futures entités
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Conception et structuration d'OpCos, PropCos, spin-offs,
                  business units ou véhicules d'investissement.
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Impact & gouvernance
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Principes organisationnels, KPIs, cadre de gouvernance, thèse
                  d'investissement et thèse d'impact.
                </p>
              </DotCard>
              <DotCard>
                <h4 className="font-heading text-lg font-bold text-black">
                  Data room et croissance
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-black">
                  Venture briefs, pitch decks, memos d'investissement, due
                  diligence, partenariats stratégiques, structuration
                  commerciale, etc.
                </p>
              </DotCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Impact */}
      <Section spacing="md" className="relative bg-gray-50">
        <div className="relative mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Impact-first, par design
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Chez nous, chaque projet intègre une thèse d'impact — carbone,
            social, gouvernance — pensée comme un levier de performance et de
            légitimité, jamais comme une contrainte.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Nous transformons vos ambitions d'impact en modèles d'affaires
            compétitifs et différenciants.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Transformer plus vite. Décider plus juste.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            L'innovation n'est pas un département : c'est une dynamique continue
            faite de curiosité, d'apprentissage et d'expérimentations éclairées.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white">
            Curiosity.Builders accompagne les organisations dans la conception,
            le test et le déploiement de projets, produits et ventures durables
            — en alliant design, finance, data et impact.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="inverted">
              Nous contacter
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
