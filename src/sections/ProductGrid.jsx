import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { products } from '../data/products';

export function ProductGrid() {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading
          subtitle="Current Portfolio"
          title="Premium Food & Agricultural Commodities"
          centered
        />
        <p className="text-center text-[#4A3728]/70 max-w-2xl mx-auto font-sans mb-16">
          Our curated selection of enterprise-grade commodities, sourced under stringent quality controls to meet international regulatory standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={index * 0.03}>
              <article className="bg-white rounded-2xl overflow-hidden border border-[#4A3728]/10 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-[#B8860B]/10 h-full">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    width="900"
                    height="700"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#4A3728] uppercase tracking-wider">
                    Origin: {product.origin}
                  </div>
                </div>
                <div className="p-6 flex flex-col min-h-[210px]">
                  <h4 className="font-serif text-xl text-[#4A3728] mb-2 font-semibold">{product.name}</h4>
                  <p className="font-sans text-[#4A3728]/60 text-xs mb-4 uppercase tracking-wider">{product.category}</p>
                  <div className="flex items-center text-[#4A3728]/60 text-xs font-sans mb-6">
                    <CheckCircle2 className="w-3 h-3 mr-1 text-[#B8860B]" />
                    Export Quality Assured
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-[#4A3728]/10 mt-auto">
                    <span className="text-xs font-sans text-[#4A3728]/50">{product.hsCode ? `HS ${product.hsCode}` : 'B2B Supply'}</span>
                    <a href="#contact" className="text-sm font-sans font-medium text-white bg-[#4A3728] hover:bg-[#B8860B] px-4 py-2 rounded-lg transition-colors">
                      Quote
                    </a>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
