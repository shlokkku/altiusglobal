export function BrandLogo({ light = false, compact = false }) {
  const logoSize = compact ? 'h-16 md:h-20 w-auto' : 'h-32 w-auto';
  const logoSrc = compact ? '/assets/altius-logo-mark-tiny.png' : '/assets/altius-logo-full-tiny.png';

  return (
    <img
      src={logoSrc}
      alt="Altius Global"
      width={compact ? '128' : '240'}
      height={compact ? '128' : '260'}
      decoding="async"
      className={`${logoSize} object-contain ${light ? 'drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]' : ''}`}
    />
  );
}
