import { motion } from 'framer-motion';

export function SectionHeading({ subtitle, title, centered = false, light = false }) {
  return (
    <div className={`mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-[#B8860B] font-sans font-medium tracking-widest uppercase text-sm mb-4 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-4xl md:text-5xl lg:text-6xl font-serif leading-tight ${
          light ? 'text-white' : 'text-[#4A3728]'
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
}
