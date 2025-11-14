"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero", label: "Hero" },
  { id: "intro", label: "Intro" },
  { id: "tiers", label: "Tiers" },
  { id: "key-metrics", label: "Métriques" },
  { id: "cases", label: "Cas" },
  { id: "book", label: "Livre" },
  { id: "newsletter", label: "Newsletter" },
];

export function ProgressLine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Détecter la section active
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      setActiveSection(currentSection?.id || null);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed left-[10%] top-0 z-40 hidden h-full w-px bg-black/20 lg:block">
      {/* Ligne de progression */}
      <div
        className="absolute top-0 w-full origin-top bg-black transition-all duration-300"
        style={{ height: `${scrollProgress}%` }}
      />

      {/* Pastilles pour chaque section */}
      {sections.map((section, index) => {
        const sectionProgress = (index / (sections.length - 1)) * 100;
        const isActive = activeSection === section.id;

        return (
          <div
            key={section.id}
            className="absolute left-1/2 -translate-x-1/2 transition-all"
            style={{ top: `${sectionProgress}%` }}
          >
            <div
              className={`h-3 w-3 rounded-full border-2 border-black transition-all ${
                isActive ? "bg-black scale-125" : "bg-white"
              }`}
              title={section.label}
            />
          </div>
        );
      })}
    </div>
  );
}
