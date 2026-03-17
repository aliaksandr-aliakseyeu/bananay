'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';

const localeNames = { en: 'EN', ru: 'RU' };

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (locale) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <div className="flex items-center gap-1 rounded-md border border-gray-200 p-1">
      {routing.locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchLocale(locale)}
          disabled={isPending}
          className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
            currentLocale === locale
              ? 'bg-[#1e3a8a] text-white'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          {localeNames[locale]}
        </button>
      ))}
    </div>
  );
}
