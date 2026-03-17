'use client';

import dynamic from 'next/dynamic';

const RegionMap = dynamic(
  () => import('./RegionMap').then((m) => m.RegionMap),
  { ssr: false, loading: () => <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl bg-slate-100 text-slate-500"><span className="text-sm">Loading map…</span></div> }
);

export function RegionMapClient({ height = '100%', className = '' }) {
  return <RegionMap height={height} className={className} />;
}
