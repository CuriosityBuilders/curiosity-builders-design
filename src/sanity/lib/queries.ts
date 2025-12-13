import { cache } from "react";
import { sanityFetch } from "./live";

// Layout (not internationalized)
export const getLogo = cache(async () => {
  const query = `*[_type == "logo"][0] {
    _id,
    logo {
      asset->{
        _id,
        url
      },
      alt,
      hotspot,
      crop
    }
  }`;

  const { data } = await sanityFetch({ query });
  return data;
});

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
    brandName,
    linkedin {
      label,
      url
    },
    substack {
      label,
      url
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
      title,
      "images": imagesRef->images[] {
        image {
          asset->{
            _id,
            url
          },
          hotspot,
          crop
        },
        title,
        alt,
        objectPosition,
        captionFr,
        captionEn
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
          url
        },
        hotspot,
        crop
      },
      link
    },
    cases {
      "clients": logosRef->clients[] {
        name,
        logo {
          asset->{
            _id,
            url
          },
          hotspot,
          crop
        }
      },
      "press": logosRef->press[] {
        name,
        logo {
          asset->{
            _id,
            url
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

// Pages
export const getSignalsPage = cache(async (language: string) => {
  const query = `*[_type == "signalsPage" && language == $language][0] {
    _id,
    seoTitle,
    seoDescription,
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
      cta,
      pdfs-> {
        pdfs[] {
          _key,
          title {
            fr,
            en
          },
          coverImage {
            asset-> {
              _id,
              url
            },
            alt
          },
          file {
            asset-> {
              _id,
              url,
              originalFilename
            }
          },
          theme {
            fr,
            en
          },
          summary {
            fr,
            en
          }
        }
      }
    },
    book {
      title,
      description[],
      quote,
      cta,
      extractButtonText,
      extractPdf {
        asset-> {
          _id,
          url,
          originalFilename
        }
      },
      "image": imageRef->image {
        asset-> {
          _id,
          url
        },
        hotspot,
        crop
      }
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
    seoTitle,
    seoDescription,
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
    seoTitle,
    seoDescription,
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
      button,
      "clients": logosRef->clients[] {
        name,
        logo {
          asset->{
            _id,
            url
          },
          hotspot,
          crop
        }
      }
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getContactPage = cache(async (language: string) => {
  const query = `*[_type == "contactPage" && language == $language][0] {
    _id,
    seoTitle,
    seoDescription,
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
      }
    },
    unsure {
      title,
      body[],
      button1,
      button1Url,
      button2,
      button2Url,
      button3,
      button4,
      button4Pdf {
        asset-> {
          _id,
          url,
          originalFilename
        }
      }
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
      button2
    },
    language
  }`;

  const { data } = await sanityFetch({ query, params: { language } });
  return data;
});

export const getLegalNoticePage = cache(async (language: string) => {
  const query = `*[_id == "legalNoticePage-${language}"][0] {
    _id,
    hero {
      title,
      subtitle
    },
    seoTitle,
    seoDescription,
    content[],
    language
  }`;

  const { data } = await sanityFetch({ query });
  return data;
});

export const getPrivacyPolicyPage = cache(async (language: string) => {
  const query = `*[_id == "privacyPolicyPage-${language}"][0] {
    _id,
    hero {
      title,
      subtitle
    },
    seoTitle,
    seoDescription,
    content[],
    language
  }`;

  const { data } = await sanityFetch({ query });
  return data;
});

// SEO Settings (single document with internationalized fields)
export const getSEOSettings = cache(async (language: string) => {
  const query = `*[_type == "seoSettings"][0] {
    _id,
    title,
    description,
    ogImage {
      asset->{
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    favicon {
      asset->{
        _id,
        url
      },
      hotspot,
      crop
    }
  }`;

  const { data } = await sanityFetch({ query });

  if (!data) return null;

  return {
    title: data.title?.[language] || data.title?.fr,
    description: data.description?.[language] || data.description?.fr,
    ogImage: data.ogImage
      ? {
          ...data.ogImage,
          alt:
            data.ogImage.alt?.[language] ||
            data.ogImage.alt?.fr ||
            "Curiosity.Builders",
        }
      : null,
    favicon: data.favicon || null,
  };
});
