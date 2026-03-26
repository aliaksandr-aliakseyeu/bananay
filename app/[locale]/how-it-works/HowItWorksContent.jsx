'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';
import { PartnershipModal } from '@/app/components/PartnershipModal';

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
  const edgeFadeClass = '[mask-image:linear-gradient(to_right,_transparent_0%,_black_10%,_black_90%,_transparent_100%)]';

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-slate-900">
      <section className="relative h-[56vh] min-h-[360px] overflow-hidden">
        <Image
          src="/hero_how.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.5)_42%,rgba(2,6,23,0.18)_72%,rgba(2,6,23,0)_100%)]" />

        <div className="relative z-10 flex h-full items-center py-8">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl">
              <div className="mb-5 text-sm uppercase tracking-[0.2em] text-white/80">{t('label')}</div>
              <h1 className="text-3xl font-semibold leading-[1.02] tracking-tight text-white md:text-5xl">
                {t('title')}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/90 md:text-lg">{t('heroText')}</p>
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <a
                  href={config.appProducerUrl?.trim() || `/${locale}/under-construction`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-sm"
                >
                  {t('heroPrimaryCta')}
                </a>
                <a
                  href={`/${locale}/for-whom`}
                  className="text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline"
                >
                  {t('heroSecondaryCta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t('transitionLabel')}</div>
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

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t('processLabel')}</div>
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
                  className={`h-[250px] w-full object-cover opacity-90 saturate-[.56] contrast-[.9] brightness-[.96] ${edgeFadeClass}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl py-2">
            <div className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-500">{t('nextStepLabel')}</div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
              {t('nextStepTitle')}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">{t('nextStepText')}</p>
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
