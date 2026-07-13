import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/site';
import { BrandLogo } from '../ui/BrandLogo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#E8DCC8]/95 backdrop-blur-md py-4 shadow-sm border-b border-[#4A3728]/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="transition-transform hover:scale-[1.01]">
          <BrandLogo light={!scrolled} compact />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium transition-colors tracking-wide ${scrolled ? 'text-[#4A3728]/80 hover:text-[#B8860B]' : 'text-white/80 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-sans text-sm font-medium hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all hover:scale-105"
          >
            Get Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className={`lg:hidden transition-colors ${scrolled ? 'text-[#4A3728]' : 'text-white'}`}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#E8DCC8] border-b border-[#4A3728]/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4A3728] font-sans text-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white font-sans font-medium text-center"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
