const DEFAULT_CONFIG = {
  apiUrl: '',
  appProducerUrl: '',
  appTruckUrl: '',
  appHubUrl: '',
  appCourierUrl: '',
  appTrackingUrl: '',
};

let configPromise = null;

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

export function getDefaultConfig() {
  return DEFAULT_CONFIG;
}

export async function fetchRuntimeConfig() {
  const response = await fetch('/api/config');
  if (!response.ok) {
    throw new Error('Failed to load runtime config');
  }
  const data = await response.json();
  return normalizeConfig(data);
}

export function loadRuntimeConfig() {
  if (!configPromise) {
    configPromise = fetchRuntimeConfig().catch((error) => {
      configPromise = null;
      throw error;
    });
  }
  return configPromise;
}
