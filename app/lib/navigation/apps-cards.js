export const APP_CARD_ORDER = ['producer', 'truck', 'hub', 'courier', 'tracking'];

const APP_CARD_ACCENTS = {
  producer: {
    borderClass: 'border-t-blue-500',
    iconBoxClass: 'bg-blue-100 text-blue-500',
  },
  truck: {
    borderClass: 'border-t-orange-500',
    iconBoxClass: 'bg-orange-100 text-orange-500',
  },
  hub: {
    borderClass: 'border-t-violet-500',
    iconBoxClass: 'bg-violet-100 text-violet-500',
  },
  courier: {
    borderClass: 'border-t-emerald-500',
    iconBoxClass: 'bg-emerald-100 text-emerald-500',
  },
  tracking: {
    borderClass: 'border-t-slate-700',
    iconBoxClass: 'bg-slate-100 text-slate-700',
  },
};

const APP_URL_FIELDS = {
  producer: 'appProducerUrl',
  truck: 'appTruckUrl',
  hub: 'appHubUrl',
  courier: 'appCourierUrl',
  tracking: 'appTrackingUrl',
};

export function getAppCardAccent(key) {
  return APP_CARD_ACCENTS[key] || APP_CARD_ACCENTS.tracking;
}

export function getAppHref(key, config, locale) {
  const field = APP_URL_FIELDS[key];
  const url = field ? config[field] : '';
  return url?.trim() ? url : `/${locale}/under-construction`;
}
