'use client';

import { Link } from '@/i18n/navigation';

export function FooterLinkColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={`${item.label}-${item.href || item.externalUrl || 'item'}`}>
            {item.externalUrl ? (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] leading-6 text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href || '/under-construction'}
                className="text-[15px] leading-6 text-slate-600 hover:text-slate-900"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
