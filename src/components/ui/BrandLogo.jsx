export function BrandLogo({ light = false, compact = false }) {
  const logoSize = compact ? 'h-16 md:h-20 w-auto' : 'h-32 w-auto';
  const logoSrc = compact ? '/assets/altius-logo-mark-small.png' : '/assets/altius-logo-full-small.png';

  return (
    <img
      src={logoSrc}
      alt="Altius Global"
      width={compact ? '220' : '420'}
      height={compact ? '220' : '460'}
      decoding="async"
      className={`${logoSize} object-contain ${light ? 'drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]' : ''}`}
    />
  );
}
