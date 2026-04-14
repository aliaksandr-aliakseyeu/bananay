import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export default async function UnderConstructionPage({ params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'UnderConstruction' });

  return (
    <main className="flex w-full flex-1 flex-col justify-center bg-white px-6 py-20">
      <div className="mx-auto w-full max-w-4xl bg-white px-8 py-10 md:px-12 md:py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{t('text')}</p>
        <Link
          href="/"
          className="btn-primary-sm mt-8 inline-block"
        >
          {t('back')}
        </Link>
      </div>
    </main>
  );
}
