import { motion } from 'framer-motion';

export function AnimatedTradeRoutes() {
  const routes = [
    { d: 'M 1600,600 C 1100,800 600,100 -100,300', stroke: '#D4AF37', width: 6, length: 0.15, duration: 8, delay: 0 },
    { d: 'M 900,-100 C 800,400 400,700 -100,900', stroke: '#B8860B', width: 10, length: 0.1, duration: 7, delay: 2.5 },
    { d: 'M -200,100 C 300,-100 1100,300 1600,800', stroke: '#D4AF37', width: 4, length: 0.2, duration: 11, delay: 1 },
    { d: 'M -100,600 C 300,700 500,200 800,500 S 1300,900 1600,400', stroke: '#B8860B', width: 8, length: 0.12, duration: 9, delay: 4 },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full opacity-60" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {routes.map((route) => (
          <motion.path
            key={route.d}
            d={route.d}
            fill="transparent"
            stroke={route.stroke}
            strokeWidth={route.width}
            strokeLinecap="round"
            filter="url(#route-glow)"
            initial={{ pathLength: route.length, pathOffset: 1, opacity: 0 }}
            animate={{ pathOffset: [1, -route.length], opacity: [0, 1, 1, 0] }}
            transition={{ duration: route.duration, repeat: Infinity, ease: 'linear', delay: route.delay }}
          />
        ))}
      </svg>
    </div>
  );
}
