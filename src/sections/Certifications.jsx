import { Award } from 'lucide-react';
import { certifications } from '../data/site';

export function Certifications() {
  return (
    <section className="py-16 border-y border-[#4A3728]/10 bg-white/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-2">
              <Award className="w-6 h-6 text-[#B8860B]" />
              <span className="font-serif font-bold text-[#4A3728] tracking-widest">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
