export function BrandLogo({ light = false, compact = false }) {
  const logoSize = compact ? 'h-16 md:h-20 w-auto' : 'h-32 w-auto';

  return (
    <img
      src="/assets/altius-logo-transparent.png"
      alt="Altius Global"
      className={`${logoSize} object-contain ${light ? 'drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]' : ''}`}
    />
  );
}
