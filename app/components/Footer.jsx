'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PartnershipModal } from '@/app/components/PartnershipModal';
import { FooterLinkColumn } from '@/app/components/footer/FooterLinkColumn';
import { FooterContactsColumn } from '@/app/components/footer/FooterContactsColumn';
import { useConfig } from '@/app/lib/useConfig';
import {
  getFooterAppItems,
  getFooterNavLinks,
  getFooterPlatformItems,
} from '@/app/lib/navigation/footer-links';

export function Footer() {
  const t = useTranslations('Footer');
  const { config } = useConfig();
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const platformItems = getFooterPlatformItems(t, config);
  const appItems = getFooterAppItems(t);
  const navLinks = getFooterNavLinks(t);
  const mobileAboutLinks = [
    { href: '/for-whom', label: t('navForWhom') },
    { href: '/benefits', label: t('navWhyBananay') },
    { href: '/under-construction', label: t('navWhyPlatform') },
    { href: '/how-it-works', label: t('navHowItWorks') },
    { href: '/under-construction', label: t('navAbout') },
  ];
  const mobilePlatformItems = [
    { label: t('platformProducers'), externalUrl: config.appProducerUrl?.trim() || null },
    { label: t('platformDrivers'), externalUrl: config.appTruckUrl?.trim() || null },
    { label: t('platformHubs'), externalUrl: config.appHubUrl?.trim() || null },
    { label: t('mobilePlatformCouriers'), externalUrl: config.appCourierUrl?.trim() || null },
    { label: t('platformDeliveryPoints'), externalUrl: config.appTrackingUrl?.trim() || null },
  ];
  const mobileAppItems = [
    { label: t('appProducer'), href: '/under-construction' },
    { label: t('appDriver'), href: '/under-construction' },
    { label: t('mobileAppHub'), href: '/under-construction' },
    { label: t('appCourier'), href: '/under-construction' },
  ];

  const renderFooterItem = (item) => {
    if (item.externalUrl) {
      return (
        <a
          href={item.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] leading-6 text-slate-600 hover:text-slate-900"
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link href={item.href || '/under-construction'} className="text-[15px] leading-6 text-slate-600 hover:text-slate-900">
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <footer id="contacts" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="lg:hidden">
            <div>
              <Image
                src="/bananay-logo-transparent.png"
                alt="Bananay"
                width={160}
                height={48}
                className="h-11 w-auto object-contain"
                unoptimized
              />
              <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-700">
                {t('taglineBefore')}
                <span className="font-semibold text-slate-900">{t('taglineBold')}</span>
                {t('taglineAfter')}
              </p>
            </div>

            <div className="mt-7 space-y-1">
              <details className="group border-b border-slate-200 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1.5 text-lg font-semibold tracking-tight text-slate-900">
                  <span>{t('platformTitle')}</span>
                  <svg className="h-5 w-5 text-slate-500 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <ul className="pb-2 pt-2 space-y-2">
                  {mobilePlatformItems.map((item) => (
                    <li key={`mobile-platform-${item.label}`}>{renderFooterItem(item)}</li>
                  ))}
                </ul>
              </details>

              <details className="group border-b border-slate-200 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1.5 text-lg font-semibold tracking-tight text-slate-900">
                  <span>{t('appsTitle')}</span>
                  <svg className="h-5 w-5 text-slate-500 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <ul className="pb-2 pt-2 space-y-2">
                  {mobileAppItems.map((item) => (
                    <li key={`mobile-app-${item.label}`}>{renderFooterItem(item)}</li>
                  ))}
                </ul>
              </details>

              <details className="group border-b border-slate-200 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between py-1.5 text-lg font-semibold tracking-tight text-slate-900">
                  <span>{t('mobileAboutTitle')}</span>
                  <svg className="h-5 w-5 text-slate-500 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <ul className="pb-2 pt-2 space-y-2">
                  {mobileAboutLinks.map((item) => (
                    <li key={`mobile-about-${item.label}`}>{renderFooterItem(item)}</li>
                  ))}
                </ul>
              </details>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">{t('contactsTitle')}</h3>
              <ul className="mt-3 space-y-2.5 text-[15px] leading-6 text-slate-600">
                <li>
                  <a href={`mailto:${t('email')}`} className="hover:text-slate-900">
                    {t('email')}
                  </a>
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

            <div className="mt-8 border-t border-slate-200 pt-4">
              <span className="block text-xs text-slate-500">{t('copyright')}</span>
              <span className="mt-2 block text-xs text-slate-500">{t('bottomTagline')}</span>
            </div>
          </div>

          <div className="hidden gap-8 lg:grid lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr_1fr]">
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

            <FooterLinkColumn title={t('platformTitle')} items={platformItems} />
            <FooterLinkColumn title={t('appsTitle')} items={appItems} />
            <FooterLinkColumn title={t('navTitle')} items={navLinks} />
            <FooterContactsColumn t={t} onOpenPartnership={() => setPartnerModalOpen(true)} />

            <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center">
              <span className="text-xs text-slate-500">{t('copyright')}</span>
              <span className="flex items-center gap-2 text-xs text-slate-500">
                <Image
                  src="/bananay-icon-transparent.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                  unoptimized
                />
                <span>{t('bottomTagline')}</span>
              </span>
            </div>
          </div>
        </div>
      </footer>

      {partnerModalOpen && (
        <PartnershipModal isOpen={partnerModalOpen} onClose={() => setPartnerModalOpen(false)} />
      )}
    </>
  );
}
