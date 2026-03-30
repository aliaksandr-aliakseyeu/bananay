export function validateTrialDeliveryForm(form, t) {
  const nameValue = form.name.trim();
  const phoneValue = form.phone.trim();
  const emailValue = form.email.trim();

  const errors = { name: '', phone: '', email: '' };

  if (!nameValue) {
    errors.name = t('form.requiredName');
  }

  if (!phoneValue) {
    errors.phone = t('form.requiredPhone');
  } else {
    const hasValidCharacters = /^\+?[0-9()\-\s]+$/.test(phoneValue);
    const plusAllowed = phoneValue.indexOf('+') <= 0 && phoneValue.split('+').length <= 2;
    const digitsCount = phoneValue.replace(/\D/g, '').length;

    if (!hasValidCharacters || !plusAllowed || digitsCount < 7 || digitsCount > 15) {
      errors.phone = t('form.invalidPhone');
    }
  }

  if (!emailValue) {
    errors.email = t('form.requiredEmail');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errors.email = t('form.invalidEmail');
  }

  return {
    errors,
    isValid: !errors.name && !errors.phone && !errors.email,
    values: {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
    },
  };
}
