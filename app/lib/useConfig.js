'use client';

import { useEffect, useState } from 'react';

const defaultConfig = {
  apiUrl: '',
  appProducerUrl: '',
  appTruckUrl: '',
  appHubUrl: '',
  appCourierUrl: '',
  appTrackingUrl: '',
};

export function useConfig() {
  const [config, setConfig] = useState(defaultConfig);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/config')
      .then((res) => res.json())
      .then((data) => setConfig(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { config, loading, error };
}
