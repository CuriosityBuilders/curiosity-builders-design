import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* <ProgressLine /> */}

      {/* Hero - Background Image */}
      <Section
        id="hero"
        spacing="lg"
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-32 text-center sm:py-40 lg:py-48"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <h1 className="font-heading animate-fade-in-up text-6xl font-bold leading-[1.1] text-white sm:text-8xl lg:text-9xl">
            Curiosity.Builders
          </h1>
          <p className="mt-12 animate-fade-in text-2xl leading-relaxed text-white sm:text-3xl lg:text-4xl">
            Plateforme d'accélération de vos projets de lieux.
          </p>
          <p className="mt-6 animate-fade-in-delay text-xl leading-relaxed text-white/90 sm:text-2xl">
            Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.
          </p>
        </div>
      </Section>

      {/* Intro - Noir */}
      <Section id="intro" spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            L'immobilier a changé d'ère
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            Plutôt que de ne parler que de mètres carrés, nous aidons nos
            clients à concevoir, développer, financer et gérer des lieux vivants
            — désirables, durables et performants.
            <br />
            <br />
            Car pour rester pertinent, il faut reconnecter stratégie
            immobilière, territoire et impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/services" variant="inverted">
              Découvrir nos offres
            </Button>
            <Button href="/contact" variant="secondary-inverted">
              S'abonner à la newsletter
            </Button>
          </div>
        </div>
      </Section>

      {/* Tiers - Blanc */}
      <Section id="tiers" spacing="md" className="bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            3 leviers pour accélérer vos projets
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <Card>
              <h3 className="font-heading text-xl font-bold text-black">
                Signals & Intelligence
              </h3>
              <p className="mt-2 text-sm font-semibold text-black">
                Voir, comprendre, anticiper
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Veille stratégique, études, capital watch, partenaires &
                tendances.
              </p>
              <p className="mt-4 text-sm italic text-black">
                ➡ Pour nourrir la vision et orienter les décisions.
              </p>
              <div className="mt-6">
                <Button href="/signals" variant="secondary" className="text-sm">
                  Accéder aux insights
                </Button>
              </div>
            </Card>

            {/* Card 2 */}
            <Card>
              <h3 className="font-heading text-xl font-bold text-black">
                Diagnostics & Rapid Tests
              </h3>
              <p className="mt-2 text-sm font-semibold text-black">
                Analyser, tester, décider vite
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                Audits, diagnostics contextuels et pitches.
              </p>
              <p className="mt-4 text-sm italic text-black">
                ➡ Pour adapter vos usages, montages et levées de fonds.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary" className="text-sm">
                  Nous écrire
                </Button>
              </div>
            </Card>

            {/* Card 3 */}
            <Card>
              <h3 className="font-heading text-xl font-bold text-black">
                R&D Studio & Strategic Advisory
              </h3>
              <p className="mt-2 text-sm font-semibold text-black">
                Concevoir, financer, scaler
              </p>
              <p className="mt-4 text-sm leading-relaxed text-black">
                R&D externalisée, Fractional Chief R&D Officer, Senior Advisory
                sur vos startups, scale-ups, spin-off ou nouvelles BU.
              </p>
              <p className="mt-4 text-sm italic text-black">
                ➡ Pour passer du test à l'exécution et au changement d'échelle.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Button
                  href="/services"
                  variant="secondary"
                  className="text-sm"
                >
                  Demander la présentation
                </Button>
                <Button href="/contact" variant="secondary" className="text-sm">
                  Nous écrire
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Key Metrics - Noir */}
      <Section id="key-metrics" spacing="sm" className="bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                +50
              </p>
              <p className="mt-2 text-sm text-white">acteurs interviewés</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                +15
              </p>
              <p className="mt-2 text-sm text-white">études publiées</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                +8
              </p>
              <p className="mt-2 text-sm text-white">ventures accélérées</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                0
              </p>
              <p className="mt-2 text-sm text-white">Bullshit</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Cases - Blanc */}
      <Section id="cases" spacing="md" className="bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Références & cas
          </h2>

          {/* Clients & Partenaires */}
          <div className="mt-12">
            <h3 className="font-heading text-xl font-semibold text-black">
              Clients & partenaires
            </h3>
            <p className="mt-4 text-sm text-black">
              Aken Écosystèmes · Nhood · Keys REIM · Ynov · Pardi! · Archipel &
              Co · MIPIM · Carbon13
            </p>
          </div>

          {/* Projets */}
          <div className="mt-12">
            <h3 className="font-heading text-xl font-semibold text-black">
              Projets
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="text-sm text-black">Bas-Chantenay (Nantes)</div>
              <div className="text-sm text-black">Halle G1 (Lille)</div>
              <div className="text-sm text-black">Neoz BTR</div>
            </div>
          </div>

          {/* Presse & Publications */}
          <div className="mt-12">
            <h3 className="font-heading text-xl font-semibold text-black">
              Presse & publications
            </h3>
            <p className="mt-4 text-sm text-black">
              ULI · IEIF · Le Monde · Les Échos · L'Agefi · Le Moniteur
            </p>
          </div>
        </div>
      </Section>

      {/* Book - Noir */}
      <Section id="book" spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Changer l'Immobilier : de l'Utopie à la Réalité
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white">
            Écrit par Claire Flurin Bellec et Fanny Costes, publié aux Éditions
            de l'Aube, cet ouvrage rassemble les réflexions de plus de cinquante
            acteurs du secteur autour d'une conviction : l'immobilier est en
            pleine transformation.
          </p>
          <blockquote className="mt-6 border-l-4 border-white pl-4 italic text-white">
            "Travailler dès aujourd'hui à la construction d'un futur désirable
            et rentable n'est pas un rêve — c'est un impératif business."
          </blockquote>
          <div className="mt-8">
            <Button href="/contact" variant="inverted">
              Commander l'ouvrage
            </Button>
          </div>
        </div>
      </Section>

      {/* Newsletter - Blanc */}
      <Section id="newsletter" spacing="md" className="bg-white text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-black sm:text-4xl">
            Signals & Intelligence
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            La veille stratégique de Curiosity.Builders pour anticiper les
            mutations de l'immobilier et des territoires.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">S'abonner</Button>
            <Button href="/signals" variant="secondary">
              En savoir plus
            </Button>
          </div>
        </div>
      </Section>

      {/* Page Footer CTA - Noir */}
      <Section spacing="md" className="bg-black text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Et si on repensait votre business development autrement ?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="inverted">
              Nous écrire
            </Button>
            <Button href="/services" variant="secondary-inverted">
              Découvrir nos offres
            </Button>
            <Button href="/contact" variant="secondary-inverted">
              Newsletter
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
