'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { RegionMapClient } from '@/app/components/RegionMapClient';
import { PartnershipModal } from '@/app/components/PartnershipModal';

const stepKeys = ['producer', 'truck', 'hub', 'courier', 'tracking'];

const stepIcons = {
  producer: (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v10l9 4 9-4V7" />
    </svg>
  ),
  truck: (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="7" width="15" height="10" />
      <path d="M16 11h4l3 3v3h-7z" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
    </svg>
  ),
  hub: (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10h18" />
      <path d="M5 10v8" />
      <path d="M19 10v8" />
      <rect x="3" y="3" width="18" height="7" />
    </svg>
  ),
  courier: (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="8" width="13" height="8" />
      <path d="M15 10h4l3 3v3h-7z" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  ),
  tracking: (
    <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2C7 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-3-8-8-8z" />
    </svg>
  ),
};

const appIcons = {
  producer: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v10l9 4 9-4V7" />
    </svg>
  ),
  truck: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="7" width="15" height="10" />
      <path d="M16 11h4l3 3v3h-7z" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
    </svg>
  ),
  hub: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10h18" />
      <path d="M5 10v8" />
      <path d="M19 10v8" />
      <rect x="3" y="3" width="18" height="7" />
    </svg>
  ),
  courier: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="8" width="13" height="8" />
      <path d="M15 10h4l3 3v3h-7z" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  ),
  tracking: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2C7 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-3-8-8-8z" />
    </svg>
  ),
};

const appAccents = ['blue', 'orange', 'purple', 'green', 'slate'];

export default function HomePageContent() {
  const locale = useLocale();
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const tHero = useTranslations('Hero');
  const tValue = useTranslations('Value');
  const tHow = useTranslations('HowItWorks');
  const tSteps = useTranslations('Steps');
  const tApps = useTranslations('Apps');
  const tRegion = useTranslations('Region');
  const tCTA = useTranslations('CTA');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero_bg.png"
            alt="Local logistics and delivery operations"
            fill
            className="object-cover object-[50%_35%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/35" />
          <div className="hero-accent" aria-hidden="true">
            <span className="hero-accent__glow" />
            <span className="hero-accent__line hero-accent__line--1" />
            <span className="hero-accent__line hero-accent__line--2" />
          </div>
        </div>

        <div className="relative mx-auto grid min-h-[58vh] max-w-7xl gap-10 px-6 py-10 text-white md:grid-cols-[1.1fr_0.9fr] md:items-start md:py-12">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              {tHero('badge')}
            </div>

            <h1 className="mt-2 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              {tHero('title1')}
              <br />
              {tHero('title2')}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
              {tHero('subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#how-it-works"
                className="rounded-2xl bg-orange-500 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-orange-950/20"
              >
                {tHero('ctaHow')}
              </a>
              <a
                href="#apps"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-center text-base font-medium text-white backdrop-blur-sm"
              >
                {tHero('ctaJoin')}
              </a>
            </div>
          </div>

          <div className="grid gap-4 pt-[3.5rem] md:pt-[3.5rem]">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="text-sm font-medium text-white/70">{tHero('promiseTitle')}</div>
              <div className="mt-3 text-2xl font-semibold tracking-tight">{tHero('promiseHead')}</div>
              <p className="mt-3 text-sm leading-6 text-white/80">{tHero('promiseText')}</p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-slate-950/50 p-6 backdrop-blur-md">
              <div className="text-sm font-medium text-white/70">{tHero('regionTitle')}</div>
              <div className="mt-2 text-2xl font-semibold">{tHero('regionHead')}</div>
              <div className="mt-4 rounded-2xl bg-white/10 p-4 text-sm text-white/85">{tHero('regionText')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{tValue('label')}</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{tValue('title')}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{tValue('text')}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-base font-medium leading-7 text-slate-800">{tValue(`items.${i}`)}</div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{tHow('label')}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{tHow('title')}</h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {stepKeys.map((key, index) => (
              <div key={key} className="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {tHow('step')} {index + 1}
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600">
                    {index + 1}
                  </div>
                </div>
                <div className="mt-5 flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                    {stepIcons[key]}
                  </div>
                  <div className="min-w-0 break-words text-2xl font-semibold tracking-tight">{tSteps(`${key}.title`)}</div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{tSteps(`${key}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{tApps('label')}</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{tApps('title')}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{tApps('text')}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {stepKeys.map((key, i) => {
            const accent = appAccents[i];
            const appUrl =
              {
                producer: process.env.NEXT_PUBLIC_APP_PRODUCER_URL,
                truck: process.env.NEXT_PUBLIC_APP_TRUCK_URL,
                hub: process.env.NEXT_PUBLIC_APP_HUB_URL,
                courier: process.env.NEXT_PUBLIC_APP_COURIER_URL,
                tracking: process.env.NEXT_PUBLIC_APP_TRACKING_URL,
              }[key];
            const appHref = appUrl?.trim() ? appUrl : `/${locale}/under-construction`;
            const borderClass = {
              blue: 'border-t-blue-500',
              orange: 'border-t-orange-500',
              purple: 'border-t-violet-500',
              green: 'border-t-emerald-500',
              slate: 'border-t-slate-700',
            }[accent];
            const iconBoxClass = {
              blue: 'bg-blue-100 text-blue-500',
              orange: 'bg-orange-100 text-orange-500',
              purple: 'bg-violet-100 text-violet-500',
              green: 'bg-emerald-100 text-emerald-500',
              slate: 'bg-slate-100 text-slate-700',
            }[accent];
            return (
              <a
                key={key}
                href={appHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-3xl border border-slate-200 border-t-4 bg-white p-6 shadow-sm transition duration-200 hover:shadow-lg ${borderClass}`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBoxClass}`}>
                  {appIcons[key]}
                </div>
                <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  {tApps(`${key}.label`)}
                </span>
                <div className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{tApps(`${key}.title`)}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{tApps(`${key}.text`)}</p>
              </a>
            );
          })}
        </div>
        </div>
      </section>

      <section id="region" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{tRegion('label')}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{tRegion('title')}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{tRegion('text')}</p>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-sm font-medium text-slate-500">{tRegion('suggested')}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['sochi', 'adler', 'dagomys', 'khosta', 'krasnayaPolyana'].map((cityKey) => (
                  <span key={cityKey} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {tRegion(`cities.${cityKey}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden">
              <RegionMapClient height="100%" className="h-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-white md:px-12 md:py-16">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{tCTA('label')}</div>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{tCTA('title')}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{tCTA('text')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={process.env.NEXT_PUBLIC_APP_PRODUCER_URL?.trim() || `/${locale}/under-construction`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-orange-500 px-6 py-3 text-center font-medium text-white"
              >
                {tCTA('startShipping')}
              </a>
              <button
                type="button"
                onClick={() => setPartnerModalOpen(true)}
                className="rounded-2xl border border-slate-700 px-6 py-3 text-center font-medium text-white"
              >
                {tCTA('partnership')}
              </button>
            </div>
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
