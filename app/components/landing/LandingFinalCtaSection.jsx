'use client';

import { getLinkTargetProps } from '@/app/lib/navigation/url-utils';

function SecondaryActionButton({ action }) {
  if (!action) {
    return null;
  }

  if (action.kind === 'button') {
    return (
      <button type={action.type || 'button'} onClick={action.onClick} className={action.className}>
        {action.label}
      </button>
    );
  }

  return (
    <a href={action.href} className={action.className} {...getLinkTargetProps(action.href)}>
      {action.label}
    </a>
  );
}

export function LandingFinalCtaSection({
  label,
  title,
  text,
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="bg-white">
      <div className="section-container py-20">
        <div className="max-w-4xl py-2">
          <div className="section-eyebrow mb-4">{label}</div>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={primaryAction.href} className={primaryAction.className} {...getLinkTargetProps(primaryAction.href)}>
              {primaryAction.label}
            </a>
            <SecondaryActionButton action={secondaryAction} />
          </div>
        </div>
      </div>
    </section>
  );
}
