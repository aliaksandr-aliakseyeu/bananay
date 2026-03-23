'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';

const stepKeys = ['producer', 'truck', 'hub', 'courier', 'tracking'];
const appAccents = ['blue', 'orange', 'purple', 'green', 'slate'];

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

export default function AppsContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const t = useTranslations('Apps');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t('label')}</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{t('title')}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t('text')}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {stepKeys.map((key, i) => {
              const accent = appAccents[i];
              const appUrl = {
                producer: config.appProducerUrl,
                truck: config.appTruckUrl,
                hub: config.appHubUrl,
                courier: config.appCourierUrl,
                tracking: config.appTrackingUrl,
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
                    {t(`${key}.label`)}
                  </span>
                  <div className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{t(`${key}.title`)}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{t(`${key}.text`)}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
