'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';
import { Link } from '@/i18n/navigation';
import { getAppHref, getLinkTargetProps } from '@/app/lib/navigation/url-utils';

export default function AboutContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const tValue = useTranslations('Value');
  const tCTA = useTranslations('CTA');
  const producerHref = getAppHref(config.appProducerUrl, locale);

  return (
    <div className="page-shell bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="section-eyebrow">Bananay</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{tValue('title')}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{tValue('text')}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={producerHref}
              {...getLinkTargetProps(producerHref)}
              className="btn-primary"
            >
              {tCTA('learnMore')}
            </a>
            <Link href="/for-whom" className="btn-primary-sm">
              {tCTA('partnership')}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-16">
        <div className="section-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="card-surface">
                <div className="text-base font-medium leading-7 text-slate-800">{tValue(`items.${i}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
