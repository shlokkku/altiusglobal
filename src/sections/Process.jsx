import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { processSteps } from '../data/processSteps';

export function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading subtitle="How We Work" title="Streamlined Procurement Process" centered />

        <div className="grid md:grid-cols-4 gap-8 relative mt-16">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

          {processSteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.15} className="relative z-10">
              <article className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-xl shadow-[#4A3728]/5 border border-[#4A3728]/10 flex items-center justify-center mb-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#B8860B] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <step.icon className="w-10 h-10 text-[#4A3728] relative z-10 group-hover:text-white transition-colors duration-500" />
                  <div className="absolute top-2 left-2 text-[10px] font-bold text-[#4A3728]/20 group-hover:text-white/20">0{index + 1}</div>
                </div>
                <h4 className="font-serif text-2xl text-[#4A3728] mb-3">{step.title}</h4>
                <p className="font-sans text-[#4A3728]/70 text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
