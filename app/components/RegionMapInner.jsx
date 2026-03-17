'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapContainer, TileLayer, Marker, Popup, AttributionControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-cluster/dist/assets/MarkerCluster.css';
import 'react-leaflet-cluster/dist/assets/MarkerCluster.Default.css';
import { getDeliveryPoints } from '@/app/lib/api';

if (typeof window !== 'undefined') {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
}

const SOCHI_CENTER = [43.585472, 39.723098];

const deliveryPointIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `<div style="
    background-color: #F59E0B;
    width: 24px;
    height: 24px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  ">
    <svg style="transform: rotate(45deg); width: 12px; height: 12px;" viewBox="0 0 24 24" fill="white">
      <path d="M20 7H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 19H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V5h14v5z"/>
    </svg>
  </div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

function createClusterCustomIcon(cluster) {
  const count = cluster.getChildCount();
  let diameter = 30;
  if (count >= 100) diameter = 50;
  else if (count >= 10) diameter = 40;
  return L.divIcon({
    html: `<div style="
      background-color: #F59E0B;
      width: ${diameter}px;
      height: ${diameter}px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: ${diameter > 40 ? '14px' : diameter > 30 ? '12px' : '11px'};
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    ">${count}</div>`,
    className: 'custom-cluster-icon',
    iconSize: L.point(diameter, diameter),
  });
}

export default function RegionMapInner({ height = '100%', className = '' }) {
  const t = useTranslations('Map');
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDeliveryPoints()
      .then((list) => {
        const active = (list || []).filter(
          (p) => p.is_active && p.location?.coordinates?.length === 2
        );
        setPoints(active);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-slate-100 text-slate-500 ${className}`}
        style={{ minHeight: height === '100%' ? 320 : height }}
      >
        <span className="text-sm">{t('loading')}</span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-slate-100 text-slate-600 ${className}`}
        style={{ minHeight: height === '100%' ? 320 : height }}
      >
        <span className="text-sm">{t('error')}</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[1.25rem] ${className}`} style={{ height }}>
      <MapContainer
        center={SOCHI_CENTER}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <AttributionControl position="bottomright" prefix="" />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={60}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={false}
          zoomToBoundsOnClick={true}
          disableClusteringAtZoom={16}
        >
          {points.map((point) => {
            const [lon, lat] = point.location.coordinates;
            return (
              <Marker
                key={`dp-${point.id}`}
                position={[lat, lon]}
                icon={deliveryPointIcon}
              >
                <Popup>
                  <div className="min-w-[180px] font-sans">
                    <div className="mb-1 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500" />
                      <span className="text-xs font-medium text-amber-600">{t('deliveryPoint')}</span>
                    </div>
                    <h3 className="text-sm font-semibold">{point.name}</h3>
                    {point.title && (
                      <p className="text-xs text-slate-500">{point.title}</p>
                    )}
                    {point.address && (
                      <p className="mt-1 text-xs text-slate-600">{point.address}</p>
                    )}
                    {(point.phone || point.mobile) && (
                      <p className="mt-1 text-xs text-slate-600">
                        📞 {point.phone || point.mobile}
                      </p>
                    )}
                    {point.email && (
                      <p className="mt-1 text-xs text-slate-600">✉️ {point.email}</p>
                    )}
                    {point.schedule && (
                      <p className="mt-1 text-xs text-slate-600">🕒 {point.schedule}</p>
                    )}
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </MapContainer>

      <div className="absolute top-3 right-3 z-[1000] rounded-lg bg-white p-3 shadow-lg">
        <p className="text-sm font-semibold text-[#1e3a8a]">
          {points.length === 1 ? t('point') : t('points', { count: points.length })}
        </p>
        <p className="mt-0.5 text-xs text-slate-600">{t('clickDetails')}</p>
      </div>
    </div>
  );
}
