import { brand } from '../../data/site';

export function BrandLogo({ light = false, compact = false }) {
  const textColor = light ? 'text-white' : 'text-[#4A3728]';
  const mutedColor = light ? 'text-white/60' : 'text-[#4A3728]/60';

  return (
    <div className="flex items-center gap-3">
      <svg className="h-11 w-11 shrink-0" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="altius-logo-gold" x1="12" y1="54" x2="52" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8F6A1F" />
            <stop offset="0.52" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#F4D068" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="31" r="25" fill="none" stroke="url(#altius-logo-gold)" strokeWidth="1.4" opacity="0.55" />
        <path d="M11 47c15-11 29-17 42-18" fill="none" stroke="url(#altius-logo-gold)" strokeWidth="5" strokeLinecap="round" />
        <path d="M18 48 34 13l16 35h-8l-8-18-8 18h-8Z" fill="url(#altius-logo-gold)" />
        <path d="M32 48h4V37h-4v11Zm-7 0h4v-8h-4v8Zm14 0h4V34h-4v14Z" fill="#8F6A1F" opacity="0.8" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-serif text-2xl md:text-3xl font-semibold tracking-[0.28em] ${textColor}`}>
          {brand.name}
        </span>
        <span className="font-sans text-[10px] md:text-xs text-[#B8860B] tracking-[0.42em] uppercase">
          {brand.suffix}
        </span>
        {!compact && (
          <span className={`mt-2 font-sans text-[9px] tracking-[0.24em] uppercase ${mutedColor}`}>
            {brand.tagline}
          </span>
        )}
      </div>
    </div>
  );
}
