'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useConfig } from '@/app/lib/useConfig';

export function Footer() {
  const t = useTranslations('Footer');
  const { config } = useConfig();

  const platformItems = [
    { label: t('platformProducers'), url: config.appProducerUrl?.trim() || null },
    { label: t('platformDrivers'), url: config.appTruckUrl?.trim() || null },
    { label: t('platformHubs'), url: config.appHubUrl?.trim() || null },
    { label: t('platformCouriers'), url: config.appCourierUrl?.trim() || null },
    { label: t('platformDeliveryPoints'), url: null },
  ];

  const appItems = [
    t('appProducer'),
    t('appDriver'),
    t('appHub'),
    t('appCourier'),
  ];

  const navLinks = [
    { href: '#who-we-are', label: t('navAbout') },
    { href: '#for-whom', label: t('navForWhom') },
    { href: '#benefits', label: t('navWhyBananay') },
    { href: '#how-it-works', label: t('navHowItWorks') },
    { href: '#apps', label: t('navApps') },
    { href: '#region', label: t('navRegion') },
    { href: '#cta', label: t('navContact') },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr_1fr]">
          {/* Column 1: Brand + CTA */}
          <div>
            <Image
              src="/bananay-logo-transparent.png"
              alt="Bananay"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              unoptimized
            />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              {t('taglineBefore')}
              <span className="font-semibold text-slate-800">{t('taglineBold')}</span>
              {t('taglineAfter')}
            </p>
            {config.appProducerUrl?.trim() ? (
              <a
                href={config.appProducerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
              >
                {t('ctaButton')}
              </a>
            ) : (
              <Link
                href="/under-construction"
                className="mt-6 inline-flex rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
              >
                {t('ctaButton')}
              </Link>
            )}
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{t('platformTitle')}</h3>
            <ul className="mt-4 space-y-3">
              {platformItems.map((item) => (
                <li key={item.label} className="text-sm text-slate-600">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-900"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href="/under-construction" className="hover:text-slate-900">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Applications */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{t('appsTitle')}</h3>
            <ul className="mt-4 space-y-3">
              {appItems.map((label) => (
                <li key={label}>
                  <Link
                    href="/under-construction"
                    className="text-sm text-slate-600 hover:text-slate-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{t('navTitle')}</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={`/${href}`} className="text-sm text-slate-600 hover:text-slate-900">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contacts */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{t('contactsTitle')}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href={`mailto:${t('email')}`} className="hover:text-slate-900">{t('email')}</a>
              </li>
              <li>
                <span className="text-slate-500">{t('phone')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <span className="text-xs text-slate-500">{t('copyright')}</span>
          <span className="hidden text-slate-300 sm:inline">|</span>
          <span className="flex items-center gap-2 text-xs text-slate-500">
            <Image src="/bananay-icon-transparent.png" alt="" width={20} height={20} className="h-5 w-5 object-contain" unoptimized />
            <span>{t('bottomTagline')}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
