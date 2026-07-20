import { Globe } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <SectionHeading subtitle="Who We Are" title="A Legacy of Global Sourcing & Distribution" />
            <div className="space-y-6 font-sans text-[#4A3728]/80 text-lg leading-relaxed">
              <p>
                Altius Global is a premier international trading company headquartered in the strategic business hub of Dubai. We specialize in identifying, sourcing, and exporting enterprise-grade commodities from trusted Indian manufacturers to global markets.
              </p>
              <p>
                Our vision extends beyond simple transactions; we aim to be the definitive long-term trading partner for multinational corporations, ensuring uncompromised quality, strict compliance, and a resilient supply chain.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-[#4A3728]/10">
                <div>
                  <h4 className="font-serif text-2xl text-[#4A3728] mb-2">Dubai</h4>
                  <p className="text-sm">Global Headquarters & Strategic Trade Hub</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#4A3728] mb-2">India</h4>
                  <p className="text-sm">Primary Sourcing & Quality Control Base</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-[#4A3728]/10">
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=55&w=1200&auto=format&fit=crop"
              alt="Dubai Global Headquarters"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F17] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <Globe className="w-8 h-8 text-[#D4AF37] mb-4" />
                <h3 className="font-serif text-2xl mb-2">Strategic Location</h3>
                <p className="font-sans text-sm text-white/80">Operating from the UAE gives us unparalleled access to markets in the Middle East, Africa, and Europe.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
