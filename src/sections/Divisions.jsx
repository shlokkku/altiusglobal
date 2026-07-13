import { ArrowRight, Wheat } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';

export function Divisions() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white/40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="Business Divisions" title="Our Vertical Expertise" centered />

        <div className="max-w-4xl mx-auto mt-16">
          <FadeIn delay={0.1}>
            <a href="#products" className="group relative h-[460px] rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-[#4A3728]/5 border border-[#4A3728]/10 block">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop"
                alt="Food Commodities"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F17] via-[#2A1F17]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <Wheat className="w-10 h-10 text-[#D4AF37] mb-4" />
                <h3 className="font-serif text-3xl text-white mb-3">Food & Agriculture</h3>
                <p className="font-sans text-white/80 mb-6 max-w-sm">
                  Premium spices, grains, powders, and food ingredients sourced directly from certified Indian manufacturers.
                </p>
                <span className="inline-flex items-center text-[#D4AF37] font-medium font-sans group-hover:translate-x-2 transition-transform">
                  Explore Products <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
