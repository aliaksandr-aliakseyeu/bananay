'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function WhyPlatformContent() {
  const t = useTranslations('Value');

  return (
    <div className="page-shell bg-white">
      <section className="relative bg-slate-50 py-16 md:py-24">
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
              className="absolute inset-0 bg-[linear-gradient(to_right,rgb(248_250_252)_0%,rgb(248_250_252)_35%,transparent_48%,transparent_62%,rgb(248_250_252)_100%)]"
              aria-hidden
            />
          </div>
        </div>
        <div className="section-container relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="section-eyebrow">{t('label')}</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">{t('title')}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{t('text')}</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="card-surface">
                  <div className="text-base font-medium leading-7 text-slate-800">{t(`items.${i}`)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>
    </div>
  );
}
