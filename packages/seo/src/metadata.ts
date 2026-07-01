export type PageSeoInput = {
  siteUrl: string;
  path: string;
  title: string;
  description: string;
  robots?: string;
  socialImage?: { src: string; alt: string };
  type?: 'website' | 'article';
};

export function buildPageMetadata(input: PageSeoInput) {
  const canonical = new URL(input.path, input.siteUrl).toString();
  const imageUrl = input.socialImage
    ? new URL(input.socialImage.src, input.siteUrl).toString()
    : undefined;

  return {
    title: input.title,
    description: input.description,
    canonical,
    robots: input.robots ?? 'noindex,nofollow',
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      type: input.type ?? 'website',
      image: imageUrl,
      imageAlt: input.socialImage?.alt,
    },
  };
}
