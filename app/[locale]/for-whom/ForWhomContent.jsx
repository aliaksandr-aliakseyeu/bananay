'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';
import { PartnershipModal } from '@/app/components/PartnershipModal';
import { LandingHero } from '@/app/components/landing/LandingHero';
import { LandingFinalCtaSection } from '@/app/components/landing/LandingFinalCtaSection';
import { getAppHref, getLinkTargetProps } from '@/app/lib/navigation/url-utils';
import Image from 'next/image';

export default function ForWhomContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const t = useTranslations('ForWhom');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const producerHref = getAppHref(config.appProducerUrl, locale);

  const participantBlocks = [
    {
      step: '01',
      kicker: t('role1Kicker'),
      title: t('role1Title'),
      action: t('role1Action'),
      fits: t('role1Fits'),
      gets: t('role1Gets'),
      href: getAppHref(config.appProducerUrl, locale),
      cta: t('role1Cta'),
      image: '/producer.png',
      reverse: false,
    },
    {
      step: '02',
      kicker: t('role2Kicker'),
      title: t('role2Title'),
      action: t('role2Action'),
      fits: t('role2Fits'),
      gets: t('role2Gets'),
      href: getAppHref(config.appTruckUrl, locale),
      cta: t('role2Cta'),
      image: '/driver.png',
      reverse: true,
    },
    {
      step: '03',
      kicker: t('role3Kicker'),
      title: t('role3Title'),
      action: t('role3Action'),
      fits: t('role3Fits'),
      gets: t('role3Gets'),
      href: getAppHref(config.appHubUrl, locale),
      cta: t('role3Cta'),
      image: '/dc.png',
      reverse: false,
    },
    {
      step: '04',
      kicker: t('role4Kicker'),
      title: t('role4Title'),
      action: t('role4Action'),
      fits: t('role4Fits'),
      gets: t('role4Gets'),
      href: getAppHref(config.appCourierUrl, locale),
      cta: t('role4Cta'),
      image: '/courier.png',
      reverse: true,
    },
  ];

  return (
    <div className="page-shell bg-[#f6f7f9]">
      <LandingHero
        imageSrc="/hero_for_whom.png"
        imageClassName="object-cover object-[center_18%]"
        overlayClassName="bg-[linear-gradient(to_right,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.5)_42%,rgba(2,6,23,0.18)_72%,rgba(2,6,23,0)_100%)]"
        label={t('label')}
        title={t('heroTitle')}
        text={t('heroText')}
        primaryAction={{
          href: producerHref,
          label: t('cta'),
          className: 'btn-primary-sm',
        }}
        secondaryAction={{
          href: '/how-it-works',
          label: t('secondaryCta'),
          className: 'text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline',
          internal: true,
        }}
      />

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="section-container py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t('participantsTitle')}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {t('participantsText')}
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {participantBlocks.map((item) => (
              <div
                key={item.step}
                className={`grid items-center gap-10 ${item.reverse ? 'lg:grid-cols-[0.95fr_1.05fr]' : 'lg:grid-cols-[1.05fr_0.95fr]'}`}
              >
                <div className={item.reverse ? 'order-1 lg:order-2' : ''}>
                  <div className="text-base font-extrabold tracking-[0.22em] text-orange-500 md:text-lg">{item.step}</div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-600">{item.kicker}</div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-[2rem]">{item.title}</h3>
                  <p className="mt-4 max-w-2xl text-[17px] leading-7 text-slate-700">{item.action}</p>
                  <p className="mt-1 max-w-2xl text-[17px] leading-7 text-slate-700">{item.fits}</p>
                  <p className="mt-3 max-w-2xl text-[15px] font-semibold text-slate-900">
                    {t('getsLabel')} {item.gets}
                  </p>
                  <a
                    href={item.href}
                    {...getLinkTargetProps(item.href)}
                    className="mt-4 inline-flex items-center gap-1 text-[15px] font-semibold text-slate-900 underline decoration-slate-500 underline-offset-4 transition hover:text-black hover:decoration-slate-800"
                  >
                    {item.cta}
                    <span aria-hidden>→</span>
                  </a>
                </div>

                <div className={item.reverse ? 'order-2 lg:order-1' : ''}>
                  <Image
                    src={item.image}
                    alt=""
                    width={900}
                    height={560}
                    className="landing-edge-fade h-[280px] w-full object-cover saturate-[.72] contrast-[.94]"
                  />
                </div>
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

