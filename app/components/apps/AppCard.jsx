'use client';

import { getLinkTargetProps } from '@/app/lib/navigation/url-utils';

export function AppCard({ cardKey, href, accent, icon, t }) {
  return (
    <a
      href={href}
      {...getLinkTargetProps(href)}
      className={`group block rounded-3xl border border-slate-200 border-t-4 bg-white p-6 shadow-sm transition duration-200 hover:shadow-lg ${accent.borderClass}`}
    >
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accent.iconBoxClass}`}>
        {icon}
      </div>
      <span className="mt-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
        {t(`${cardKey}.label`)}
      </span>
      <div className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{t(`${cardKey}.title`)}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{t(`${cardKey}.text`)}</p>
    </a>
  );
}
