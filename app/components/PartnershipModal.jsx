'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function PartnershipModal({ isOpen, onClose }) {
  const t = useTranslations('PartnershipModal');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [participate, setParticipate] = useState('');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to API or mailto
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 p-6" onClick={onClose}>
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">{t('title')}</h3>
          <p className="mt-2 text-sm text-slate-600">{t('intro')}</p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-400"
              placeholder={t('name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-400"
              placeholder={t('phone')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="email"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-400"
              placeholder={t('email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-400"
              placeholder={t('city')}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <input
            type="text"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-400"
            placeholder={t('participate')}
            value={participate}
            onChange={(e) => setParticipate(e.target.value)}
          />

          <textarea
            className="min-h-[140px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-400"
            placeholder={t('details')}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="rounded-2xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">
              {t('send')}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              {t('cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
