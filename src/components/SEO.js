import { Helmet } from 'react-helmet-async';
import { getSiteUrl, SITE_NAME, getSchemaForPage } from '../config/seo';

function SEO({ title, description, path = '/', noindex = false, schemaType }) {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${path}`;
  const image = `${siteUrl}/og-image.svg`;
  const schemas = getSchemaForPage(schemaType);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — Full Stack Web Developer`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — Full Stack Web Developer`} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEO;
