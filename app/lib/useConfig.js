'use client';

import { getPublicConfig } from '@/app/lib/services/config-service';

export function useConfig() {
  return {
    config: getPublicConfig(),
    loading: false,
    error: null,
  };
}
