'use client';

export function FooterContactsColumn({ t, onOpenPartnership }) {
  return (
    <div>
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{t('contactsTitle')}</h3>
      <ul className="mt-4 space-y-2.5 text-[15px] leading-6 text-slate-600">
        <li>
          <a href={`mailto:${t('email')}`} className="hover:text-slate-900">
            {t('email')}
          </a>
        </li>
        <li>
          <span className="text-slate-500">{t('phone')}</span>
        </li>
        <li>
          <button
            type="button"
            onClick={onOpenPartnership}
            className="text-[15px] leading-6 text-slate-600 transition hover:text-slate-900"
          >
            {t('partnership')}
          </button>
        </li>
      </ul>
    </div>
  );
}
