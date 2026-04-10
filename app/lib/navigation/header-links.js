function withFallback(url, locale) {
  return url?.trim() || `/${locale}/under-construction`;
}

function withLoginPath(url, locale, loginPath = 'login') {
  const raw = url?.trim();
  if (!raw) {
    return `/${locale}/under-construction`;
  }

  const base = raw.endsWith('/') ? raw.slice(0, -1) : raw;
  const normalizedPath = loginPath.replace(/^\/+/, '');
  return `${base}/${locale}/${normalizedPath}`;
}

export function getHeaderInfoLinks(t) {
  return [
    { label: t('navForWhom'), desc: t('navForWhomDesc'), href: '/for-whom' },
    { label: t('navBenefits'), desc: t('navBenefitsDesc'), href: '/benefits' },
    { label: t('navWhyPlatform'), desc: t('navWhyPlatformDesc'), href: '/under-construction' },
    { label: t('navHowItWorks'), desc: t('navHowItWorksDesc'), href: '/how-it-works' },
    { label: t('navApps'), desc: t('navAppsDesc'), href: '/under-construction' },
    { label: t('navAboutUs'), desc: t('navAboutUsDesc'), href: '/under-construction' },
  ];
}

export function getHeaderPlatformLinks(t, config, locale) {
  return [
    {
      label: t('navProducer'),
      desc: t('navProducerDesc'),
      href: withFallback(config.appProducerUrl, locale),
      dot: 'bg-orange-500',
    },
    {
      label: t('navDriver'),
      desc: t('navDriverDesc'),
      href: withFallback(config.appTruckUrl, locale),
      dot: 'bg-emerald-500',
    },
    {
      label: t('navHub'),
      desc: t('navHubDesc'),
      href: withFallback(config.appHubUrl, locale),
      dot: 'bg-violet-500',
    },
    {
      label: t('navCourier'),
      desc: t('navCourierDesc'),
      href: withFallback(config.appCourierUrl, locale),
      dot: 'bg-blue-500',
    },
    {
      label: t('navDeliveryPoint'),
      desc: t('navDeliveryPointDesc'),
      href: withFallback(config.appTrackingUrl, locale),
      dot: 'bg-slate-600',
    },
  ];
}

export function getLoginRoleLinks(t, config, locale) {
  return [
    {
      label: t('roles.producer'),
      href: withLoginPath(config.appProducerUrl, locale, 'login'),
    },
    {
      label: t('roles.driver'),
      href: withLoginPath(config.appTruckUrl, locale, 'login'),
    },
    {
      label: t('roles.hub'),
      href: withLoginPath(config.appHubUrl, locale, 'dc/login'),
    },
    {
      label: t('roles.courier'),
      href: withLoginPath(config.appCourierUrl, locale, 'login'),
    },
    {
      label: t('roles.deliveryPoint'),
      href: withLoginPath(config.appTrackingUrl, locale, 'login'),
    },
  ];
}
