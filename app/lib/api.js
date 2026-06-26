import { DEFAULT_REGION_ID } from './constants';

/** API schedule lang: en, ka, ru (ru kept for compatibility). */
function resolveScheduleLang(locale) {
  if (locale === 'ka' || locale === 'ru') return locale;
  return 'en';
}

let deliveryPointsCache = { cacheKey: null, promise: null };

/**
 * Fetch delivery points for the Batumi launch region.
 * Result is cached per apiBase + lang so locale switch refetches schedule text.
 * @param {string} [apiBase] - Base URL of calc API (from /api/config).
 * @param {string} [locale='en'] - UI locale used for schedule_i18n resolution.
 */
export async function getDeliveryPoints(apiBase = '', locale = 'en') {
  if (!apiBase || !apiBase.trim()) {
    return [];
  }
  const lang = resolveScheduleLang(locale);
  const cacheKey = `${apiBase}|${lang}`;
  if (deliveryPointsCache.cacheKey === cacheKey && deliveryPointsCache.promise) {
    return deliveryPointsCache.promise;
  }
  const promise = (async () => {
    const res = await fetch(
      `${apiBase}/api/v1/delivery-points/search?lang=${encodeURIComponent(lang)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ region_id: DEFAULT_REGION_ID, only_in_sectors: false }),
      }
    );
    if (!res.ok) throw new Error('Failed to load delivery points');
    const data = await res.json();
    return data.items || [];
  })();
  deliveryPointsCache = { cacheKey, promise };
  return promise;
}
