'use client';

export function FooterMobileSection({ title, items, renderItem }) {
  return (
    <details className="group border-b border-slate-200 py-2">
      <summary className="flex cursor-pointer list-none items-center justify-between py-1.5 text-lg font-semibold tracking-tight text-slate-900">
        <span>{title}</span>
        <svg
          className="h-5 w-5 text-slate-500 transition group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul className="space-y-2 pb-2 pt-2">
        {items.map((item) => (
          <li key={`mobile-${title}-${item.label}`}>{renderItem(item)}</li>
        ))}
      </ul>
    </details>
  );
}
