export type LandscapingService = {
  slug: string;
  name: string;
  summary: string;
};

export const landscapingDemoContent = {
  heroTitle: 'Evergreen Grove Landscaping',
  heroSubtitle: 'Demonstration business — fictional local landscaping services',
  services: [
    {
      slug: 'lawn-care',
      name: 'Seasonal Lawn Care',
      summary: 'Fictional routine mowing, edging, and seasonal cleanup for demonstration purposes.',
    },
    {
      slug: 'garden-design',
      name: 'Garden Design',
      summary: 'Sample planting plans and layout concepts for a demonstration portfolio.',
    },
    {
      slug: 'hardscaping',
      name: 'Hardscaping',
      summary: 'Illustrative patios and walkways shown as demonstration project types only.',
    },
  ] satisfies LandscapingService[],
};
