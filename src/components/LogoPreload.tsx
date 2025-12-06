"use client";

import { useEffect } from "react";

interface LogoPreloadProps {
  logoUrl?: string;
}

export function LogoPreload({ logoUrl }: LogoPreloadProps) {
  useEffect(() => {
    if (!logoUrl) return;

    // Check if preload link already exists
    const existingLink = document.querySelector(
      `link[rel="preload"][as="image"][href="${logoUrl}"]`
    );

    if (existingLink) return;

    // Create and inject preload link in head
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = logoUrl;
    link.setAttribute("fetchPriority", "high");
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      const linkToRemove = document.querySelector(
        `link[rel="preload"][as="image"][href="${logoUrl}"]`
      );
      if (linkToRemove) {
        document.head.removeChild(linkToRemove);
      }
    };
  }, [logoUrl]);

  return null;
}
