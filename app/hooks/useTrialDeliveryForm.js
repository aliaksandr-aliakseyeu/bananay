'use client';

import { useState } from 'react';
import { submitTrialDeliveryRequest } from '@/app/lib/services/landing-service';
import { validateTrialDeliveryForm } from '@/app/lib/validation/trial-delivery';

const EMPTY_FORM = { name: '', phone: '', email: '' };
const EMPTY_ERRORS = { name: '', phone: '', email: '' };

export function useTrialDeliveryForm({ apiUrl, t }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState(EMPTY_ERRORS);
  const [submitState, setSubmitState] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setFieldErrors(EMPTY_ERRORS);
    setSubmitState('idle');
    setSubmitError('');
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }

    if (submitState !== 'idle') {
      setSubmitState('idle');
      setSubmitError('');
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const result = validateTrialDeliveryForm(form, t);
    if (!result.isValid) {
      setFieldErrors(result.errors);
      return;
    }

    setFieldErrors(EMPTY_ERRORS);
    setSubmitState('submitting');
    setSubmitError('');

    try {
      await submitTrialDeliveryRequest(apiUrl, {
        name: result.values.name,
        phone: result.values.phone,
        email: result.values.email || null,
      });
      setSubmitState('success');
      setForm(EMPTY_FORM);
    } catch (error) {
      setSubmitState('error');
      setSubmitError(
        error?.message === 'missing_api_url' ? t('form.errorNoApi') : t('form.error')
      );
    }
  };

  return {
    form,
    fieldErrors,
    submitState,
    submitError,
    onInputChange,
    onSubmit,
    resetForm,
  };
}
