export interface HeroSection {
  _id: string;
  title?: string;
  subtitleLine1?: string;
  subtitleLine2?: string;
  cta?: string;
  language?: string;
}

import type { PortableTextBlock } from "@portabletext/types";

export interface IntroSection {
  _id: string;
  title?: string;
  body?: PortableTextBlock[];
  cta1?: string;
  cta2?: string;
  language?: string;
}
