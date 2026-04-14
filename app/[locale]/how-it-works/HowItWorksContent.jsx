'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';
import { PartnershipModal } from '@/app/components/PartnershipModal';
import { LandingHero } from '@/app/components/landing/LandingHero';
import { LandingFinalCtaSection } from '@/app/components/landing/LandingFinalCtaSection';
import { getAppHref } from '@/app/lib/navigation/url-utils';

const processStepKeys = ['step1', 'step2', 'step3', 'step4'];
const processStepImages = {
  step1: '/step-1.png',
  step2: '/step-2.png',
  step3: '/step-3.png',
  step4: '/step-4.png',
};

export default function HowItWorksContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const t = useTranslations('HowItWorks');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const producerHref = getAppHref(config.appProducerUrl, locale);

  return (
    <div className="page-shell bg-[#f6f7f9]">
      <LandingHero
        imageSrc="/hero_how.png"
        imageClassName="object-cover object-[center_32%]"
        overlayClassName="bg-[linear-gradient(to_right,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.5)_42%,rgba(2,6,23,0.18)_72%,rgba(2,6,23,0)_100%)]"
        label={t('label')}
        title={t('title')}
        text={t('heroText')}
        primaryAction={{
          href: producerHref,
          label: t('heroPrimaryCta'),
          className: 'btn-primary-sm',
        }}
        secondaryAction={{
          href: '/for-whom',
          label: t('heroSecondaryCta'),
          className: 'text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline',
          internal: true,
        }}
      />

      <section className="bg-white">
        <div className="section-container py-10 md:py-12">
          <div className="max-w-3xl">
            <div className="section-eyebrow">{t('transitionLabel')}</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{t('transitionTitle')}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">{t('transitionText')}</p>
          </div>

          <div className="mt-10">
            {['transitionItem1', 'transitionItem2', 'transitionItem3'].map((itemKey, index) => (
              <div
                key={itemKey}
                className="grid items-center gap-3 py-2.5 md:grid-cols-[82px_1fr]"
              >
                <div className="text-[1.75rem] font-bold leading-none tracking-tight text-orange-600">{`0${index + 1}`}</div>
                <h3 className="text-[1.35rem] font-semibold leading-tight tracking-tight text-slate-900 md:text-[1.55rem]">{t(itemKey)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="section-container py-20">
          <div className="mb-12 max-w-2xl">
            <div className="section-eyebrow">{t('processLabel')}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{t('processTitle')}</h2>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute bottom-14 left-[22px] top-14 hidden w-[2px] bg-orange-400 lg:block" />
            {processStepKeys.map((stepKey, index) => (
              <div key={stepKey} className="grid items-center gap-8 py-9 lg:grid-cols-[620px_0.9fr] lg:gap-12">
                <div className="relative pl-16">
                  <div className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600 ring-8 ring-slate-50">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h3 className="max-w-[480px] text-2xl font-semibold leading-tight text-slate-950 md:text-[31px]">
                    {t(`process.${stepKey}.title`)}
                  </h3>
                  <p className="mt-4 max-w-[500px] text-lg leading-8 text-slate-700">{t(`process.${stepKey}.text`)}</p>
                </div>

                <Image
                  src={processStepImages[stepKey]}
                  alt=""
                  width={900}
                  height={560}
                  className="landing-edge-fade h-[250px] w-full object-cover opacity-90 saturate-[.56] contrast-[.9] brightness-[.96]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingFinalCtaSection
        label={t('nextStepLabel')}
        title={t('nextStepTitle')}
        text={t('nextStepText')}
        primaryAction={{
          href: producerHref,
          label: t('nextStepPrimaryCta'),
          className: 'btn-dark',
        }}
        secondaryAction={{
          kind: 'button',
          onClick: () => setPartnerModalOpen(true),
          label: t('nextStepSecondaryCta'),
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
