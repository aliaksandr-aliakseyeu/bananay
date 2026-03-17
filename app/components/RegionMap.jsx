'use client';

import dynamic from 'next/dynamic';

const RegionMapInner = dynamic(() => import('./RegionMapInner'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
      <span className="text-sm">Loading map…</span>
    </div>
  ),
});

export function RegionMap({ height = '100%', className = '', apiUrl = '' }) {
  return <RegionMapInner height={height} className={className} apiUrl={apiUrl} />;
}
