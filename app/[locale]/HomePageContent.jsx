'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { RegionMapClient } from '@/app/components/RegionMapClient';
import { useConfig } from '@/app/lib/useConfig';

export default function HomePageContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const tHero = useTranslations('Hero');
  const tQuickStart = useTranslations('QuickStart');
  const tEconomics = useTranslations('Economics');
  const tValue = useTranslations('Value');
  const tMapBlock = useTranslations('MapBlock');
  const valueItems = tValue.raw('items');

  return (
    <div className="min-h-screen bg-white text-slate-900">
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
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="block">{tHero('titleLine1')}</span>
            <span className="block">{tHero('titleLine2')}</span>
          </h1>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={config.appProducerUrl?.trim() || `/${locale}/under-construction`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex min-w-[19rem] items-center justify-center"
            >
              {tHero('cta')}
            </a>
            <p className="text-sm font-medium text-white/80 md:text-base">{tHero('ctaHint')}</p>
          </div>
        </div>
      </section>

      <section id="map" className="bg-white py-[4rem]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-xl">
              <h2 className="section-heading max-w-lg">
                {tMapBlock('title')}
              </h2>
              <p className="mt-4 max-w-lg text-xl leading-8 text-slate-700">{tMapBlock('label')}</p>
              <p className="mt-1 max-w-md text-base leading-7 text-slate-500">{tMapBlock('subtitle')}</p>
              <div className="mt-10 flex justify-start">
                <a
                  href={config.appProducerUrl?.trim() || `/${locale}/under-construction`}
                  target="_blank"
                  rel="noopener noreferrer"
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
              className="absolute inset-0 bg-[linear-gradient(to_right,rgb(248_250_252)_0%,rgb(248_250_252)_34%,rgba(248,250,252,0.55)_52%,rgba(248,250,252,0.18)_66%,rgb(248_250_252)_100%)]"
              aria-hidden
            />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-3xl">
            <h2 className="section-heading">
              <span className="block">{tEconomics('title')}</span>
              <span className="mt-1 block">{tEconomics('titleAccent')}</span>
            </h2>
          </div>
          <div className="grid max-w-3xl gap-2.5">
            {valueItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-1">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-200 text-orange-600 shadow-[0_5px_14px_rgba(251,146,60,0.22)]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="text-[1.4rem] font-semibold leading-[1.8] tracking-tight text-slate-900">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quick-start" className="bg-white py-[4rem]">
        <div className="mx-auto max-w-7xl px-6">
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

    </div>
  );
}
