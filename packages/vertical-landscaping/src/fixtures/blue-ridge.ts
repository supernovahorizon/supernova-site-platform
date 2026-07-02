import type { LandscapingSiteContent } from '../landscaping-site.js';
import { blueRidgeTheme } from '../theme.js';

export const blueRidgeFixture = {
  siteUrl: 'https://blue-ridge.sites.supernovahorizon.com',
  locale: 'en-US',
  business: {
    legalName: 'Blue Ridge Terrain Works LLC',
    displayName: 'Blue Ridge Outdoor Living',
    tagline: 'Precision-built outdoor spaces.',
    description:
      'Premium outdoor transformations including patios, retaining walls, outdoor kitchens, and architectural hardscape for mountain and foothill properties.',
    vertical: 'landscaping',
    isDemonstration: true,
  },
  contact: {
    phone: '(828) 555-0198',
    email: 'studio@blue-ridge-terrain.demo',
    address: {
      street: '88 Ridgeview Station Road',
      city: 'Asheville',
      region: 'NC',
      postalCode: '28801',
      country: 'US',
    },
  },
  hours: {
    monday: { open: '07:30', close: '16:30' },
    tuesday: { open: '07:30', close: '16:30' },
    wednesday: { open: '07:30', close: '16:30' },
    thursday: { open: '07:30', close: '16:30' },
    friday: { open: '07:30', close: '15:00' },
    notes: 'Saturday visits by fictional appointment only for demonstration scheduling copy.',
  },
  branding: {
    logoSrc: '/images/logo.jpg',
    logoAlt: 'Blue Ridge Outdoor Living wordmark',
    faviconSrc: '/images/logo.jpg',
    primaryColor: '#3d6b8a',
    accentColor: '#5ba4d9',
    fontFamily: 'serif',
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
    titleSuffix: 'Blue Ridge Outdoor Living',
    defaultDescription:
      'Blue Ridge Outdoor Living designs and builds premium patios, retaining walls, outdoor kitchens, and architectural hardscape across Asheville-area properties.',
    socialImage: {
      src: '/images/hero.jpg',
      alt: 'Cinematic view of a premium stone patio and outdoor living space at dusk',
    },
    robots: 'index,follow',
  },
  analytics: { provider: 'none' },
  leadForm: {
    enabled: true,
    submitLabel: 'Send demonstration project inquiry',
    successMessage:
      'Thanks — your fictional inquiry passed client-side validation. No data was transmitted.',
    privacyPolicyHref: '/privacy',
    services: [
      'Erosion Control',
      'Native Planting',
      'Dry-Stack Stone Walls',
      'Trail & Stair Stonework',
    ],
    budgetRanges: ['Under $5,000', '$5,000 – $12,000', '$12,000 – $25,000', 'Over $25,000'],
  },
  social: {
    instagram: 'https://example.test/blue-ridge/instagram',
    linkedin: 'https://example.test/blue-ridge/linkedin',
  },
  services: [
    {
      slug: 'erosion-control',
      name: 'Erosion Control',
      summary:
        'Fictional slope stabilization with riprap, coir matting, and drainage swale demonstrations.',
      description:
        'Erosion control pages model how slope assessments, matting choices, and outlet protection can be documented for mountain properties. All specifications and timelines are illustrative placeholders.',
      heroImage: {
        src: '/images/service-erosion.jpg',
        alt: 'Illustrated erosion control service placeholder with terraced slope matting',
      },
      benefits: [
        'Slope assessment checklists',
        'Coir and jute matting examples',
        'Riprap and outlet protection notes',
        'Drainage swale layout samples',
      ],
    },
    {
      slug: 'native-planting',
      name: 'Native Planting',
      summary:
        'Demonstration palettes for ridge-top meadows, woodland edges, and rain garden pockets.',
      description:
        'Native planting content highlights seed mixes, shrub layers, and maintenance calendars for fictional Appalachian sites. Plant names and bloom windows are sample data for template testing.',
      heroImage: {
        src: '/images/service-native.jpg',
        alt: 'Illustrated native planting service placeholder with meadow grasses and shrubs',
      },
      benefits: [
        'Ridge meadow seed mix examples',
        'Woodland edge shrub layers',
        'Rain garden pocket layouts',
        'Seasonal maintenance calendars',
      ],
    },
    {
      slug: 'dry-stack-walls',
      name: 'Dry-Stack Stone Walls',
      summary: 'Sample retaining and garden wall sections with regional stone sizing guidance.',
      description:
        'Dry-stack wall service pages show footing notes, stone sizing tables, and capstone detailing for demonstration terraces. No structural engineering claims are made in this fictional content.',
      heroImage: {
        src: '/images/service-stonework.jpg',
        alt: 'Illustrated dry-stack stone wall service placeholder with layered fieldstone',
      },
      benefits: [
        'Terrace wall cross-sections',
        'Regional stone sizing tables',
        'Capstone and batter notes',
        'Drainage weep examples',
      ],
    },
    {
      slug: 'trail-stonework',
      name: 'Trail & Stair Stonework',
      summary:
        'Illustrative hillside steps, switchback edges, and handrail coordination placeholders.',
      description:
        'Trail and stair stonework demonstrates how access paths can be described with tread widths, landing sizes, and fictional coordination notes for railing vendors. Images remain neutral SVG art.',
      heroImage: {
        src: '/images/service-trail.jpg',
        alt: 'Illustrated trail and stair stonework service placeholder with stone steps',
      },
      benefits: [
        'Hillside step tread templates',
        'Switchback landing sizing',
        'Handrail coordination notes',
        'Winter traction maintenance tips',
      ],
    },
  ],
  serviceAreas: [
    {
      slug: 'highlands-ridge',
      name: 'Highlands Ridge',
      regionLabel: 'Blue Ridge highlands demonstration area',
      summary:
        'Fictional ridge-top parcels with exposed soils, wind-prone meadows, and stone outcrops.',
      localIntroduction:
        'Highlands Ridge is an invented mountain community used to validate windy, exposed site copy. Local introductions mention frost pockets, shallow soils, and stone outcrops so service-area pages read differently from their summaries and link to erosion and native planting services.',
      neighborhoods: ['Summit Hollow', 'Laurel Gap', 'Stonecrest Loop'],
      featuredServices: ['erosion-control', 'native-planting', 'dry-stack-walls'],
      heroImage: {
        src: '/images/area-highlands.jpg',
        alt: 'Illustrated Highlands Ridge placeholder with ridge-top meadow and stone outcrop',
      },
    },
    {
      slug: 'valley-creek-basin',
      name: 'Valley Creek Basin',
      regionLabel: 'Blue Ridge valley demonstration basin',
      summary:
        'Sample valley floor lots with seasonal creeks, shade pockets, and shared trail access.',
      localIntroduction:
        'Valley Creek Basin content focuses on seasonal high water, shaded understory planting, and shared trail interfaces. The copy intentionally references creek buffers and stair access to hillside homes, providing distinct local detail for the second fictional service area.',
      neighborhoods: ['Creek Bend', 'Mossy Ford', 'Hemlock Row'],
      featuredServices: ['native-planting', 'trail-stonework', 'erosion-control'],
      heroImage: {
        src: '/images/area-valley-creek.jpg',
        alt: 'Illustrated Valley Creek Basin placeholder with creek buffer and stone steps',
      },
    },
  ],
  projects: [
    {
      slug: 'ridge-terraces',
      title: 'Ridge Terrace Walls',
      summary: 'Demonstration dry-stack terraces with drainage weeps and native shrub pockets.',
      serviceSlug: 'dry-stack-walls',
      image: {
        src: '/images/project-terraces.jpg',
        alt: 'Illustrated ridge terrace wall demonstration project',
      },
      completedLabel: 'Demo portfolio — 2025',
    },
    {
      slug: 'meadow-restore',
      title: 'Meadow Edge Restoration',
      summary: 'Fictional native seeding and erosion matting along a wind-exposed meadow edge.',
      serviceSlug: 'native-planting',
      image: {
        src: '/images/project-meadow.jpg',
        alt: 'Illustrated meadow edge restoration demonstration project',
      },
      completedLabel: 'Demo portfolio — 2024',
    },
    {
      slug: 'creek-stair',
      title: 'Creek Access Stone Steps',
      summary: 'Sample hillside stair run with landings sized for shared trail access.',
      serviceSlug: 'trail-stonework',
      image: {
        src: '/images/project-stairs.jpg',
        alt: 'Illustrated creek access stone steps demonstration project',
      },
      completedLabel: 'Demo portfolio — 2025',
    },
  ],
  beforeAfter: [
    {
      slug: 'slope-stabilize',
      title: 'Slope Stabilization',
      summary:
        'Fictional before-and-after showing matting, rip rap, and native grass establishment.',
      beforeImage: {
        src: '/images/before-slope.jpg',
        alt: 'Illustrated before state of an eroded hillside slope',
      },
      afterImage: {
        src: '/images/after-slope.jpg',
        alt: 'Illustrated after state of a stabilized hillside with matting and plantings',
      },
    },
    {
      slug: 'trail-head',
      title: 'Trailhead Upgrade',
      summary: 'Demonstration trailhead refresh with stone steps and edge plantings.',
      beforeImage: {
        src: '/images/before-trail.jpg',
        alt: 'Illustrated before state of a muddy trailhead entrance',
      },
      afterImage: {
        src: '/images/after-trail.jpg',
        alt: 'Illustrated after state of a trailhead with stone steps and plantings',
      },
    },
  ],
  testimonials: [
    {
      id: 'br-01',
      quote:
        'The demonstration team outlined erosion options without promising real outcomes. This quote is fictional and used for layout testing only.',
      authorName: 'Casey R.',
      authorContext: 'Fictional Highlands Ridge neighbor',
      isFictionalDemonstration: true,
    },
    {
      id: 'br-02',
      quote:
        'Sample stonework diagrams helped us understand how content maps to project pages. No actual client relationship exists.',
      authorName: 'Morgan T.',
      authorContext: 'Fictional Valley Creek homeowner',
      isFictionalDemonstration: true,
    },
  ],
  faq: [
    {
      question: 'Is Blue Ridge Terrain Works a real company?',
      answer:
        'No. Blue Ridge Terrain Works is a fictional demonstration business for the Supernova Site Platform. Addresses, phone numbers, and testimonials are placeholders.',
    },
    {
      question: 'Do you publish pricing or guarantees?',
      answer:
        'This demo avoids pricing tables, star ratings, and revenue claims. Content focuses on layout, accessibility, and validation patterns only.',
    },
    {
      question: 'Are the mountain projects real?',
      answer:
        'All projects use neutral SVG placeholders. Before-and-after panels illustrate composition patterns without depicting actual job sites.',
    },
    {
      question: 'Which service areas are covered?',
      answer:
        'Highlands Ridge and Valley Creek Basin are invented locations used to test localized copy, breadcrumbs, and internal links between services and areas.',
    },
  ],
  ctas: [
    {
      id: 'quote-ridge',
      headline: 'Plan a precision-built outdoor space',
      body: 'Share your site conditions and vision. We respond with a scoped plan, materials overview, and realistic timeline.',
      buttonLabel: 'Plan your project',
      buttonHref: '/quote',
    },
    {
      id: 'contact-ridge',
      headline: 'See how spaces transform',
      body: 'Browse patios, terraces, and hardscape projects designed for mountain lots and architectural outdoor living.',
      buttonLabel: 'View transformations',
      buttonHref: '/projects',
    },
  ],
  about: {
    title: 'About Blue Ridge Terrain Works',
    introduction:
      'Blue Ridge Terrain Works is a fictional mountain landscaping studio used to prove configuration-only differentiation between Astro demo apps. The about page highlights stonework, planting, and erosion storytelling without referencing real crews, licenses, or awards.',
    values: [
      'Mountain-specific demonstration copy',
      'Accessible media placeholders on every page',
      'Shared schemas powering identical page templates',
    ],
  },
  privacy: {
    title: 'Privacy policy (demonstration)',
    sections: [
      {
        heading: 'Fictional studio notice',
        body: 'This privacy policy covers a demonstration website only. Blue Ridge Terrain Works does not operate as a real business and does not store production lead data.',
      },
      {
        heading: 'Form handling',
        body: 'Quote forms validate input in the browser for training purposes. Default demo builds do not forward submissions to external systems.',
      },
      {
        heading: 'Contact placeholders',
        body: 'Email addresses and phone numbers are fictional. Do not share personal information through this demonstration site.',
      },
    ],
  },
  notFound: {
    title: 'Page not found',
    message:
      'That path is not part of the Blue Ridge demonstration site. Use the menu to browse fictional services, areas, and projects.',
    homeHref: '/',
  },
  theme: blueRidgeTheme,
  home: {
    heroHeadline: 'Precision-built outdoor spaces.',
    heroSubheadline:
      'Architectural hardscape, terraces, and outdoor living for mountain and foothill homes.',
    intro:
      'From retaining walls to outdoor kitchens, we engineer durable transformations with crisp detailing and materials chosen for slope, drainage, and daily use.',
    trustItems: [
      'Detailed service options',
      'Responsive communication',
      'Residential projects',
      'Mobile-friendly estimates',
    ],
    processSteps: [
      {
        title: 'Tell us about the space',
        description:
          'Walk the site together — slope, access, utilities, and how you want to use the space.',
      },
      {
        title: 'Review the plan and estimate',
        description:
          'Receive drawings, material selections, and phased budgets aligned to structural needs.',
      },
      {
        title: 'Schedule the work',
        description:
          'Coordinate staging, drainage prep, and installation with clear milestone updates.',
      },
      {
        title: 'Enjoy the transformation',
        description:
          'Complete a final walkthrough covering lighting, drainage, and seasonal maintenance.',
      },
    ],
    whyChooseItems: [
      {
        title: 'Engineered hardscape',
        description:
          'Retaining walls, steps, and patios are planned for drainage, frost movement, and long-term stability on sloped lots.',
      },
      {
        title: 'Cinematic outdoor living',
        description:
          'Fire features, lighting, and kitchen layouts are composed for evening use — not just daytime curb appeal.',
      },
      {
        title: 'Mountain-site fluency',
        description:
          'We account for access constraints, erosion risk, and native plant palettes suited to ridge and valley microclimates.',
      },
    ],
    featuredComparisonSlug: 'slope-stabilize',
    heroMetrics: [
      { label: 'Sample patios', value: '12+' },
      { label: 'Terrace walls', value: '8+' },
      { label: 'Outdoor kitchens', value: '5+' },
    ],
  },
} satisfies LandscapingSiteContent;
