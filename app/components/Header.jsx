'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useConfig } from '@/app/lib/useConfig';

function ChevronDown({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function LoginDropdown({ t, config, locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const roles = [
    { label: t('roles.producer'), href: config.appProducerUrl?.trim() || `/${locale}/under-construction` },
    { label: t('roles.driver'), href: config.appTruckUrl?.trim() || `/${locale}/under-construction` },
    { label: t('roles.hub'), href: config.appHubUrl?.trim() || `/${locale}/under-construction` },
    { label: t('roles.courier'), href: config.appCourierUrl?.trim() || `/${locale}/under-construction` },
    { label: t('roles.deliveryPoint'), href: config.appTrackingUrl?.trim() || `/${locale}/under-construction` },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-4 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
      >
        {t('loginButton')}
        <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown />
        </span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-52 rounded-2xl border border-gray-200 bg-slate-50 py-2 shadow-xl">
          {roles.map((role) => (
            <a
              key={role.label}
              href={role.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              {role.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef(null);
  const t = useTranslations('Header');
  const { config } = useConfig();
  const locale = useLocale();

  useEffect(() => {
    function handleClick(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) setMegaOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const infoLinks = [
    { label: t('navForWhom'), desc: t('navForWhomDesc'), href: '/for-whom' },
    { label: t('navBenefits'), desc: t('navBenefitsDesc'), href: '/benefits' },
    { label: t('navWhyPlatform'), desc: t('navWhyPlatformDesc'), href: '/under-construction' },
    { label: t('navHowItWorks'), desc: t('navHowItWorksDesc'), href: '/how-it-works' },
    { label: t('navApps'), desc: t('navAppsDesc'), href: '/under-construction' },
    { label: t('navAboutUs'), desc: t('navAboutUsDesc'), href: '/under-construction' },
  ];

  const platformLinks = [
    { label: t('navProducer'), desc: t('navProducerDesc'), href: config.appProducerUrl?.trim() || `/${locale}/under-construction`, dot: 'bg-orange-500' },
    { label: t('navDriver'), desc: t('navDriverDesc'), href: config.appTruckUrl?.trim() || `/${locale}/under-construction`, dot: 'bg-emerald-500' },
    { label: t('navHub'), desc: t('navHubDesc'), href: config.appHubUrl?.trim() || `/${locale}/under-construction`, dot: 'bg-violet-500' },
    { label: t('navCourier'), desc: t('navCourierDesc'), href: config.appCourierUrl?.trim() || `/${locale}/under-construction`, dot: 'bg-blue-500' },
    { label: t('navDeliveryPoint'), desc: t('navDeliveryPointDesc'), href: config.appTrackingUrl?.trim() || `/${locale}/under-construction`, dot: 'bg-slate-600' },
  ];

  return (
    <header
      ref={megaRef}
      className="sticky top-0 z-[9999] w-full bg-slate-50"
      style={{ boxShadow: megaOpen ? '0 1px 0 #e5e7eb' : '0 1px 0 #e5e7eb' }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <div className="relative flex h-16 items-center">
            <button
              type="button"
              onClick={() => setMegaOpen((o) => !o)}
              onMouseEnter={() => setMegaOpen(true)}
              className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-gray-900"
            >
              {megaOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
              <span className="text-[10px] font-semibold uppercase tracking-widest">{t('menuLabel')}</span>
            </button>

            {megaOpen && (
              <div
                onMouseLeave={() => setMegaOpen(false)}
                className="absolute left-0 top-full z-40"
              >
                <div className="w-[820px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-b-2xl bg-slate-50 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.18)]">
                  <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_1px_1fr]">
                    <div className="p-8">
                      <div className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-5">
                        <span className="text-xl">🧭</span>
                        <span className="text-[18px] font-bold tracking-tight text-slate-950">{t('megaColInfo')}</span>
                      </div>
                      <ul className="space-y-5">
                        {infoLinks.map((item, idx) => (
                          <li key={`${item.label}-${idx}`}>
                            <Link
                              href={item.href}
                              onClick={() => setMegaOpen(false)}
                              className="group block"
                            >
                              <div className="text-[15px] font-semibold text-slate-900 group-hover:underline">{item.label}</div>
                              <div className="mt-0.5 text-[13px] leading-snug text-slate-500">{item.desc}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="hidden bg-gray-200 md:block" />

                    <div className="border-t border-gray-200 p-8 md:border-t-0">
                      <div className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-5">
                        <span className="text-xl">⚡</span>
                        <span className="text-[18px] font-bold tracking-tight text-slate-950">{t('megaColPlatforms')}</span>
                      </div>
                      <ul className="space-y-5">
                        {platformLinks.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setMegaOpen(false)}
                              className="group flex items-start gap-3"
                            >
                              <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`} />
                              <div>
                                <div className="text-[15px] font-semibold text-slate-900 group-hover:underline">{item.label}</div>
                                <div className="mt-0.5 text-[13px] leading-snug text-slate-500">{item.desc}</div>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/" className="flex shrink-0 items-center" onClick={() => setMegaOpen(false)}>
            <Image
              src="/bananay-logo-transparent.png"
              alt="Bananay"
              width={240}
              height={72}
              className="h-8 w-auto object-contain object-center"
              priority
              unoptimized
            />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <LoginDropdown t={t} config={config} locale={locale} />
        </div>
      </div>

    </header>
  );
}
