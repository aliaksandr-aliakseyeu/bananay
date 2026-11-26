const DEFAULT_CONFIG = {
  apiUrl: '',
  appProducerUrl: '',
  appTruckUrl: '',
  appHubUrl: '',
  appCourierUrl: '',
  appTrackingUrl: '',
};

function normalizeConfig(config = {}) {
  return {
    ...DEFAULT_CONFIG,
    apiUrl: config.apiUrl || '',
    appProducerUrl: config.appProducerUrl || '',
    appTruckUrl: config.appTruckUrl || config.appDriverUrl || '',
    appHubUrl: config.appHubUrl || config.appDistributionUrl || '',
    appCourierUrl: config.appCourierUrl || '',
    appTrackingUrl: config.appTrackingUrl || '',
  };
}

/** Build-time public config (NEXT_PUBLIC_* from .env / Docker ARG). */
export function getPublicConfig() {
  return normalizeConfig({
    apiUrl: process.env.NEXT_PUBLIC_API_URL || '',
    appProducerUrl: process.env.NEXT_PUBLIC_APP_PRODUCER_URL || '',
    appTruckUrl: process.env.NEXT_PUBLIC_APP_TRUCK_URL || '',
    appHubUrl: process.env.NEXT_PUBLIC_APP_HUB_URL || '',
    appCourierUrl: process.env.NEXT_PUBLIC_APP_COURIER_URL || '',
    appTrackingUrl: process.env.NEXT_PUBLIC_APP_TRACKING_URL || '',
  });
}

/** @deprecated Use getPublicConfig() */
export function getDefaultConfig() {
  return getPublicConfig();
}
