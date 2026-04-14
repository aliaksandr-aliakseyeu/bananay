'use client';

import { useTranslations } from 'next-intl';
import { usePartnershipForm } from '@/app/hooks/usePartnershipForm';

export function PartnershipModal({ isOpen, onClose, apiUrl }) {
  const t = useTranslations('PartnershipModal');
  const {
    form,
    fieldErrors,
    submitState,
    submitError,
    onInputChange,
    onSubmit,
    resetForm,
  } = usePartnershipForm({
    apiUrl,
    t,
  });

  if (!isOpen) return null;

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 p-6" onClick={handleClose}>
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {submitState === 'success' ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              {t('successTitle')}
            </h3>
            <p className="text-base leading-7 text-slate-600">{t('successText')}</p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 self-start rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              {t('close')}
            </button>
          </div>
        ) : (
          <>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">{t('title')}</h3>
              <p className="mt-2 text-sm text-slate-600">{t('intro')}</p>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-600">{t('helpText')}</p>

            <form className="mt-8 space-y-4" noValidate onSubmit={onSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    placeholder={t('name')}
                    value={form.name}
                    onChange={onInputChange}
                  />
                  {fieldErrors.name ? <p className="mt-1 text-sm font-medium text-red-600">{fieldErrors.name}</p> : null}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    placeholder={t('phone')}
                    value={form.phone}
                    onChange={onInputChange}
                  />
                  {fieldErrors.phone ? <p className="mt-1 text-sm font-medium text-red-600">{fieldErrors.phone}</p> : null}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    placeholder={t('email')}
                    value={form.email}
                    onChange={onInputChange}
                  />
                  {fieldErrors.email ? <p className="mt-1 text-sm font-medium text-red-600">{fieldErrors.email}</p> : null}
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    placeholder={t('city')}
                    value={form.city}
                    onChange={onInputChange}
                  />
                  {fieldErrors.city ? <p className="mt-1 text-sm font-medium text-red-600">{fieldErrors.city}</p> : null}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="participate"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  placeholder={t('participate')}
                  value={form.participate}
                  onChange={onInputChange}
                />
                {fieldErrors.participate ? (
                  <p className="mt-1 text-sm font-medium text-red-600">{fieldErrors.participate}</p>
                ) : null}
              </div>

              <textarea
                name="details"
                className="min-h-[140px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                placeholder={t('details')}
                value={form.details}
                onChange={onInputChange}
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="rounded-2xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === 'submitting' ? t('submitting') : t('send')}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-2xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  {t('cancel')}
                </button>
              </div>

              {submitState === 'error' ? (
                <p className="text-sm font-medium text-red-600">{submitError}</p>
              ) : null}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
