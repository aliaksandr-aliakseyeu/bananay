export async function submitTrialDeliveryRequest(apiUrl, payload) {
  const apiBase = apiUrl?.trim();
  if (!apiBase) {
    throw new Error('missing_api_url');
  }

  const response = await fetch(`${apiBase.replace(/\/$/, '')}/api/v1/landing/trial-delivery-request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('request_failed');
  }

  return response;
}

export async function submitPartnershipRequest(apiUrl, payload) {
  const apiBase = apiUrl?.trim();
  if (!apiBase) {
    throw new Error('missing_api_url');
  }

  const response = await fetch(`${apiBase.replace(/\/$/, '')}/api/v1/landing/partnership-request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('request_failed');
  }

  return response;
}
