function withFallback(url, locale) {
  return url?.trim() || `/${locale}/under-construction`;
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
    { label: t('roles.producer'), href: withFallback(config.appProducerUrl, locale) },
    { label: t('roles.driver'), href: withFallback(config.appTruckUrl, locale) },
    { label: t('roles.hub'), href: withFallback(config.appHubUrl, locale) },
    { label: t('roles.courier'), href: withFallback(config.appCourierUrl, locale) },
    { label: t('roles.deliveryPoint'), href: withFallback(config.appTrackingUrl, locale) },
  ];
}
