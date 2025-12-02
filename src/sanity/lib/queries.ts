import { cache } from "react";
import { client } from "./client";

export const getHeroSection = cache(async (language: string) => {
  const query = `*[_type == "heroSection" && language == $language][0] {
    _id,
    title,
    subtitleLine1,
    subtitleLine2,
    cta,
    language
  }`;

  return client.fetch(query, { language });
});

export const getIntroSection = cache(async (language: string) => {
  const query = `*[_type == "introSection" && language == $language][0] {
    _id,
    title,
    body[],
    cta1,
    cta2,
    language
  }`;

  return client.fetch(query, { language });
});
