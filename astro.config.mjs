import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eflapydigital.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', assets: 'assets' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
