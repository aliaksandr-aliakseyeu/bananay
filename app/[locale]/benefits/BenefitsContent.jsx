'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';
import { PartnershipModal } from '@/app/components/PartnershipModal';
import { LandingHero } from '@/app/components/landing/LandingHero';
import { LandingFinalCtaSection } from '@/app/components/landing/LandingFinalCtaSection';
import { getAppHref } from '@/app/lib/navigation/url-utils';

const primaryBenefitRows = [
  { number: '01', key: 'fixedPrice' },
  { number: '02', key: 'transparentCalculation' },
  { number: '03', key: 'singlePlatform' },
  { number: '04', key: 'dailyFoodLogistics' },
];

const supportingBenefitRows = [
  { number: '05', key: 'fromOneUnit' },
  { number: '06', key: 'addressSorting' },
  { number: '07', key: 'strictSchedule' },
  { number: '08', key: 'electronicDocs' },
];

const producerPointKeys = ['noOwnFleet', 'easierEconomics', 'lessManualOps', 'easierScaling'];

export default function BenefitsContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const t = useTranslations('Benefits');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const producerHref = getAppHref(config.appProducerUrl, locale);

  return (
    <div className="page-shell bg-[#f6f7f9]">
      <LandingHero
        imageSrc="/hero_benefits.png"
        imageClassName="object-cover object-[68%_10%] md:object-[64%_12%]"
        overlayClassName="bg-[linear-gradient(to_right,rgba(2,6,23,0.8)_0%,rgba(2,6,23,0.58)_45%,rgba(2,6,23,0.2)_75%,rgba(2,6,23,0)_100%)]"
        label={t('label')}
        title={t('heroTitle')}
        text={t('heroText')}
        contentClassName="max-w-[42rem]"
        titleClassName="text-3xl font-semibold leading-[1.04] tracking-tight text-white md:text-[3.2rem]"
        textClassName="mt-4 max-w-xl text-base leading-7 text-white/90"
        primaryAction={{
          href: producerHref,
          label: t('heroPrimaryCta'),
          className: 'btn-primary-sm',
        }}
        secondaryAction={{
          href: '/how-it-works',
          label: t('heroSecondaryCta'),
          className: 'text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline',
          internal: true,
        }}
      />

      <section className="bg-white">
        <div className="section-container py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="section-eyebrow">{t('allBenefitsLabel')}</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {t('allBenefitsTitle')}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{t('allBenefitsText')}</p>
          </div>

          <div className="mt-10">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t('primaryBenefitsLabel')}
            </div>
            <div className="border-t border-slate-200">
              {primaryBenefitRows.map((item, index) => (
                <div
                  key={item.number}
                  className={`grid gap-5 border-b border-slate-200 py-8 md:grid-cols-[80px_1fr] ${index === 0 ? 'bg-white/70' : ''}`}
                >
                  <div className="text-3xl font-semibold leading-none text-orange-500">{item.number}</div>
                  <div>
                    <h3 className={`${index === 0 ? 'text-3xl md:text-[2rem]' : 'text-[1.72rem]'} font-semibold leading-tight tracking-tight`}>
                      {t(`items.${item.key}.title`)}
                    </h3>
                    <p className="mt-3 max-w-3xl text-[17px] leading-8 text-slate-700">{t(`items.${item.key}.text`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="section-eyebrow mb-4 tracking-[0.18em]">
              {t('supportingBenefitsLabel')}
            </div>
            <div className="border-t border-slate-200">
              {supportingBenefitRows.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 border-b border-slate-200 py-7 md:grid-cols-[80px_1fr]"
              >
                <div className="text-3xl font-semibold leading-none text-orange-500">{item.number}</div>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                    {t(`items.${item.key}.title`)}
                  </h3>
                  <p className="mt-3 max-w-3xl text-[17px] leading-8 text-slate-700">{t(`items.${item.key}.text`)}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 top-0 w-full max-w-7xl -translate-x-1/2 overflow-hidden px-6">
            <Image
              src="/distrbution-benefits.png"
              alt=""
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-[right_30%] translate-x-[120px]"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgb(248_250_252)_0%,rgb(248_250_252)_34%,rgba(248,250,252,0.55)_52%,rgba(248,250,252,0.18)_66%,rgb(248_250_252)_100%)]"
              aria-hidden
            />
          </div>
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <div className="section-eyebrow">{t('producerSectionLabel')}</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-[2.75rem]">
              {t('producerSectionTitle')}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">{t('producerSectionText')}</p>

            <div className="mt-9 grid gap-5">
              {producerPointKeys.map((key) => (
                <div key={key} className="flex items-start gap-3.5">
                  <div className="mt-[0.6rem] h-3 w-3 rounded-full bg-orange-500" />
                  <p className="text-lg font-medium leading-8 text-slate-800">{t(`producerPoints.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LandingFinalCtaSection
        label={t('finalCtaLabel')}
        title={t('finalCtaTitle')}
        text={t('finalCtaText')}
        primaryAction={{
          href: producerHref,
          label: t('finalCtaPrimary'),
          className: 'btn-dark',
        }}
        secondaryAction={{
          kind: 'button',
          onClick: () => setPartnerModalOpen(true),
          label: t('finalCtaSecondary'),
          className: 'btn-secondary',
        }}
      />

      {partnerModalOpen && (
        <PartnershipModal
          isOpen={partnerModalOpen}
          onClose={() => setPartnerModalOpen(false)}
          apiUrl={config.apiUrl}
        />
      )}
    </div>
  );
}
