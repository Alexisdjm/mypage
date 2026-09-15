export const SITE_NAME = 'Alexis Jiménez';
export const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://alexiswebworks.com';

export const DEFAULT_DESCRIPTION =
  'Portfolio of Alexis Jiménez — Full Stack Web Developer, Web Designer and Electronic Engineer. Specialized in React, Python, Django, Shopify and modern web development.';

export const SOCIAL_PROFILES = {
  github: 'https://github.com/Alexisdjm',
  linkedin: 'https://www.linkedin.com/in/alexis-jimenez-42083823a',
  instagram: 'https://instagram.com/alexisdjm__',
  tiktok: 'https://www.tiktok.com/@alexisdjm__',
  whatsapp: 'https://wa.me/584245604821',
  email: 'mailto:Alexis.jm29@gmail.com',
};

export const getSiteUrl = () =>
  SITE_URL || (typeof window !== 'undefined' ? window.location.origin : 'https://alexiswebworks.com');

export const SEO_PAGES = {
  home: {
    title: 'Alexis Jiménez | Full Stack Web Developer',
    description: DEFAULT_DESCRIPTION,
    path: '/',
    schemaType: 'home',
  },
  about: {
    title: 'About Me | Alexis Jiménez',
    description:
      'Learn about Alexis Jiménez — Electronic Engineer and Full Stack Web Developer from Venezuela. Experience in frontend, backend, Shopify themes and UI/UX design.',
    path: '/about',
    schemaType: 'about',
  },
  notFound: {
    title: 'Page Not Found | Alexis Jiménez',
    description: 'The page you are looking for does not exist.',
    path: '/404',
    noindex: true,
  },
};

export const buildPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alexis Jiménez',
  alternateName: ['Alexis Jimenez', 'Alexis David Jiménez Mendoza'],
  jobTitle: 'Full Stack Web Developer',
  description: DEFAULT_DESCRIPTION,
  url: getSiteUrl(),
  email: 'Alexis.jm29@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barquisimeto',
    addressCountry: 'VE',
  },
  sameAs: [
    SOCIAL_PROFILES.github,
    SOCIAL_PROFILES.linkedin,
    SOCIAL_PROFILES.instagram,
    SOCIAL_PROFILES.tiktok,
  ],
});

export const buildWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: getSiteUrl(),
  description: DEFAULT_DESCRIPTION,
  author: {
    '@type': 'Person',
    name: SITE_NAME,
  },
});

export const buildProfilePageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: `About ${SITE_NAME}`,
  url: `${getSiteUrl()}/about`,
  mainEntity: buildPersonSchema(),
});

export const getSchemaForPage = (schemaType) => {
  if (schemaType === 'about') {
    return [buildPersonSchema(), buildProfilePageSchema()];
  }
  if (schemaType === 'home') {
    return [buildPersonSchema(), buildWebSiteSchema()];
  }
  return [];
};
