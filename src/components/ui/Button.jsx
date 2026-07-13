import { ChevronRight } from 'lucide-react';

export function Button({ children, primary = true, className = '', icon = false, href }) {
  const baseStyle = 'inline-flex items-center justify-center px-8 py-4 rounded-xl font-sans font-medium tracking-wide transition-all duration-300 shadow-sm hover:shadow-xl';
  const primaryStyle = 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white hover:scale-[1.02] border border-transparent';
  const secondaryStyle = 'bg-transparent text-[#4A3728] border border-[#4A3728]/20 hover:bg-[#4A3728]/5';
  const classes = `${baseStyle} ${primary ? primaryStyle : secondaryStyle} ${className}`;
  const content = (
    <>
      {children}
      {icon && <ChevronRight className="ml-2 w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return <button className={classes}>{content}</button>;
}
