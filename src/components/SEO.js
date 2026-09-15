import { Helmet } from 'react-helmet-async';
import { getSiteUrl, SITE_NAME } from '../config/seo';

function SEO({ title, description, path = '/', noindex = false }) {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${path}`;
  const image = `${siteUrl}/logo512.png`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}

export default SEO;
