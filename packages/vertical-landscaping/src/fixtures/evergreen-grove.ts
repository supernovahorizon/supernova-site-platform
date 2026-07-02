import type { LandscapingSiteContent } from '../landscaping-site.js';
import { evergreenGroveTheme } from '../theme.js';

export const evergreenGroveFixture = {
  siteUrl: 'https://landscaping.sites.supernovahorizon.com',
  locale: 'en-US',
  business: {
    legalName: 'Evergreen Grove Landscaping LLC',
    displayName: 'Evergreen Grove Landscaping',
    tagline: 'Thoughtful landscapes. Naturally cared for.',
    description:
      'Sample residential landscaping business focused on garden design, lawn care, and seasonal outdoor maintenance for neighborhood homes.',
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
    logoSrc: '/images/logo.jpg',
    logoAlt: 'Evergreen Grove Landscaping wordmark',
    faviconSrc: '/images/logo.jpg',
    primaryColor: '#2f5d44',
    accentColor: '#c46b4a',
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
      'Evergreen Grove Landscaping designs and maintains residential outdoor spaces across Portland-area neighborhoods with garden design, lawn care, and hardscaping.',
    socialImage: {
      src: '/images/hero.jpg',
      alt: 'Lush residential garden with layered planting beds and trimmed lawn',
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
        src: '/images/service-lawn.jpg',
        alt: 'Freshly mowed residential lawn with clean edging',
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
        src: '/images/service-garden.jpg',
        alt: 'Colorful garden beds with native shrubs and perennials',
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
        src: '/images/service-hardscape.jpg',
        alt: 'Stone patio with outdoor seating overlooking a landscaped yard',
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
        src: '/images/service-cleanup.jpg',
        alt: 'Garden bed refresh with mulch and seasonal plant care',
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
        src: '/images/area-north-hill.jpg',
        alt: 'Terraced residential yards on a tree-lined Portland hillside',
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
        src: '/images/area-willow-river.jpg',
        alt: 'River-adjacent pathway with native plantings and shared greenway',
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
        src: '/images/project-patio.jpg',
        alt: 'Courtyard paver patio with built-in seating nook',
      },
      completedLabel: 'Demo portfolio — 2025',
    },
    {
      slug: 'native-border',
      title: 'Native Pollinator Border',
      summary: 'Fictional planting bed with layered heights, bloom sequencing, and mulch edging.',
      serviceSlug: 'garden-design',
      image: {
        src: '/images/project-border.jpg',
        alt: 'Native pollinator border with layered bloom heights',
      },
      completedLabel: 'Demo portfolio — 2024',
    },
    {
      slug: 'lawn-restoration',
      title: 'Shade-Tolerant Lawn Refresh',
      summary: 'Sample overseeding and aeration plan for a compact front yard with tree cover.',
      serviceSlug: 'lawn-care',
      image: {
        src: '/images/project-lawn.jpg',
        alt: 'Shade-tolerant front lawn after overseeding and edging',
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
        src: '/images/before-backyard.jpg',
        alt: 'Backyard before refresh with sparse beds and worn edges',
      },
      afterImage: {
        src: '/images/after-backyard.jpg',
        alt: 'Backyard after refresh with expanded planting beds and aligned pathway',
      },
    },
    {
      slug: 'front-entry',
      title: 'Front Entry Update',
      summary: 'Demonstration entry refresh with new walkway edging and container plantings.',
      beforeImage: {
        src: '/images/before-entry.jpg',
        alt: 'Front entry before update with worn walkway edging',
      },
      afterImage: {
        src: '/images/after-entry.jpg',
        alt: 'Front entry after update with refreshed walkway and container plantings',
      },
    },
  ],
  testimonials: [
    {
      id: 't-01',
      quote:
        'The crew explained each visit clearly and left the beds looking balanced without feeling over-designed.',
      authorName: 'Alex M.',
      authorContext: 'Fictional North Hill homeowner',
      isFictionalDemonstration: true,
    },
    {
      id: 't-02',
      quote:
        'We appreciated the planting plan and phased hardscape notes — it made decisions feel manageable.',
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
      headline: 'Ready for outdoor spaces that feel intentional?',
      body: 'Tell us about your yard and goals. We will follow up with a clear estimate and next steps.',
      buttonLabel: 'Request a free estimate',
      buttonHref: '/quote',
    },
    {
      id: 'contact-secondary',
      headline: 'Want to talk through ideas first?',
      body: 'Reach out by phone or email to discuss scope, timing, and what matters most for your property.',
      buttonLabel: 'Explore our work',
      buttonHref: '/projects',
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
  theme: evergreenGroveTheme,
  home: {
    heroEyebrow: 'Thoughtful landscapes. Naturally cared for.',
    heroHeadline: 'Outdoor spaces designed to grow beautifully.',
    heroSubheadline:
      'Residential garden design, lawn care, and hardscaping for Portland-area neighborhoods.',
    intro:
      'We help homeowners shape yards that feel welcoming year-round — with clear plans, careful installation, and maintenance that respects your time.',
    trustItems: [
      'Free estimates',
      'Locally focused',
      'Clear project planning',
      'Mobile-friendly requests',
    ],
    processSteps: [
      {
        title: 'Tell us about the space',
        description: 'Share photos, goals, and how you use your yard so we understand priorities.',
      },
      {
        title: 'Review the plan and estimate',
        description:
          'Receive a scoped proposal with materials, timing, and options that fit your budget.',
      },
      {
        title: 'Schedule the work',
        description:
          'Coordinate access, prep, and installation with responsive updates along the way.',
      },
      {
        title: 'Enjoy the transformation',
        description:
          'Walk through the finished space together and discuss seasonal care recommendations.',
      },
    ],
    whyChooseItems: [
      {
        title: 'Design-conscious planting',
        description:
          'Beds and borders are planned for structure, seasonal color, and manageable upkeep — not one-size-fits-all templates.',
      },
      {
        title: 'Neighborhood-aware routing',
        description:
          'Service areas help us plan efficient visits and recommend plants suited to local sun, soil, and slope.',
      },
      {
        title: 'Straightforward communication',
        description:
          'You get clear scope notes, realistic timelines, and one primary point of contact from estimate to completion.',
      },
    ],
    featuredComparisonSlug: 'backyard-refresh',
  },
} satisfies LandscapingSiteContent;
