import { Globe } from 'lucide-react';
import { stats } from '../data/site';

export function GlobalReach() {
  return (
    <section id="global-network" className="py-24 md:py-32 relative overflow-hidden bg-[#2A1F17] text-white">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#D4AF37] font-sans font-medium tracking-widest uppercase text-sm mb-4 block">Global Footprint</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">Connecting Continents Through Commerce</h2>
            <p className="font-sans text-white/70 text-lg mb-12 max-w-xl leading-relaxed">
              From our headquarters in Dubai, our logistics network spans the Middle East, Africa, Europe, and beyond. We ensure seamless transit and strict compliance across international borders.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-2">{stat.value}</div>
                  <div className="font-sans text-sm tracking-wide text-white/60 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] w-full flex items-center justify-center">
            <div className="absolute w-full h-full border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[80%] h-[80%] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[60%] h-[60%] border border-[#D4AF37]/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <Globe className="w-32 h-32 text-[#D4AF37] absolute" strokeWidth={1} />
            <div className="absolute top-[20%] right-[30%] flex items-center justify-center">
              <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
              <div className="w-8 h-8 border border-[#D4AF37] rounded-full absolute animate-ping" />
              <span className="absolute -top-6 text-xs font-sans text-[#D4AF37] font-bold">Dubai HQ</span>
            </div>
            <div className="absolute bottom-[30%] right-[40%] flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="absolute -bottom-6 text-xs font-sans text-white/70">India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
