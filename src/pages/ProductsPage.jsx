import { ProductGrid } from '../sections/ProductGrid';
import { Contact } from '../sections/Contact';

export function ProductsPage() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 bg-[#2A1F17] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <span className="text-[#D4AF37] font-sans font-medium tracking-widest uppercase text-sm mb-4 block">Product Catalogue</span>
          <h1 className="font-serif text-5xl md:text-7xl max-w-5xl leading-tight">
            Premium spices and food ingredients for enterprise supply chains.
          </h1>
          <p className="font-sans text-white/75 text-lg md:text-xl max-w-3xl mt-8 leading-relaxed">
            Explore the Altius Global portfolio of Indian-origin spices, powders, seeds, and food ingredients prepared for international B2B trade.
          </p>
        </div>
      </section>
      <ProductGrid />
      <Contact />
    </>
  );
}
