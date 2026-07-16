import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { features } from '../data/features';

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-white/40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="The Altius Advantage" title="Why Partner With Us" centered />

        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:snap-none md:gap-8 mt-16">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.08} className="min-w-[82vw] snap-start md:min-w-0">
              <article className="bg-white p-8 rounded-2xl border border-[#4A3728]/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-1 h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B]/10 to-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-[#B8860B]" />
                </div>
                <h4 className="font-serif text-xl text-[#4A3728] mb-3">{feature.title}</h4>
                <p className="font-sans text-[#4A3728]/70 text-sm leading-relaxed">{feature.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
