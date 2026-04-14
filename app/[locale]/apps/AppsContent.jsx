'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useConfig } from '@/app/lib/useConfig';
import { AppCard } from '@/app/components/apps/AppCard';
import { appIcons } from '@/app/components/apps/AppIcons';
import { APP_CARD_ORDER, getAppCardAccent, getAppHref } from '@/app/lib/navigation/apps-cards';

export default function AppsContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const t = useTranslations('Apps');

  return (
    <div className="page-shell bg-white">
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="section-eyebrow">{t('label')}</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{t('title')}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t('text')}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {APP_CARD_ORDER.map((cardKey) => (
              <AppCard
                key={cardKey}
                cardKey={cardKey}
                href={getAppHref(cardKey, config, locale)}
                accent={getAppCardAccent(cardKey)}
                icon={appIcons[cardKey]}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
