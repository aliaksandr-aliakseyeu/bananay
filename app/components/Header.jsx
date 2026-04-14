'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LoginDropdown } from './header/LoginDropdown';
import { MegaMenuPanel } from './header/MegaMenuPanel';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { getHeaderInfoLinks, getHeaderPlatformLinks } from '@/app/lib/navigation/header-links';
import { useConfig } from '@/app/lib/useConfig';

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const containerRef = useRef(null);
  const t = useTranslations('Header');
  const { config } = useConfig();
  const locale = useLocale();
  const closeMegaMenu = useCallback(() => setMegaOpen(false), []);
  useClickOutside(containerRef, closeMegaMenu);

  const infoLinks = useMemo(() => getHeaderInfoLinks(t), [t]);
  const platformLinks = useMemo(() => getHeaderPlatformLinks(t, config, locale), [t, config, locale]);

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-[9999] w-full border-b border-slate-200 bg-slate-50"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <div className="relative flex h-16 items-center">
            <button
              type="button"
              onClick={() => setMegaOpen((value) => !value)}
              onMouseEnter={() => setMegaOpen(true)}
              className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-gray-900"
            >
              {megaOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
              <span className="text-[10px] font-semibold uppercase tracking-widest">{t('menuLabel')}</span>
            </button>

            {megaOpen && (
              <MegaMenuPanel
                infoLinks={infoLinks}
                platformLinks={platformLinks}
                t={t}
                onClose={closeMegaMenu}
              />
            )}
          </div>

          <Link href="/" className="flex shrink-0 items-center" onClick={closeMegaMenu}>
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
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <LoginDropdown t={t} config={config} locale={locale} />
        </div>
      </div>
    </header>
  );
}
