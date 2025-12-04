import { cache } from "react";
import { sanityFetch } from "./live";

// Layout
export const getFooter = cache(async (language: string) => {
  const query = `*[_type == "footer" && language == $language][0] {
    _id,
    description[],
    tagline,
    copyright,
    followUs,
    privacy,
    legalNotice,
    privacyPolicy,
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getHeader = cache(async (language: string) => {
  const query = `*[_type == "header" && language == $language][0] {
    _id,
    logo {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
      alt,
      hotspot,
      crop
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getNavigation = cache(async (language: string) => {
  const query = `*[_type == "navigation" && language == $language][0] {
    _id,
    items[] {
      _key,
      label,
      href
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

// Homepage - Single document with all sections
export const getHomepage = cache(async (language: string) => {
  const query = `*[_type == "homepage" && language == $language][0] {
    _id,
    language,
    hero {
      title,
      subtitleLine1,
      subtitleLine2,
      cta
    },
    intro {
      title,
      body[],
      cta1,
      cta2
    },
    mission {
      title,
      body[],
      tagline,
      cta1,
      cta2
    },
    tiers {
      title,
      cards[] {
        _key,
        number,
        title,
        subtitle,
        description,
        tagline,
        cta,
        cta1,
        cta2,
        href
      }
    },
    keyMetrics {
      metrics[] {
        _key,
        number,
        prefix,
        label
      }
    },
    projects {
      images[] {
        asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        hotspot,
        crop
      }
    },
    book {
      title,
      description[],
      quote,
      cta,
      "image": imageRef->image {
        asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        hotspot,
        crop
      },
      link
    },
    cases {
      title,
      clients[] {
        _key,
        name,
        logo {
          asset->{
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },
          hotspot,
          crop
        }
      },
      press[] {
        _key,
        name,
        logo {
          asset->{
            _id,
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          },
          hotspot,
          crop
        }
      }
    },
    footerCTA {
      title,
      cta1,
      cta2,
      cta3
    },
    newsletter {
      title,
      description[],
      cta1,
      cta2,
      link
    }
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

// Homepage Sections (kept for backward compatibility during migration)
export const getHeroSection = cache(async (language: string) => {
  const query = `*[_type == "heroSection" && language == $language][0] {
    _id,
    title,
    subtitleLine1,
    subtitleLine2,
    cta,
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
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

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getMissionSection = cache(async (language: string) => {
  const query = `*[_type == "missionSection" && language == $language][0] {
    _id,
    title,
    body[],
    tagline,
    cta1,
    cta2,
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getTiersSection = cache(async (language: string) => {
  const query = `*[_type == "tiersSection" && language == $language][0] {
    _id,
    title,
    cards[] {
      _key,
      number,
      title,
      subtitle,
      description,
      tagline,
      cta,
      cta1,
      cta2,
      href
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getKeyMetricsSection = cache(async (language: string) => {
  const query = `*[_type == "keyMetricsSection" && language == $language][0] {
    _id,
    metrics[] {
      _key,
      value,
      label
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getProjectsSection = cache(async (language: string) => {
  const query = `*[_type == "projectsSection" && language == $language][0] {
    _id,
    images[] {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getBookSection = cache(async (language: string) => {
  const query = `*[_type == "bookSection" && language == $language][0] {
    _id,
    title,
    description[],
    quote,
    cta,
    image {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    link,
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getCasesSection = cache(async (language: string) => {
  const query = `*[_type == "casesSection" && language == $language][0] {
    _id,
    title,
    clients[] {
      _key,
      name,
      logo {
        asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    press[] {
      _key,
      name,
      logo {
        asset->{
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getFooterCTASection = cache(async (language: string) => {
  const query = `*[_type == "footerCTASection" && language == $language][0] {
    _id,
    title,
    cta1,
    cta2,
    cta3,
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getNewsletterSection = cache(async (language: string) => {
  const query = `*[_type == "newsletterSection" && language == $language][0] {
    _id,
    title,
    description[],
    cta1,
    cta2,
    link,
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

// Pages
export const getSignalsPage = cache(async (language: string) => {
  const query = `*[_type == "signalsPage" && language == $language][0] {
    _id,
    hero {
      title,
      subtitle,
      body[]
    },
    cards {
      items[] {
        _key,
        title,
        description[],
        tagline
      },
      button1,
      button2
    },
    studies {
      title,
      body1[],
      body2[],
      exampleTitle,
      exampleTheme,
      exampleSummary,
      downloadButton,
      cta
    },
    book {
      title,
      description[],
      quote,
      cta
    },
    finalCta {
      title,
      titleEmphasis,
      body[],
      button
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getServicesPage = cache(async (language: string) => {
  const query = `*[_type == "servicesPage" && language == $language][0] {
    _id,
    hero {
      title,
      body[],
      button1,
      button2,
      button3
    },
    overview {
      title,
      body1[],
      body2[],
      cta
    },
    diagnostics {
      title,
      subtitle,
      body1[],
      body2[],
      bullets[],
      deliverablesTitle,
      cards[] {
        _key,
        title,
        description
      }
    },
    rndStudio {
      title,
      subtitle,
      body1[],
      body2[],
      deliverablesTitle,
      cards[] {
        _key,
        title,
        description
      }
    },
    loop {
      text,
      quote,
      author,
      subtext[]
    },
    ventureDev {
      title,
      subtitle,
      body1[],
      body2[],
      body3[],
      deliverablesTitle,
      cards[] {
        _key,
        title,
        description
      }
    },
    impact {
      title,
      body1[],
      body2[]
    },
    finalCta {
      title,
      body1[],
      body2[],
      button1,
      button2
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getMethodePage = cache(async (language: string) => {
  const query = `*[_type == "methodePage" && language == $language][0] {
    _id,
    hero {
      title,
      body1[],
      body2[]
    },
    curiosityLoop {
      title,
      subtitle,
      steps[] {
        _key,
        number,
        title,
        description[],
        tools
      }
    },
    impact {
      title,
      body[]
    },
    singularity {
      title,
      body1[],
      body2[],
      body3[],
      cards[] {
        _key,
        title,
        description
      }
    },
    proofs {
      title,
      quotes[] {
        _key,
        text,
        author
      },
      button
    },
    finalCta {
      title,
      body[],
      button
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getContactPage = cache(async (language: string) => {
  const query = `*[_type == "contactPage" && language == $language][0] {
    _id,
    hero {
      title,
      body[]
    },
    contactSection {
      workWithUs {
        title,
        body,
        email
      },
      press {
        title,
        body,
        email
      },
      newsletter {
        title,
        body,
        link
      }
    },
    unsure {
      title,
      body[],
      button1,
      button2,
      button3
    },
    form {
      title,
      description,
      brochureLabel,
      bookExtractLabel,
      bookTitle,
      nameLabel,
      organizationLabel,
      emailLabel,
      interestLabel,
      interestPlaceholder,
      consentLabel,
      submitButton,
      successMessage
    },
    finalCta {
      title,
      body1[],
      body2[],
      button1,
      button2
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});
