"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Méthode", href: "/methode" },
  { name: "Services", href: "/services" },
  { name: "Signals", href: "/signals" },
];

export function Header() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto flex items-center justify-between border border-white/10 bg-white/50 px-24 py-2 shadow-sm backdrop-blur-xl backdrop-saturate-200">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center">
          <motion.div
            className="relative h-12 w-[120px] sm:h-16 sm:w-[160px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Skeleton placeholder to prevent layout shift */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}
            <Image
              src="/LOGO CURIOSITY HD_Balloons_Deep Black.png"
              alt="Curiosity.Builders"
              width={120}
              height={40}
              className="relative h-12 w-auto sm:h-16"
              priority
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden items-center space-x-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-black transition-colors duration-200 hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side - Log In & Sign Up */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button
              href="/contact"
              variant="primary"
              className="rounded-lg px-5 py-2.5 text-sm font-medium"
            >
              Contact
            </Button>
          </div>
          {/* Mobile menu button */}
          <Button
            type="button"
            variant="secondary"
            className="text-black md:hidden"
            aria-label="Menu"
          >
            ☰
          </Button>
        </div>
      </nav>
    </header>
  );
}
