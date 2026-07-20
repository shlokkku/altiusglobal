import { Globe } from 'lucide-react';

export function GlobalReach() {
  return (
    <section id="global-network" className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-[#2A1F17] text-white">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-[#D4AF37] font-sans font-medium tracking-widest uppercase text-sm mb-4 block">Global Footprint</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 leading-tight">Connecting Continents Through Commerce</h2>
            <p className="font-sans text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
              From our UAE office, our logistics network spans the Middle East, Africa, Europe, and beyond. We ensure seamless transit and strict compliance across international borders.
            </p>
          </div>

          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            <div className="absolute w-full h-full border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[80%] h-[80%] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[60%] h-[60%] border border-[#D4AF37]/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <Globe className="w-24 h-24 sm:w-32 sm:h-32 text-[#D4AF37] absolute" strokeWidth={1} />
            <div className="absolute top-[20%] right-[30%] flex items-center justify-center">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
              <div className="w-8 h-8 border border-[#D4AF37] rounded-full absolute animate-ping" />
              <span className="absolute -top-7 text-xs font-sans text-[#D4AF37] font-bold whitespace-nowrap">Dubai HQ</span>
            </div>
            <div className="absolute bottom-[30%] right-[40%] flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="absolute -bottom-7 text-xs font-sans text-white/70 whitespace-nowrap">India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
