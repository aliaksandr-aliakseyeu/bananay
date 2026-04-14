'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PartnershipModal } from '@/app/components/PartnershipModal';
import { FooterLinkColumn } from '@/app/components/footer/FooterLinkColumn';
import { FooterContactsColumn } from '@/app/components/footer/FooterContactsColumn';
import { FooterMobileSection } from '@/app/components/footer/FooterMobileSection';
import { useConfig } from '@/app/lib/useConfig';
import {
  getFooterAppItems,
  getFooterMobileAboutLinks,
  getFooterMobileAppItems,
  getFooterMobilePlatformItems,
  getFooterNavLinks,
  getFooterPlatformItems,
} from '@/app/lib/navigation/footer-links';

export function Footer() {
  const t = useTranslations('Footer');
  const { config } = useConfig();
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const footerBottomText = t('copyright');

  const platformItems = getFooterPlatformItems(t, config);
  const appItems = getFooterAppItems(t);
  const navLinks = getFooterNavLinks(t);
  const mobileAboutLinks = getFooterMobileAboutLinks(t);
  const mobilePlatformItems = getFooterMobilePlatformItems(t, config);
  const mobileAppItems = getFooterMobileAppItems(t);

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
              <FooterMobileSection title={t('platformTitle')} items={mobilePlatformItems} renderItem={renderFooterItem} />
              <FooterMobileSection title={t('appsTitle')} items={mobileAppItems} renderItem={renderFooterItem} />
              <FooterMobileSection title={t('mobileAboutTitle')} items={mobileAboutLinks} renderItem={renderFooterItem} />
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

          </div>

          <div className="mt-6 border-t border-slate-200/80 pt-3 text-xs text-slate-400">
            <div>{footerBottomText}</div>
          </div>
        </div>
      </footer>

      {partnerModalOpen && (
        <PartnershipModal
          isOpen={partnerModalOpen}
          onClose={() => setPartnerModalOpen(false)}
          apiUrl={config.apiUrl}
        />
      )}
    </>
  );
}
