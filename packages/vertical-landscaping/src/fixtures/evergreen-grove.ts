import type { LandscapingSiteContent } from '../landscaping-site.js';

export const evergreenGroveFixture = {
  siteUrl: 'https://landscaping.sites.supernovahorizon.com',
  locale: 'en-US',
  business: {
    legalName: 'Evergreen Grove Landscaping LLC',
    displayName: 'Evergreen Grove Landscaping',
    tagline: 'Thoughtful outdoor spaces for demonstration neighborhoods',
    description:
      'Fictional demonstration landscaping business showcasing lawn care, planting design, and hardscaping workflows for the Supernova Site Platform.',
    vertical: 'landscaping',
    isDemonstration: true,
  },
  contact: {
    phone: '(503) 555-0142',
    email: 'hello@evergreen-grove.demo',
    address: {
      street: '412 Mossy Lane',
      city: 'Portland',
      region: 'OR',
      postalCode: '97214',
      country: 'US',
    },
  },
  hours: {
    monday: { open: '08:00', close: '17:00' },
    tuesday: { open: '08:00', close: '17:00' },
    wednesday: { open: '08:00', close: '17:00' },
    thursday: { open: '08:00', close: '17:00' },
    friday: { open: '08:00', close: '16:00' },
    saturday: { open: '09:00', close: '13:00' },
    notes: 'Demonstration hours only — not a live booking calendar.',
  },
  branding: {
    logoSrc: '/images/logo.svg',
    logoAlt: 'Evergreen Grove Landscaping demonstration logo',
    faviconSrc: '/images/logo.svg',
    primaryColor: '#2f6f4e',
    accentColor: '#3d8b5f',
    fontFamily: 'system',
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Service areas', href: '/service-areas' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Quote', href: '/quote' },
  ],
  seo: {
    titleSuffix: 'Evergreen Grove Landscaping',
    defaultDescription:
      'Fictional Portland-area landscaping demonstration with services, projects, and quote workflows for platform evaluation.',
    socialImage: {
      src: '/images/hero.svg',
      alt: 'Illustrated evergreen garden hero placeholder for the demonstration site',
    },
    robots: 'index,follow',
  },
  analytics: { provider: 'none' },
  leadForm: {
    enabled: true,
    submitLabel: 'Send demonstration quote request',
    successMessage:
      'Thanks — your fictional quote request passed client-side validation. No data was transmitted.',
    privacyPolicyHref: '/privacy',
    services: ['Seasonal Lawn Care', 'Garden Design', 'Hardscaping', 'Seasonal Cleanup'],
    budgetRanges: ['Under $2,500', '$2,500 – $7,500', '$7,500 – $15,000', 'Over $15,000'],
  },
  social: {
    instagram: 'https://example.test/evergreen-grove/instagram',
    facebook: 'https://example.test/evergreen-grove/facebook',
  },
  services: [
    {
      slug: 'lawn-care',
      name: 'Seasonal Lawn Care',
      summary:
        'Fictional mowing, edging, and fertilization schedules tailored to demonstration turf conditions.',
      description:
        'This demonstration service models recurring lawn maintenance for residential properties. Content covers mowing cadence, edging, seasonal fertilization, and aeration notes without implying real availability or pricing.',
      heroImage: {
        src: '/images/service-lawn.svg',
        alt: 'Illustrated lawn care service placeholder with trimmed grass rows',
      },
      benefits: [
        'Consistent mowing and edging cadence',
        'Seasonal fertilization planning',
        'Aeration and overseeding guidance',
        'Leaf and debris cleanup options',
      ],
    },
    {
      slug: 'garden-design',
      name: 'Garden Design',
      summary:
        'Sample planting plans, bed layouts, and pollinator-friendly palettes for demonstration gardens.',
      description:
        'Garden design pages show how planting concepts, bed shapes, and maintenance notes can be authored once and rendered across service and project templates. All plant lists and layouts are fictional.',
      heroImage: {
        src: '/images/service-garden.svg',
        alt: 'Illustrated garden design service placeholder with layered planting beds',
      },
      benefits: [
        'Pollinator-friendly planting palettes',
        'Bed layout and edging concepts',
        'Irrigation planning placeholders',
        'Seasonal color rotation examples',
      ],
    },
    {
      slug: 'hardscaping',
      name: 'Hardscaping',
      summary:
        'Illustrative patios, walkways, and retaining concepts for demonstration portfolios.',
      description:
        'Hardscaping content demonstrates how material choices, drainage notes, and construction phases can be presented without real project photos. Images are neutral SVG placeholders only.',
      heroImage: {
        src: '/images/service-hardscape.svg',
        alt: 'Illustrated hardscaping service placeholder with patio pavers',
      },
      benefits: [
        'Paver patio layout examples',
        'Walkway and step detailing',
        'Retaining wall cross-section notes',
        'Drainage and base prep checklists',
      ],
    },
    {
      slug: 'seasonal-cleanup',
      name: 'Seasonal Cleanup',
      summary:
        'Demonstration leaf removal, bed refresh, and storm debris workflows for fall and spring.',
      description:
        'Seasonal cleanup illustrates one-off maintenance visits with scope lists, disposal notes, and scheduling copy. It helps validate quote forms that reference multiple service types.',
      heroImage: {
        src: '/images/service-cleanup.svg',
        alt: 'Illustrated seasonal cleanup service placeholder with rake and leaf piles',
      },
      benefits: [
        'Leaf and needle removal scopes',
        'Bed edging and mulch refresh',
        'Storm debris clearing checklists',
        'Gutter and surface clearing add-ons',
      ],
    },
  ],
  serviceAreas: [
    {
      slug: 'north-hill-district',
      name: 'North Hill District',
      regionLabel: 'North Portland demonstration area',
      summary: 'Fictional hillside neighborhood with mixed sun exposure and compact front yards.',
      localIntroduction:
        'North Hill District is a made-up Portland-adjacent neighborhood used to test location-specific copy. Pages reference sloped lots, street-tree shade, and narrow side yards so service-area templates render distinct local detail instead of repeating the summary.',
      neighborhoods: ['Cedar Knoll', 'Maple Terrace', 'Fern Crossing'],
      featuredServices: ['lawn-care', 'garden-design', 'seasonal-cleanup'],
      heroImage: {
        src: '/images/area-north-hill.svg',
        alt: 'Illustrated North Hill District placeholder with terraced yards',
      },
    },
    {
      slug: 'willow-river-corridor',
      name: 'Willow River Corridor',
      regionLabel: 'East Portland demonstration corridor',
      summary:
        'Sample river-adjacent blocks with damp soil, riparian plantings, and shared pathways.',
      localIntroduction:
        'Willow River Corridor content explores riparian planting, drainage swales, and pathway lighting for fictional riverfront blocks. The copy is intentionally different from the summary to satisfy service-area validation and to show how local introductions can mention soil moisture and shared greenways.',
      neighborhoods: ['Riverbend Commons', 'Willow Flats', 'Birch Landing'],
      featuredServices: ['garden-design', 'hardscaping', 'seasonal-cleanup'],
      heroImage: {
        src: '/images/area-willow-river.svg',
        alt: 'Illustrated Willow River Corridor placeholder with pathway and native plants',
      },
    },
  ],
  projects: [
    {
      slug: 'courtyard-patio',
      title: 'Courtyard Paver Patio',
      summary: 'Demonstration hardscaping layout with seating nook and permeable border details.',
      serviceSlug: 'hardscaping',
      image: {
        src: '/images/project-patio.svg',
        alt: 'Illustrated courtyard paver patio demonstration project',
      },
      completedLabel: 'Demo portfolio — 2025',
    },
    {
      slug: 'native-border',
      title: 'Native Pollinator Border',
      summary: 'Fictional planting bed with layered heights, bloom sequencing, and mulch edging.',
      serviceSlug: 'garden-design',
      image: {
        src: '/images/project-border.svg',
        alt: 'Illustrated native pollinator border demonstration project',
      },
      completedLabel: 'Demo portfolio — 2024',
    },
    {
      slug: 'lawn-restoration',
      title: 'Shade-Tolerant Lawn Refresh',
      summary: 'Sample overseeding and aeration plan for a compact front yard with tree cover.',
      serviceSlug: 'lawn-care',
      image: {
        src: '/images/project-lawn.svg',
        alt: 'Illustrated shade-tolerant lawn refresh demonstration project',
      },
      completedLabel: 'Demo portfolio — 2025',
    },
  ],
  beforeAfter: [
    {
      slug: 'backyard-refresh',
      title: 'Backyard Refresh',
      summary: 'Fictional before-and-after story showing bed expansion and pathway realignment.',
      beforeImage: {
        src: '/images/before-backyard.svg',
        alt: 'Illustrated before state of a backyard with sparse planting beds',
      },
      afterImage: {
        src: '/images/after-backyard.svg',
        alt: 'Illustrated after state of a backyard with refreshed planting beds',
      },
    },
    {
      slug: 'front-entry',
      title: 'Front Entry Update',
      summary: 'Demonstration entry refresh with new walkway edging and container plantings.',
      beforeImage: {
        src: '/images/before-entry.svg',
        alt: 'Illustrated before state of a front entry with worn walkway edges',
      },
      afterImage: {
        src: '/images/after-entry.svg',
        alt: 'Illustrated after state of a front entry with refreshed walkway edging',
      },
    },
  ],
  testimonials: [
    {
      id: 't-01',
      quote:
        'The demonstration crew explained each maintenance visit clearly. This testimonial is fictional and included only to preview layout patterns.',
      authorName: 'Alex M.',
      authorContext: 'Fictional North Hill homeowner',
      isFictionalDemonstration: true,
    },
    {
      id: 't-02',
      quote:
        'We appreciated the sample planting plan and phased hardscape notes. No real customer relationship is implied.',
      authorName: 'Jordan P.',
      authorContext: 'Fictional Willow River neighbor',
      isFictionalDemonstration: true,
    },
  ],
  faq: [
    {
      question: 'Is Evergreen Grove a real landscaping company?',
      answer:
        'No. Evergreen Grove Landscaping is a fictional demonstration business created for the Supernova Site Platform. Contact details, projects, and testimonials are placeholders.',
    },
    {
      question: 'Can I book services through this site?',
      answer:
        'This site is for platform evaluation only. Quote and contact forms validate input client-side but do not submit to a live CRM or scheduling system.',
    },
    {
      question: 'Are project photos real?',
      answer:
        'All imagery is neutral SVG placeholder art. Before-and-after panels illustrate layout patterns without depicting actual properties.',
    },
    {
      question: 'Which areas do you serve?',
      answer:
        'Service area pages describe fictional Portland-adjacent neighborhoods. They exist to test localized copy and internal linking between services and areas.',
    },
  ],
  ctas: [
    {
      id: 'quote-primary',
      headline: 'Ready to explore a demonstration quote?',
      body: 'Use the quote form to see validation, consent copy, and service picklists wired to fictional content.',
      buttonLabel: 'Request a quote',
      buttonHref: '/quote',
    },
    {
      id: 'contact-secondary',
      headline: 'Prefer to review contact details first?',
      body: 'Visit the contact page for phone, email, hours, and address placeholders.',
      buttonLabel: 'Contact us',
      buttonHref: '/contact',
    },
  ],
  about: {
    title: 'About Evergreen Grove',
    introduction:
      'Evergreen Grove Landscaping is a fictional company used to exercise multi-page Astro demos, shared UI sections, and structured data helpers. The about page demonstrates values copy, demonstration disclaimers, and navigation patterns without referencing real staff or certifications.',
    values: [
      'Clear demonstration labeling on every page',
      'Accessible placeholders with meaningful alt text',
      'Reusable content validated through shared schemas',
    ],
  },
  privacy: {
    title: 'Privacy policy (demonstration)',
    sections: [
      {
        heading: 'Fictional business notice',
        body: 'This privacy policy applies to a demonstration website only. Evergreen Grove Landscaping does not operate as a real business and does not collect production customer data.',
      },
      {
        heading: 'Form handling',
        body: 'Quote and contact forms on demo sites perform client-side validation for instructional purposes. Submissions are not transmitted to external services in the default configuration.',
      },
      {
        heading: 'Questions',
        body: 'For platform questions, refer to the Supernova Site Platform documentation. Do not send personal information to the placeholder email addresses shown on this site.',
      },
    ],
  },
  notFound: {
    title: 'Page not found',
    message:
      'The page you requested is not part of this demonstration site. Use the navigation menu to explore fictional services and projects.',
    homeHref: '/',
  },
  home: {
    heroHeadline: 'Evergreen Grove Landscaping',
    heroSubheadline: 'Demonstration business — fictional local landscaping services',
    intro:
      'Explore a full multi-page landscaping demo with services, service areas, projects, FAQ, and quote flows. All businesses, testimonials, and imagery are fictional.',
  },
} satisfies LandscapingSiteContent;
