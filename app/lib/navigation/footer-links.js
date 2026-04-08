function withFallback(url) {
  return url?.trim() || null;
}

export function getFooterPlatformItems(t, config) {
  return [
    { label: t('platformProducers'), externalUrl: withFallback(config.appProducerUrl) },
    { label: t('platformDrivers'), externalUrl: withFallback(config.appTruckUrl) },
    { label: t('platformHubs'), externalUrl: withFallback(config.appHubUrl) },
    { label: t('platformCouriers'), externalUrl: withFallback(config.appCourierUrl) },
    { label: t('platformDeliveryPoints'), externalUrl: withFallback(config.appTrackingUrl) },
  ];
}

export function getFooterAppItems(t) {
  return [t('appProducer'), t('appDriver'), t('appHub'), t('appCourier')].map((label) => ({
    label,
    href: '/under-construction',
  }));
}

export function getFooterNavLinks(t) {
  return [
    { href: '/for-whom', label: t('navForWhom') },
    { href: '/benefits', label: t('navWhyBananay') },
    { href: '/under-construction', label: t('navWhyPlatform') },
    { href: '/how-it-works', label: t('navHowItWorks') },
    { href: '/under-construction', label: t('navApps') },
    { href: '/under-construction', label: t('navAbout') },
  ];
}
