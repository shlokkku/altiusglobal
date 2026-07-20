import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Contact } from '../sections/Contact';
import { GlobalReach } from '../sections/GlobalReach';
import { visionMission } from '../data/site';

const principles = [
  'Direct manufacturer and agricultural hub partnerships',
  'Compliance-led documentation and customs handling',
  'Long-term B2B relationships built on reliability',
  'Operational discipline across sourcing, quality, and logistics',
];

export function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-[#2A1F17] text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=55&w=1400&auto=format&fit=crop"
          alt="Dubai skyline"
          width="1600"
          height="900"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0705]/80 via-[#2A1F17]/80 to-[#2A1F17]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <span className="text-[#D4AF37] font-sans font-medium tracking-widest uppercase text-sm mb-4 block">About Altius Global</span>
          <h1 className="font-serif text-5xl md:text-7xl max-w-5xl leading-tight">
            Strategic international trade built on integrity, compliance, and operational excellence.
          </h1>
          <p className="font-sans text-white/75 text-lg md:text-xl max-w-3xl mt-8 leading-relaxed">
            From our UAE office, Altius Global connects trusted Indian manufacturers and suppliers with enterprise buyers across global markets.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[#E8DCC8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <article className="bg-white/70 border border-[#4A3728]/10 p-8 md:p-10 rounded-2xl">
              <span className="text-[#B8860B] font-sans font-medium tracking-widest uppercase text-xs mb-4 block">Vision</span>
              <h2 className="font-serif text-4xl text-[#4A3728] mb-6">A Trusted Global Trading Partner</h2>
              <p className="font-sans text-[#4A3728]/75 text-lg leading-relaxed">{visionMission.vision}</p>
            </article>
            <article className="bg-white/70 border border-[#4A3728]/10 p-8 md:p-10 rounded-2xl">
              <span className="text-[#B8860B] font-sans font-medium tracking-widest uppercase text-xs mb-4 block">Mission</span>
              <h2 className="font-serif text-4xl text-[#4A3728] mb-6">Simplifying Global Trade</h2>
              <p className="font-sans text-[#4A3728]/75 text-lg leading-relaxed">{visionMission.mission}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading subtitle="Operating Principles" title="Built for Serious B2B Trade" centered />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle) => (
              <div key={principle} className="border border-[#4A3728]/10 bg-[#E8DCC8]/40 p-6 rounded-2xl">
                <CheckCircle2 className="w-6 h-6 text-[#B8860B] mb-4" />
                <p className="font-sans text-[#4A3728]/75 leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalReach />
      <Contact />
    </>
  );
}
