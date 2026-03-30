'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';
import { PartnershipModal } from '@/app/components/PartnershipModal';

export default function ForWhomContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const t = useTranslations('ForWhom');
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const edgeFadeClass = '[mask-image:linear-gradient(to_right,_transparent_0%,_black_10%,_black_90%,_transparent_100%)]';

  const getRoleHref = (url) => url?.trim() || `/${locale}/under-construction`;

  const participantBlocks = [
    {
      step: '01',
      kicker: t('role1Kicker'),
      title: t('role1Title'),
      action: t('role1Action'),
      fits: t('role1Fits'),
      gets: t('role1Gets'),
      href: getRoleHref(config.appProducerUrl),
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
      href: getRoleHref(config.appTruckUrl),
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
      href: getRoleHref(config.appHubUrl),
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
      href: getRoleHref(config.appCourierUrl),
      cta: t('role4Cta'),
      image: '/courier.png',
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-slate-900">
      <section className="relative h-[56vh] min-h-[360px] overflow-hidden">
          <Image
            src="/hero_for_whom.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.5)_42%,rgba(2,6,23,0.18)_72%,rgba(2,6,23,0)_100%)]" />

          <div className="relative z-10 flex h-full items-center py-8">
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="max-w-2xl">
              <div className="mb-5 text-sm uppercase tracking-[0.2em] text-white/80">{t('label')}</div>
              <h1 className="text-3xl font-semibold leading-[1.02] tracking-tight text-white md:text-5xl">
                {t('heroTitle')}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/90 md:text-lg">
                {t('heroText')}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href={config.appProducerUrl?.trim() || `/${locale}/under-construction`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-sm"
                >
                  {t('cta')}
                </a>
                <a
                  href={`/${locale}/how-it-works`}
                  className="text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline"
                >
                  {t('secondaryCta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
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
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                    className={`h-[280px] w-full object-cover saturate-[.72] contrast-[.94] ${edgeFadeClass}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl py-2">
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-500">{t('nextStepLabel')}</div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              {t('nextStepTitle')}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t('nextStepText')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={config.appProducerUrl?.trim() || `/${locale}/under-construction`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white"
              >
                {t('nextStepPrimaryCta')}
              </a>
              <button
                type="button"
                onClick={() => setPartnerModalOpen(true)}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                {t('nextStepSecondaryCta')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {partnerModalOpen && (
        <PartnershipModal isOpen={partnerModalOpen} onClose={() => setPartnerModalOpen(false)} />
      )}
    </div>
  );
}

