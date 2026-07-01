export type FashionCollection = {
  slug: string;
  name: string;
  summary: string;
};

export const fashionDemoContent = {
  heroTitle: 'Lumen Atelier',
  heroSubtitle: 'Demonstration business — fictional fashion and jewelry studio',
  collections: [
    {
      slug: 'atelier-basics',
      name: 'Atelier Basics',
      summary: 'Fictional capsule wardrobe pieces for demonstration catalog layouts.',
    },
    {
      slug: 'signature-jewelry',
      name: 'Signature Jewelry',
      summary: 'Sample jewelry silhouettes used only in demonstration galleries.',
    },
    {
      slug: 'evening-looks',
      name: 'Evening Looks',
      summary: 'Illustrative eveningwear concepts without pricing or purchase claims.',
    },
  ] satisfies FashionCollection[],
};
