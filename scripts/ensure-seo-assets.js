const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const buildDir = path.join(root, 'build');

const seoAssets = ['sitemap.xml', 'robots.txt', 'og-image.svg', 'llms.txt'];

if (!fs.existsSync(buildDir)) {
  console.error('ensure-seo-assets: build/ folder not found. Run react-scripts build first.');
  process.exit(1);
}

seoAssets.forEach((file) => {
  const source = path.join(publicDir, file);
  const target = path.join(buildDir, file);

  if (!fs.existsSync(source)) {
    console.warn(`ensure-seo-assets: missing source file public/${file}`);
    return;
  }

  fs.copyFileSync(source, target);
  console.log(`ensure-seo-assets: copied ${file} -> build/${file}`);
});

// Use the SPA shell for 404.html so hosts that serve it still boot React Router.
const indexHtml = path.join(buildDir, 'index.html');
const fallback404Html = path.join(buildDir, '404.html');

if (fs.existsSync(indexHtml)) {
  fs.copyFileSync(indexHtml, fallback404Html);
  console.log('ensure-seo-assets: synced 404.html from index.html');
}
