import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/for-whom': '/for-whom',
    '/benefits': '/benefits',
    '/how-it-works': '/how-it-works',
    '/under-construction': '/under-construction',
    '/about': '/about',
    '/apps': '/apps',
    '/why-platform': '/why-platform',
    '/platform': '/platform',
    '/producers': '/producers',
    '/region': '/region',
  },
});
