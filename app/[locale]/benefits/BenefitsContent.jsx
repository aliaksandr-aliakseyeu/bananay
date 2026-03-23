'use client';

import { useTranslations } from 'next-intl';

const benefitKeys = ['fromOneUnit', 'fixedPrice', 'strictSchedule', 'onTimeDelivery', 'cargoSafety', 'addressSorting', 'electronicDocs', 'noIntermediaries'];

export default function BenefitsContent() {
  const t = useTranslations('Benefits');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t('label')}</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{t('title')}</h1>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {benefitKeys.map((key) => (
              <div key={key} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold text-slate-900">{t(`items.${key}.title`)}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{t(`items.${key}.text`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
