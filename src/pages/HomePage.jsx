import { About } from '../sections/About';
import { Certifications } from '../sections/Certifications';
import { Contact } from '../sections/Contact';
import { Divisions } from '../sections/Divisions';
import { GlobalReach } from '../sections/GlobalReach';
import { Hero } from '../sections/Hero';
import { Process } from '../sections/Process';
import { WhyChooseUs } from '../sections/WhyChooseUs';

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Divisions />
      <WhyChooseUs />
      <GlobalReach />
      <Process />
      <Certifications />
      <Contact />
    </>
  );
}
