'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PartnershipModal } from '@/app/components/PartnershipModal';
import { useConfig } from '@/app/lib/useConfig';

export function Footer() {
  const t = useTranslations('Footer');
  const { config } = useConfig();
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

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
    { href: '/for-whom', label: t('navForWhom') },
    { href: '/benefits', label: t('navWhyBananay') },
    { href: '/under-construction', label: t('navWhyPlatform') },
    { href: '/how-it-works', label: t('navHowItWorks') },
    { href: '/under-construction', label: t('navApps') },
    { href: '/under-construction', label: t('navAbout') },
  ];

  return (
    <>
      <footer id="contacts" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr_1fr]">
          {/* Column 1: Brand + CTA */}
          <div>
            <Image
              src="/bananay-logo-transparent.png"
              alt="Bananay"
              width={160}
              height={48}
              className="h-11 w-auto object-contain"
              unoptimized
            />
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-slate-700">
              {t('taglineBefore')}
              <span className="font-semibold text-slate-900">{t('taglineBold')}</span>
              {t('taglineAfter')}
            </p>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">{t('platformTitle')}</h3>
            <ul className="mt-4 space-y-2.5">
              {platformItems.map((item) => (
                <li key={item.label} className="text-[15px] leading-6 text-slate-600">
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
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">{t('appsTitle')}</h3>
            <ul className="mt-4 space-y-2.5">
              {appItems.map((label) => (
                <li key={label}>
                  <Link
                    href="/under-construction"
                    className="text-[15px] leading-6 text-slate-600 hover:text-slate-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Navigation */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">{t('navTitle')}</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={`${href}-${label}`}>
                  <Link href={href} className="text-[15px] leading-6 text-slate-600 hover:text-slate-900">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contacts */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900">{t('contactsTitle')}</h3>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-6 text-slate-600">
              <li>
                <a href={`mailto:${t('email')}`} className="hover:text-slate-900">{t('email')}</a>
              </li>
              <li>
                <span className="text-slate-500">{t('phone')}</span>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setPartnerModalOpen(true)}
                  className="text-[15px] leading-6 text-slate-600 transition hover:text-slate-900"
                >
                  {t('partnership')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center">
          <span className="text-xs text-slate-500">{t('copyright')}</span>
          <span className="flex items-center gap-2 text-xs text-slate-500">
            <Image src="/bananay-icon-transparent.png" alt="" width={20} height={20} className="h-5 w-5 object-contain" unoptimized />
            <span>{t('bottomTagline')}</span>
          </span>
        </div>
      </div>
      </footer>

      {partnerModalOpen && (
        <PartnershipModal isOpen={partnerModalOpen} onClose={() => setPartnerModalOpen(false)} />
      )}
    </>
  );
}
