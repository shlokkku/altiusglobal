import { ChevronRight } from 'lucide-react';
import { brand } from '../../data/site';
import { BrandLogo } from '../ui/BrandLogo';

export function Footer() {
  return (
    <footer className="bg-[#2A1F17] pt-20 pb-10 border-t border-[#D4AF37]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <BrandLogo light />
            </div>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              {brand.tagline} Your premier multinational trading partner for enterprise-level commodity sourcing.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl text-white mb-6">Divisions</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li>Food & Agriculture</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-white mb-6">Company</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#global-network" className="hover:text-[#D4AF37] transition-colors">Global Network</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">Quality Assurance</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-white mb-6">Newsletter</h4>
            <p className="font-sans text-white/60 text-sm mb-4">Subscribe for global market insights.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Corporate Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full text-sm font-sans text-white focus:outline-none focus:border-[#D4AF37]" />
              <button type="button" aria-label="Subscribe" className="bg-[#D4AF37] text-[#2A1F17] px-4 py-2 rounded-lg hover:bg-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-white/40 text-xs">
            &copy; {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-white/40 text-xs">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
