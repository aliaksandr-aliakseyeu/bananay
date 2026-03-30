'use client';

import { useTrialDeliveryForm } from '@/app/hooks/useTrialDeliveryForm';

export function TrialDeliveryModal({ isOpen, onClose, apiUrl, tEconomics }) {
  const {
    form,
    fieldErrors,
    submitState,
    submitError,
    onInputChange,
    onSubmit,
    resetForm,
  } = useTrialDeliveryForm({
    apiUrl,
    t: tEconomics,
  });

  const handleClose = () => {
    resetForm();
    onClose();
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
        {submitState === 'success' ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
              {tEconomics('form.successTitle')}
            </h3>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                {tEconomics('form.title')}
              </h3>
            </div>
            <p className="mb-5 text-base leading-7 text-slate-600">{tEconomics('form.helpText')}</p>
            <form noValidate onSubmit={onSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder={tEconomics('form.name')}
                value={form.name}
                onChange={onInputChange}
                className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              {fieldErrors.name && <p className="-mt-1 text-sm font-medium text-red-600">{fieldErrors.name}</p>}
              <input
                type="tel"
                name="phone"
                placeholder={tEconomics('form.phone')}
                value={form.phone}
                onChange={onInputChange}
                className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              {fieldErrors.phone && (
                <p className="-mt-1 text-sm font-medium text-red-600">{fieldErrors.phone}</p>
              )}
              <input
                type="text"
                name="email"
                placeholder={tEconomics('form.email')}
                value={form.email}
                onChange={onInputChange}
                className="rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
              />
              {fieldErrors.email && (
                <p className="-mt-1 text-sm font-medium text-red-600">{fieldErrors.email}</p>
              )}
              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="mt-1 self-start rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitState === 'submitting'
                  ? tEconomics('form.submitting')
                  : tEconomics('form.submit')}
              </button>
              <p className="text-[11px] leading-4 text-slate-400">{tEconomics('form.footnote')}</p>
              {submitState === 'error' && (
                <p className="text-sm font-medium text-red-600">{submitError}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
