'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('Header');

  const navLinks = [
    { href: '#how-it-works', label: t('navHow') },
    { href: '#apps', label: t('navApps') },
    { href: '#region', label: t('navRegion') },
    { href: '#cta', label: t('navContact') },
  ];

  return (
    <header className="sticky top-0 z-[9999] w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/bananay-logo-transparent.png"
            alt="Bananay"
            width={240}
            height={72}
            className="h-8 w-auto object-contain object-center"
            priority
            unoptimized
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="font-medium text-gray-700 hover:text-gray-900">
                {label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 md:hidden"
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur md:hidden supports-[backdrop-filter]:bg-white/60">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                {label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
