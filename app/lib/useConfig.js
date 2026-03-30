'use client';

import { useEffect, useState } from 'react';
import { getDefaultConfig, loadRuntimeConfig } from '@/app/lib/services/config-service';

export function useConfig() {
  const [config, setConfig] = useState(getDefaultConfig());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadRuntimeConfig()
      .then((data) => setConfig(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { config, loading, error };
}
