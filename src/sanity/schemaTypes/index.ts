import { type SchemaTypeDefinition } from 'sanity'

// Layout
import navigation from './layout/navigation'
import header from './layout/header'
import footer from './layout/footer'

// Homepage
import heroSection from './homepage/heroSection'
import introSection from './homepage/introSection'
import missionSection from './homepage/missionSection'
import tiersSection from './homepage/tiersSection'
import keyMetricsSection from './homepage/keyMetricsSection'
import projectsSection from './homepage/projectsSection'
import bookSection from './homepage/bookSection'
import casesSection from './homepage/casesSection'
import footerCTASection from './homepage/footerCTASection'
import newsletterSection from './homepage/newsletterSection'

// Pages
import signalsPage from './signals/signalsPage'
import servicesPage from './services/servicesPage'
import methodePage from './services/methodePage'
import contactPage from './services/contactPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Layout
    navigation,
    header,
    footer,
    // Homepage
    heroSection,
    introSection,
    missionSection,
    tiersSection,
    keyMetricsSection,
    projectsSection,
    bookSection,
    casesSection,
    footerCTASection,
    newsletterSection,
    // Pages
    signalsPage,
    servicesPage,
    methodePage,
    contactPage,
  ],
}
