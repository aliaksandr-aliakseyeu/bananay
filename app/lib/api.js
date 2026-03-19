const SOCHI_REGION_ID = 1;

let deliveryPointsCache = { apiBase: null, promise: null };

/**
 * Fetch delivery points for the Sochi region (same as producer).
 * Result is cached per apiBase so locale switch doesn't trigger a new request.
 * @param {string} [apiBase] - Base URL of calc API (from /api/config). Must be set to avoid requesting current origin.
 * @returns {Promise<{ id: number, name: string, address?: string, location?: { coordinates: [number, number] }, is_active: boolean, ... }[]>}
 */
export async function getDeliveryPoints(apiBase = '') {
  if (!apiBase || !apiBase.trim()) {
    return [];
  }
  if (deliveryPointsCache.apiBase === apiBase && deliveryPointsCache.promise) {
    return deliveryPointsCache.promise;
  }
  const promise = (async () => {
    const res = await fetch(`${apiBase}/api/v1/delivery-points/search`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ region_id: SOCHI_REGION_ID, only_in_sectors: false }),
    });
    if (!res.ok) throw new Error('Failed to load delivery points');
    const data = await res.json();
    return data.items || [];
  })();
  deliveryPointsCache = { apiBase, promise };
  return promise;
}
