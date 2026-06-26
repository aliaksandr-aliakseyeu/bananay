import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ka', 'ru'],
  defaultLocale: 'en',
});

/** Locales shown in the language switcher (ru kept in routing but hidden). */
export const visibleLocales = ['en', 'ka'];
