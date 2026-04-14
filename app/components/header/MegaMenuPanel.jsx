'use client';

import { Link } from '@/i18n/navigation';
import { getLinkTargetProps } from '@/app/lib/navigation/url-utils';

export function MegaMenuPanel({ infoLinks, platformLinks, t, onClose }) {
  return (
    <div onMouseLeave={onClose} className="absolute left-0 top-full z-40">
      <div className="w-[820px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-b-2xl bg-slate-50 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.18)]">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_1px_1fr]">
          <div className="p-8">
            <div className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-5">
              <span className="text-xl">🧭</span>
              <span className="text-[18px] font-bold tracking-tight text-slate-950">{t('megaColInfo')}</span>
            </div>
            <ul className="space-y-5">
              {infoLinks.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  <Link href={item.href} onClick={onClose} className="group block">
                    <div className="text-[15px] font-semibold text-slate-900 group-hover:underline">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-[13px] leading-snug text-slate-500">{item.desc}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden bg-gray-200 md:block" />

          <div className="border-t border-gray-200 p-8 md:border-t-0">
            <div className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-5">
              <span className="text-xl">⚡</span>
              <span className="text-[18px] font-bold tracking-tight text-slate-950">
                {t('megaColPlatforms')}
              </span>
            </div>
            <ul className="space-y-5">
              {platformLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...getLinkTargetProps(item.href)}
                    onClick={onClose}
                    className="group flex items-start gap-3"
                  >
                    <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`} />
                    <div>
                      <div className="text-[15px] font-semibold text-slate-900 group-hover:underline">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-[13px] leading-snug text-slate-500">{item.desc}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
