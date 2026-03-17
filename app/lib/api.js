const SOCHI_REGION_ID = 1;

/**
 * Fetch delivery points for the Sochi region (same as producer).
 * @param {string} [apiBase] - Base URL of calc API (from /api/config). If omitted, uses empty string.
 * @returns {Promise<{ id: number, name: string, address?: string, location?: { coordinates: [number, number] }, is_active: boolean, ... }[]>}
 */
export async function getDeliveryPoints(apiBase = '') {
  const res = await fetch(`${apiBase}/api/v1/delivery-points/search`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ region_id: SOCHI_REGION_ID, only_in_sectors: false }),
  });
  if (!res.ok) throw new Error('Failed to load delivery points');
  const data = await res.json();
  return data.items || [];
}
