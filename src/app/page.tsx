"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BlurText } from "@/components/ui/BlurText";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <ProgressLine /> */}

      {/* Hero - Background Image */}
      <Section
        id="hero"
        spacing="lg"
        className="relative overflow-hidden py-32 text-center sm:py-40 lg:py-48"
      >
        {/* Animated Background Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <Image
            src="/hero-background.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        {/* Dark Overlay with gradient for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <BlurText
            as="h1"
            className="font-heading text-6xl font-bold leading-[1.1] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.2),0_0_30px_rgba(255,255,255,0.3),0_0_60px_rgba(255,255,255,0.2)] sm:text-8xl lg:text-9xl"
            delay={0.1}
            duration={0.5}
          >
            Curiosity.Builders
          </BlurText>
          <motion.p
            className="mt-12 text-2xl leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Plateforme d'accélération de vos projets de lieux.
          </motion.p>
          <motion.p
            className="mt-6 text-xl leading-relaxed text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] sm:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Centrée sur l'humain, guidée par la donnée, augmentée par l'IA.
          </motion.p>
        </div>
      </Section>

      {/* Intro - Noir */}
      <Section id="intro" spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            L'immobilier a changé d'ère
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Plutôt que de ne parler que de mètres carrés, nous aidons nos
            clients à concevoir, développer, financer et gérer des lieux vivants
            — désirables, durables et performants.
            <br />
            <br />
            Car pour rester pertinent, il faut reconnecter stratégie
            immobilière, territoire et impact.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Button href="/services" variant="inverted">
                Découvrir nos offres
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Button href="/contact" variant="secondary-inverted">
                S'abonner à la newsletter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Tiers - Blanc */}
      <Section id="tiers" spacing="md" className="bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-heading text-center text-3xl font-bold text-black sm:text-4xl">
            3 leviers pour accélérer vos projets
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-8 transition-all duration-300 hover:border-black/20 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  1
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold leading-tight text-black">
                Signaux & Intelligence
              </h3>
              <p className="mt-3 text-base font-medium text-black/80">
                Voir, comprendre, anticiper
              </p>
              <p className="mt-6 grow text-base leading-relaxed text-black/70">
                Veille stratégique, études, capital watch, partenaires &
                tendances.
              </p>
              <div className="mt-auto pt-6">
                <p className="text-sm font-medium italic text-black/60">
                  Pour nourrir la vision et orienter les décisions.
                </p>
                <div className="mt-6">
                  <Button
                    href="/signals"
                    variant="secondary"
                    className="w-full"
                  >
                    Accéder aux insights
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-8 transition-all duration-300 hover:border-black/20 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  2
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold leading-tight text-black">
                Diagnostiques & Tests
              </h3>
              <p className="mt-3 text-base font-medium text-black/80">
                Analyser, tester, décider vite
              </p>
              <p className="mt-6 grow text-base leading-relaxed text-black/70">
                Audits, diagnostiques contextuels et pitches.
              </p>
              <div className="mt-auto pt-6">
                <p className="text-sm font-medium italic text-black/60">
                  Pour adapter vos usages, montages et levées de fonds.
                </p>
                <div className="mt-6">
                  <Button
                    href="/contact"
                    variant="secondary"
                    className="w-full"
                  >
                    Nous écrire
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-8 transition-all duration-300 hover:border-black/20 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-heading font-bold text-white">
                  3
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold leading-tight text-black">
                R&D Studio & Strategic Advisory
              </h3>
              <p className="mt-3 text-base font-medium text-black/80">
                Concevoir, financer, scaler
              </p>
              <p className="mt-6 grow text-base leading-relaxed text-black/70">
                R&D externalisée, Fractional Chief R&D Officer, Senior Advisory
                sur vos startups, scale-ups, spin-off ou nouvelles BU.
              </p>
              <div className="mt-auto pt-6">
                <p className="text-sm font-medium italic text-black/60">
                  Pour passer du test à l'exécution et au changement d'échelle.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Button
                    href="/services"
                    variant="primary"
                    className="w-full py-1 text-sm text-center"
                  >
                    Demander la présentation
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    className="w-full py-1 text-sm"
                  >
                    Nous écrire
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Key Metrics - Noir */}
      <Section id="key-metrics" spacing="md" className="bg-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                <CountUp value={50} prefix="+" />
              </p>
              <p className="mt-2 text-sm text-white">acteurs interviewés</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                <CountUp value={15} prefix="+" />
              </p>
              <p className="mt-2 text-sm text-white">études publiées</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                <CountUp value={3} prefix="+" />
              </p>
              <p className="mt-2 text-sm text-white">ventures accélérées</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                <CountUp value={0} />
              </p>
              <p className="mt-2 text-sm text-white">Bullshit</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Cases - Blanc */}
      <Section id="cases" spacing="md" className="bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            className="font-heading text-center text-3xl font-bold text-black sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Références & cas
          </motion.h2>

          {/* Clients & Partenaires */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h3 className="font-heading text-center text-xl font-semibold text-black">
              Clients & partenaires
            </h3>
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {[
                { name: "Aken Écosystèmes", logo: "/logos/aken.png" },
                { name: "Nhood", logo: "/logos/nhood.png" },
                { name: "Ynov", logo: "/logos/ynov.png" },
                { name: "Keys REIM", logo: "/logos/keys-reim.png" },
                { name: "Pardi!", logo: "/logos/pardi.png" },
                { name: "Archipel & Co", logo: "/logos/archipelco.png" },
                { name: "MIPIM", logo: "/logos/mipim.png" },
                { name: "Carbon13", logo: "/logos/carbon13.png" },
              ].map((company) =>
                company.logo ? (
                  <div
                    key={company.name}
                    className="flex h-12 items-center justify-center"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={120}
                      height={48}
                      className="h-auto max-h-12 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div
                    key={company.name}
                    className="flex h-12 items-center justify-center text-sm text-black/60"
                  >
                    {company.name}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Projets */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h3 className="font-heading text-center text-xl font-semibold text-black">
              Projets
            </h3>
            <motion.div
              className="mt-4 grid gap-4 md:grid-cols-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <motion.div
                className="text-center text-sm text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Bas-Chantenay (Nantes)
              </motion.div>
              <motion.div
                className="text-center text-sm text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Halle G1 (Lille)
              </motion.div>
              <motion.div
                className="text-center text-sm text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Neoz BTR
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Presse & Publications */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h3 className="font-heading text-center text-xl font-semibold text-black">
              Presse & publications
            </h3>
            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {[
                { name: "Le Monde", logo: "/logos/lemonde.png" },
                { name: "IEIF", logo: "/logos/ieif.png" },
                { name: "ULI", logo: "/logos/uli.png" },
                { name: "L'Agefi", logo: "/logos/agefi.png" },
                { name: "Les Échos", logo: "/logos/lesechos.png" },
                { name: "Le Moniteur", logo: "/logos/lemoniteur.png" },
              ].map((company) =>
                company.logo ? (
                  <div
                    key={company.name}
                    className="flex h-12 items-center justify-center"
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={120}
                      height={48}
                      className="h-auto max-h-12 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div
                    key={company.name}
                    className="flex h-12 items-center justify-center text-sm text-black/60"
                  >
                    {company.name}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Book - Noir */}
      <Section id="book" spacing="md" className="bg-black">
        <div className="mx-auto max-w-4xl px-4">
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Changer l'Immobilier : de l'Utopie à la Réalité
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Écrit par Claire Flurin Bellec et Fanny Costes, publié aux Éditions
            de l'Aube, cet ouvrage rassemble les réflexions de plus de cinquante
            acteurs du secteur autour d'une conviction : l'immobilier est en
            pleine transformation.
          </motion.p>
          <motion.blockquote
            className="mt-6 border-l-4 border-white pl-4 italic text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            "Travailler dès aujourd'hui à la construction d'un futur désirable
            et rentable n'est pas un rêve — c'est un impératif business."
          </motion.blockquote>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Button href="/contact" variant="inverted">
              Commander l'ouvrage
            </Button>
          </motion.div>
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
          <motion.h2
            className="font-heading text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Et si on repensait votre business development autrement ?
          </motion.h2>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Button href="/contact" variant="inverted">
                Nous écrire
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Button href="/services" variant="secondary-inverted">
                Découvrir nos offres
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Button href="/contact" variant="secondary-inverted">
                Newsletter
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
