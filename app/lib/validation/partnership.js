export function validatePartnershipForm(form, t) {
  const nameValue = form.name.trim();
  const phoneValue = form.phone.trim();
  const emailValue = form.email.trim();
  const cityValue = form.city.trim();
  const participateValue = form.participate.trim();
  const detailsValue = form.details.trim();

  const errors = {
    name: '',
    phone: '',
    email: '',
    city: '',
    participate: '',
  };

  if (!nameValue) {
    errors.name = t('requiredName');
  }

  if (!phoneValue) {
    errors.phone = t('requiredPhone');
  } else {
    const hasValidCharacters = /^\+?[0-9()\-\s]+$/.test(phoneValue);
    const plusAllowed = phoneValue.indexOf('+') <= 0 && phoneValue.split('+').length <= 2;
    const digitsCount = phoneValue.replace(/\D/g, '').length;

    if (!hasValidCharacters || !plusAllowed || digitsCount < 7 || digitsCount > 15) {
      errors.phone = t('invalidPhone');
    }
  }

  if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errors.email = t('invalidEmail');
  }

  if (!cityValue) {
    errors.city = t('requiredCity');
  }

  if (!participateValue) {
    errors.participate = t('requiredParticipate');
  }

  return {
    errors,
    isValid: !errors.name && !errors.phone && !errors.email && !errors.city && !errors.participate,
    values: {
      name: nameValue,
      phone: phoneValue,
      email: emailValue || null,
      city: cityValue,
      participate: participateValue,
      details: detailsValue || null,
    },
  };
}
