'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';

export default function ForWhomContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const t = useTranslations('ForWhom');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t('label')}</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{t('title')}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t('text')}</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">{t('text2')}</p>
            <p className="mt-4 text-sm leading-6 text-slate-500">{t('text3')}</p>
            <div className="mt-8">
              <a
                href={config.appProducerUrl?.trim() || `/${locale}/under-construction`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-sm"
              >
                {t('cta')}
              </a>
            </div>
          </div>
          <div className="relative pt-8 md:pt-[2.75rem]">
            <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" aria-hidden />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <Image src="/box.png" alt="" width={96} height={96} className="h-24 w-24 object-contain" />
                <div className="mt-4 text-lg font-semibold text-slate-900">{t('producers')}</div>
                <div className="mt-1 text-sm text-slate-500">{t('producersSubtitle')}</div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <Image src="/truck.png" alt="" width={96} height={96} className="h-24 w-24 object-contain" />
                <div className="mt-4 text-lg font-semibold text-slate-900">{t('drivers')}</div>
                <div className="mt-1 text-sm text-slate-500">{t('driversSubtitle')}</div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <Image src="/warhouse.png" alt="" width={96} height={96} className="h-24 w-24 object-contain" />
                <div className="mt-4 text-lg font-semibold text-slate-900">{t('warehouseOwners')}</div>
                <div className="mt-1 text-sm text-slate-500">{t('warehouseOwnersSubtitle')}</div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <Image src="/warh_wor.png" alt="" width={96} height={96} className="h-24 w-24 object-contain" />
                <div className="mt-4 text-lg font-semibold text-slate-900">{t('warehouseWorkers')}</div>
                <div className="mt-1 text-sm text-slate-500">{t('warehouseWorkersSubtitle')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
