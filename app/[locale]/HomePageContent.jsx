'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { RegionMapClient } from '@/app/components/RegionMapClient';
import { TrialDeliveryModal } from '@/app/components/TrialDeliveryModal';
import { useConfig } from '@/app/lib/useConfig';
import { getAppHref, getLinkTargetProps } from '@/app/lib/navigation/url-utils';

export default function HomePageContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const tHero = useTranslations('Hero');
  const tQuickStart = useTranslations('QuickStart');
  const tEconomics = useTranslations('Economics');
  const tMapBlock = useTranslations('MapBlock');
  const economicsItems = tEconomics.raw('items');
  const producerHref = getAppHref(config.appProducerUrl, locale);

  return (
    <div className="page-shell bg-white">
      <section id="who-we-are" className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero_bg.png"
            alt="Local logistics and delivery operations"
            fill
            className="object-cover object-[50%_35%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>

        <div className="relative px-6 text-center text-white">
          <h1 className="text-4xl/[1.12] font-semibold tracking-tight md:text-5xl/[1.12] lg:text-6xl/[1.12]">
            <span className="block">{tHero('titleLine1')}</span>
            <span className="block md:mt-1.5">{tHero('titleLine2')}</span>
          </h1>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={producerHref}
              {...getLinkTargetProps(producerHref)}
              className="btn-primary inline-flex min-w-[19rem] items-center justify-center"
            >
              {tHero('cta')}
            </a>
          </div>
        </div>
      </section>

      <section id="map" className="bg-white py-[4rem]">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-xl">
              <h2 className="section-heading max-w-lg">
                {tMapBlock('title')}
              </h2>
              <p className="mt-4 max-w-lg text-xl leading-8 text-slate-700">{tMapBlock('label')}</p>
              <p className="mt-1 max-w-md text-base leading-7 text-slate-500">{tMapBlock('subtitle')}</p>
              <div className="mt-10 flex justify-start">
                <a
                  href={producerHref}
                  {...getLinkTargetProps(producerHref)}
                  className="btn-primary"
                >
                  {tMapBlock('cta')}
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
              <RegionMapClient height="420px" className="h-full w-full rounded-[1.4rem]" apiUrl={config.apiUrl} />
            </div>
          </div>
        </div>
      </section>

      <section id="economics" className="relative bg-slate-50 py-[5.25rem]">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 top-0 w-full max-w-7xl -translate-x-1/2 overflow-hidden px-6">
            <Image
              src="/img1.png"
              alt=""
              fill
              className="object-cover object-right translate-x-[120px]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(to_right,rgb(248_250_252)_0%,rgb(248_250_252)_46%,rgba(248,250,252,0.72)_58%,rgba(248,250,252,0.26)_70%,rgb(248_250_252)_100%)]"
              aria-hidden
            />
          </div>
        </div>
        <div className="section-container relative z-10">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-heading">
              <span className="block">{tEconomics('title')}</span>
              <span className="mt-1 block">{tEconomics('titleAccent')}</span>
            </h2>
          </div>
          <div className="grid max-w-2xl gap-2.5">
            {economicsItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-1">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-200 text-orange-600 shadow-[0_5px_14px_rgba(251,146,60,0.22)]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="max-w-[34rem] text-[1.35rem] font-semibold leading-[1.7] tracking-tight text-slate-900">
                  {typeof item === 'string' ? item : item.title}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-2xl">
            <button
              type="button"
              onClick={() => setTrialModalOpen(true)}
              className="btn-primary inline-flex min-w-[18rem] items-center justify-center"
            >
              {tEconomics('cta')}
            </button>
          </div>
        </div>
      </section>

      <section id="quick-start" className="bg-white py-[4rem]">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="section-heading">
              {tQuickStart('title')}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {['01', '02', '03'].map((label, i) => (
              <div key={label} className="max-w-sm">
                <div className="text-4xl font-bold tracking-tight text-orange-500 md:text-5xl">
                  {label}
                </div>
                <div className="mt-5 text-[1.65rem] font-bold leading-tight tracking-tight text-slate-900">
                  {tQuickStart(`steps.${i}.title`)}
                </div>
                <p className="mt-2 max-w-[18rem] text-[15px] leading-6 text-slate-500">
                  {tQuickStart(`steps.${i}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrialDeliveryModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        apiUrl={config.apiUrl}
        tForm={tEconomics}
      />

    </div>
  );
}
