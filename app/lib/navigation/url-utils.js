export function normalizeExternalUrl(url) {
  return url?.trim() || '';
}

export function getUnderConstructionHref(locale) {
  return `/${locale}/under-construction`;
}

export function getAppHref(url, locale) {
  return normalizeExternalUrl(url) || getUnderConstructionHref(locale);
}

export function isExternalHref(href = '') {
  return /^https?:\/\//i.test(href);
}

export function getLinkTargetProps(href) {
  if (!isExternalHref(href)) {
    return {};
  }

  return {
    target: '_blank',
    rel: 'noopener noreferrer',
  };
}

export function getLoginHref(url, locale, loginPath = 'login') {
  const baseUrl = normalizeExternalUrl(url);

  if (!baseUrl) {
    return getUnderConstructionHref(locale);
  }

  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = loginPath.replace(/^\/+/, '');
  return `${normalizedBaseUrl}/${locale}/${normalizedPath}`;
}
