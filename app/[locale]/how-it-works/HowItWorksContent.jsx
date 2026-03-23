'use client';

import { useTranslations } from 'next-intl';

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

export default function HowItWorksContent() {
  const tHow = useTranslations('HowItWorks');
  const tSteps = useTranslations('Steps');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{tHow('label')}</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{tHow('title')}</h1>
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
    </div>
  );
}
