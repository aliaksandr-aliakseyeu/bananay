import { normalizeExternalUrl } from '@/app/lib/navigation/url-utils';

export function getFooterPlatformItems(t, config) {
  return [
    { label: t('platformProducers'), externalUrl: normalizeExternalUrl(config.appProducerUrl) || null },
    { label: t('platformDrivers'), externalUrl: normalizeExternalUrl(config.appTruckUrl) || null },
    { label: t('platformHubs'), externalUrl: normalizeExternalUrl(config.appHubUrl) || null },
    { label: t('platformCouriers'), externalUrl: normalizeExternalUrl(config.appCourierUrl) || null },
    { label: t('platformDeliveryPoints'), externalUrl: normalizeExternalUrl(config.appTrackingUrl) || null },
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

export function getFooterMobileAboutLinks(t) {
  return [
    { href: '/for-whom', label: t('navForWhom') },
    { href: '/benefits', label: t('navWhyBananay') },
    { href: '/under-construction', label: t('navWhyPlatform') },
    { href: '/how-it-works', label: t('navHowItWorks') },
    { href: '/under-construction', label: t('navAbout') },
  ];
}

export function getFooterMobilePlatformItems(t, config) {
  return [
    { label: t('platformProducers'), externalUrl: normalizeExternalUrl(config.appProducerUrl) || null },
    { label: t('platformDrivers'), externalUrl: normalizeExternalUrl(config.appTruckUrl) || null },
    { label: t('platformHubs'), externalUrl: normalizeExternalUrl(config.appHubUrl) || null },
    { label: t('mobilePlatformCouriers'), externalUrl: normalizeExternalUrl(config.appCourierUrl) || null },
    { label: t('platformDeliveryPoints'), externalUrl: normalizeExternalUrl(config.appTrackingUrl) || null },
  ];
}

export function getFooterMobileAppItems(t) {
  return [
    { label: t('appProducer'), href: '/under-construction' },
    { label: t('appDriver'), href: '/under-construction' },
    { label: t('mobileAppHub'), href: '/under-construction' },
    { label: t('appCourier'), href: '/under-construction' },
  ];
}
