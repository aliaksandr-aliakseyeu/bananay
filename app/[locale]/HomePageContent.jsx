'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { RegionMapClient } from '@/app/components/RegionMapClient';
import { useConfig } from '@/app/lib/useConfig';

function TrialDeliveryModal({ isOpen, onClose, apiUrl, tEconomics }) {
  const [trialForm, setTrialForm] = useState({ name: '', phone: '', email: '' });
  const [trialFieldErrors, setTrialFieldErrors] = useState({ name: '', phone: '', email: '' });
  const [trialSubmitState, setTrialSubmitState] = useState('idle');
  const [trialSubmitError, setTrialSubmitError] = useState('');

  const handleClose = () => {
    setTrialForm({ name: '', phone: '', email: '' });
    setTrialFieldErrors({ name: '', phone: '', email: '' });
    setTrialSubmitState('idle');
    setTrialSubmitError('');
    onClose();
  };

  const handleTrialInputChange = (event) => {
    const { name, value } = event.target;
    setTrialForm((prev) => ({ ...prev, [name]: value }));
    if (trialFieldErrors[name]) {
      setTrialFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (trialSubmitState !== 'idle') {
      setTrialSubmitState('idle');
      setTrialSubmitError('');
    }
  };

  const handleTrialSubmit = async (event) => {
    event.preventDefault();
    const nameValue = trialForm.name.trim();
    const phoneValue = trialForm.phone.trim();
    const emailValue = trialForm.email.trim();

    const nextErrors = { name: '', phone: '', email: '' };

    if (!nameValue) {
      nextErrors.name = tEconomics('form.requiredName');
    }

    if (!phoneValue) {
      nextErrors.phone = tEconomics('form.requiredPhone');
    } else {
      const hasValidCharacters = /^\+?[0-9()\-\s]+$/.test(phoneValue);
      const plusAllowed = phoneValue.indexOf('+') <= 0 && phoneValue.split('+').length <= 2;
      const digitsCount = phoneValue.replace(/\D/g, '').length;
      if (!hasValidCharacters || !plusAllowed || digitsCount < 7 || digitsCount > 15) {
        nextErrors.phone = tEconomics('form.invalidPhone');
      }
    }

    if (!emailValue) {
      nextErrors.email = tEconomics('form.requiredEmail');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      nextErrors.email = tEconomics('form.invalidEmail');
    }

    if (nextErrors.name || nextErrors.phone || nextErrors.email) {
      setTrialFieldErrors(nextErrors);
      return;
    }
    setTrialFieldErrors({ name: '', phone: '', email: '' });

    const apiBase = apiUrl?.trim();
    if (!apiBase) {
      setTrialSubmitState('error');
      setTrialSubmitError(tEconomics('form.errorNoApi'));
      return;
    }

    setTrialSubmitState('submitting');
    setTrialSubmitError('');

    try {
      const response = await fetch(`${apiBase.replace(/\/$/, '')}/api/v1/landing/trial-delivery-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameValue,
          phone: phoneValue,
          email: emailValue || null,
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setTrialSubmitState('success');
      setTrialForm({ name: '', phone: '', email: '' });
    } catch {
      setTrialSubmitState('error');
      setTrialSubmitError(tEconomics('form.error'));
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/60"
        onClick={handleClose}
        aria-label="Close modal backdrop"
      />
      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl md:p-7">
        {trialSubmitState === 'success' ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{tEconomics('form.successTitle')}</h3>
            <p className="text-base leading-7 text-slate-600">{tEconomics('form.successText')}</p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 self-start rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              {tEconomics('form.close')}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{tEconomics('form.title')}</h3>
            </div>
            <p className="mb-5 text-base leading-7 text-slate-600">
              {tEconomics('form.helpText')}
            </p>
            <form noValidate onSubmit={handleTrialSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder={tEconomics('form.name')}
                value={trialForm.name}
                onChange={handleTrialInputChange}
                className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              {trialFieldErrors.name && (
                <p className="-mt-1 text-sm font-medium text-red-600">{trialFieldErrors.name}</p>
              )}
              <input
                type="tel"
                name="phone"
                placeholder={tEconomics('form.phone')}
                value={trialForm.phone}
                onChange={handleTrialInputChange}
                className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              {trialFieldErrors.phone && (
                <p className="-mt-1 text-sm font-medium text-red-600">{trialFieldErrors.phone}</p>
              )}
              <input
                type="text"
                name="email"
                placeholder={tEconomics('form.email')}
                value={trialForm.email}
                onChange={handleTrialInputChange}
                className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              {trialFieldErrors.email && (
                <p className="-mt-1 text-sm font-medium text-red-600">{trialFieldErrors.email}</p>
              )}
              <button
                type="submit"
                disabled={trialSubmitState === 'submitting'}
                className="mt-1 self-start rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {trialSubmitState === 'submitting' ? tEconomics('form.submitting') : tEconomics('form.submit')}
              </button>
              <p className="text-[11px] leading-4 text-slate-400">
                {tEconomics('form.footnote')}
              </p>
              {trialSubmitState === 'error' && (
                <p className="text-sm font-medium text-red-600">{trialSubmitError}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function HomePageContent() {
  const locale = useLocale();
  const { config } = useConfig();
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const tHero = useTranslations('Hero');
  const tQuickStart = useTranslations('QuickStart');
  const tEconomics = useTranslations('Economics');
  const tMapBlock = useTranslations('MapBlock');
  const economicsItems = tEconomics.raw('items');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section id="who-we-are" className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero_bg.png"
            alt="Local logistics and delivery operations"
            fill
            className="object-cover object-[50%_35%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>

        <div className="relative px-6 text-center text-white">
          <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight md:text-5xl lg:text-6xl">
            <span className="block">{tHero('titleLine1')}</span>
            <span className="block">{tHero('titleLine2')}</span>
          </h1>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a
              href={config.appProducerUrl?.trim() || `/${locale}/under-construction`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex min-w-[19rem] items-center justify-center"
            >
              {tHero('cta')}
            </a>
          </div>
        </div>
      </section>

      <section id="map" className="bg-white py-[4rem]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="max-w-xl">
              <h2 className="section-heading max-w-lg">
                {tMapBlock('title')}
              </h2>
              <p className="mt-4 max-w-lg text-xl leading-8 text-slate-700">{tMapBlock('label')}</p>
              <p className="mt-1 max-w-md text-base leading-7 text-slate-500">{tMapBlock('subtitle')}</p>
              <div className="mt-10 flex justify-start">
                <a
                  href={config.appProducerUrl?.trim() || `/${locale}/under-construction`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {tMapBlock('cta')}
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
              <RegionMapClient height="420px" className="h-full w-full rounded-[1.4rem]" apiUrl={config.apiUrl} />
            </div>
          </div>
        </div>
      </section>

      <section id="economics" className="relative bg-slate-50 py-[5.25rem]">
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
              className="absolute inset-0 bg-[linear-gradient(to_right,rgb(248_250_252)_0%,rgb(248_250_252)_46%,rgba(248,250,252,0.72)_58%,rgba(248,250,252,0.26)_70%,rgb(248_250_252)_100%)]"
              aria-hidden
            />
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-8 max-w-2xl">
            <h2 className="section-heading">
              <span className="block">{tEconomics('title')}</span>
              <span className="mt-1 block">{tEconomics('titleAccent')}</span>
            </h2>
          </div>
          <div className="grid max-w-2xl gap-2.5">
            {economicsItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 py-1">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-200 text-orange-600 shadow-[0_5px_14px_rgba(251,146,60,0.22)]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="max-w-[34rem] text-[1.35rem] font-semibold leading-[1.7] tracking-tight text-slate-900">
                  {typeof item === 'string' ? item : item.title}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-2xl">
            <button
              type="button"
              onClick={() => setTrialModalOpen(true)}
              className="btn-primary inline-flex min-w-[18rem] items-center justify-center"
            >
              {tEconomics('cta')}
            </button>
          </div>
        </div>
      </section>

      <section id="quick-start" className="bg-white py-[4rem]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="section-heading">
              {tQuickStart('title')}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {['01', '02', '03'].map((label, i) => (
              <div key={label} className="max-w-sm">
                <div className="text-4xl font-bold tracking-tight text-orange-500 md:text-5xl">
                  {label}
                </div>
                <div className="mt-5 text-[1.65rem] font-bold leading-tight tracking-tight text-slate-900">
                  {tQuickStart(`steps.${i}.title`)}
                </div>
                <p className="mt-2 max-w-[18rem] text-[15px] leading-6 text-slate-500">
                  {tQuickStart(`steps.${i}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrialDeliveryModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        apiUrl={config.apiUrl}
        tEconomics={tEconomics}
      />

    </div>
  );
}
