export function BrandLogo({ light = false, compact = false }) {
  const logoSize = compact ? 'h-16 md:h-20 w-auto' : 'h-32 w-auto';
  const logoSrc = compact ? '/assets/altius-logo-mark.png' : '/assets/altius-logo-transparent.png';

  return (
    <img
      src={logoSrc}
      alt="Altius Global"
      className={`${logoSize} object-contain ${light ? 'drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]' : ''}`}
    />
  );
}
