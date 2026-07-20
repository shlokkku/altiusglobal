import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { brand } from '../data/site';
import { AnimatedTradeRoutes } from './AnimatedTradeRoutes';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0A0705]">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <video
          className="w-full h-full object-cover object-center opacity-55"
          src="/assets/landing-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex="-1"
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0A0705]/85 via-[#0A0705]/55 to-[#E8DCC8] pointer-events-none" />
      <div className="absolute inset-0 z-[2]">
        <AnimatedTradeRoutes />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-[10] text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#D4AF37]/30 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]" />
          <span className="text-sm font-sans font-medium text-white/90 tracking-[0.2em] uppercase">{brand.tagline}</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] max-w-5xl mb-8 drop-shadow-2xl">
          Connecting Global Markets Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#F4D068] to-[#D4AF37]">Trusted Trade</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl font-sans text-white/80 max-w-2xl mb-12 leading-relaxed drop-shadow-md"
        >
          Premium sourcing, international trade and reliable supply chain solutions connecting India with the world. A proud Dubai-based enterprise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button href="/#contact" icon className="shadow-[0_0_20px_rgba(184,134,11,0.3)] hover:shadow-[0_0_30px_rgba(184,134,11,0.5)]">
            Request Quotation
          </Button>
          <Button href="/products" primary={false} className="!text-white !border-white/30 hover:!bg-white/10 hover:!border-white/50 backdrop-blur-sm">
            Explore Products
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[10]"
      >
        <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4A3728]/60 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-[#4A3728]/20 overflow-hidden relative">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="w-full h-1/2 bg-[#B8860B] absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
