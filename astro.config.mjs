import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sprigandivy.com',
  integrations: [sitemap()],
  redirects: {
    '/blog.html': '/',
    '/blog': '/',
    '/portfolio.html': '/',
    '/portfolio': '/',
    '/decor.html': '/',
    '/decor': '/',
    '/arches.html': '/',
    '/arches': '/',
    '/terms.html': '/terms/',
    '/contact.html': '/',
    '/contact': '/',
    '/what-are-day-of-coordinators.html': '/',
    '/what-are-day-of-coordinators': '/',
  },
});
