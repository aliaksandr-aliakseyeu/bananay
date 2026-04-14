'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getLinkTargetProps } from '@/app/lib/navigation/url-utils';

function LandingHeroAction({ action }) {
  if (!action) {
    return null;
  }

  if (action.kind === 'button') {
    return (
      <button
        type={action.type || 'button'}
        onClick={action.onClick}
        className={action.className}
      >
        {action.label}
      </button>
    );
  }

  if (action.internal) {
    return (
      <Link href={action.href} className={action.className}>
        {action.label}
      </Link>
    );
  }

  return (
    <a href={action.href} className={action.className} {...getLinkTargetProps(action.href)}>
      {action.label}
    </a>
  );
}

export function LandingHero({
  imageSrc,
  imageAlt = '',
  overlayClassName,
  label,
  title,
  text,
  primaryAction,
  secondaryAction,
  imageClassName,
  contentClassName = 'max-w-2xl',
  titleClassName = 'text-3xl font-semibold leading-[1.02] tracking-tight text-white md:text-5xl',
  textClassName = 'mt-5 max-w-xl text-base leading-7 text-white/90 md:text-lg',
}) {
  return (
    <section className="relative h-[56vh] min-h-[360px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={imageClassName}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />

      <div className="relative z-10 flex h-full items-center py-8">
        <div className="section-container w-full">
          <div className={contentClassName}>
            {label ? <div className="section-eyebrow-light mb-5">{label}</div> : null}
            <h1 className={titleClassName}>{title}</h1>
            {text ? <p className={textClassName}>{text}</p> : null}
            {(primaryAction || secondaryAction) && (
              <div className="mt-7 flex flex-wrap items-center gap-5">
                <LandingHeroAction action={primaryAction} />
                <LandingHeroAction action={secondaryAction} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
