export const SITE_NAME = 'Alexis Jiménez';

export const DEFAULT_DESCRIPTION =
  'Portfolio of Alexis Jiménez — Full Stack Web Developer, Web Designer and Electronic Engineer. Specialized in React, Python, Django, Shopify and modern web development.';

export const getSiteUrl = () =>
  process.env.REACT_APP_SITE_URL ||
  (typeof window !== 'undefined' ? window.location.origin : '');

export const SEO_PAGES = {
  home: {
    title: 'Alexis Jiménez | Full Stack Web Developer',
    description: DEFAULT_DESCRIPTION,
    path: '/',
  },
  about: {
    title: 'About Me | Alexis Jiménez',
    description:
      'Learn about Alexis Jiménez — Electronic Engineer and Full Stack Web Developer from Venezuela. Experience in frontend, backend, Shopify themes and UI/UX design.',
    path: '/about',
  },
  notFound: {
    title: 'Page Not Found | Alexis Jiménez',
    description: 'The page you are looking for does not exist.',
    path: '',
    noindex: true,
  },
};
