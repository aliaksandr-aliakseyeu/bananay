'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const footerLinks = [
  { href: '#how-it-works', key: 'navHow' },
  { href: '#apps', key: 'navApps' },
  { href: '#region', key: 'navRegion' },
  { href: '#cta', key: 'navContact' },
];

export function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <Image
            src="/bananay-logo-transparent.png"
            alt="Bananay"
            width={140}
            height={42}
            className="h-10 w-auto object-contain"
            unoptimized
          />
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            {footerLinks.map(({ href, key }) => (
              <a key={key} href={href} className="hover:text-gray-900">
                {t(key)}
              </a>
            ))}
          </nav>
          <p className="text-center text-sm text-gray-600">{t('tagline')}</p>
          <p className="text-xs text-gray-500">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
