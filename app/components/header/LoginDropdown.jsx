'use client';

import { useCallback, useRef, useState } from 'react';
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { getLoginRoleLinks } from '@/app/lib/navigation/header-links';

function ChevronDown({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function LoginDropdown({ t, config, locale }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  useClickOutside(containerRef, close);

  const roles = getLoginRoleLinks(t, config, locale);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
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
              onClick={close}
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
