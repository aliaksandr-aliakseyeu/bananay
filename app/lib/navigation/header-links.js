import { getAppHref, getLoginHref } from '@/app/lib/navigation/url-utils';

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
      href: getAppHref(config.appProducerUrl, locale),
      dot: 'bg-orange-500',
    },
    {
      label: t('navDriver'),
      desc: t('navDriverDesc'),
      href: getAppHref(config.appTruckUrl, locale),
      dot: 'bg-emerald-500',
    },
    {
      label: t('navHub'),
      desc: t('navHubDesc'),
      href: getAppHref(config.appHubUrl, locale),
      dot: 'bg-violet-500',
    },
    {
      label: t('navCourier'),
      desc: t('navCourierDesc'),
      href: getAppHref(config.appCourierUrl, locale),
      dot: 'bg-blue-500',
    },
    {
      label: t('navDeliveryPoint'),
      desc: t('navDeliveryPointDesc'),
      href: getAppHref(config.appTrackingUrl, locale),
      dot: 'bg-slate-600',
    },
  ];
}

export function getLoginRoleLinks(t, config, locale) {
  return [
    {
      label: t('roles.producer'),
      href: getLoginHref(config.appProducerUrl, locale, 'login'),
    },
    {
      label: t('roles.driver'),
      href: getLoginHref(config.appTruckUrl, locale, 'login'),
    },
    {
      label: t('roles.hub'),
      href: getLoginHref(config.appHubUrl, locale, 'dc/login'),
    },
    {
      label: t('roles.courier'),
      href: getLoginHref(config.appCourierUrl, locale, 'login'),
    },
    {
      label: t('roles.deliveryPoint'),
      href: getLoginHref(config.appTrackingUrl, locale, 'login'),
    },
  ];
}
