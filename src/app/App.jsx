import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { About } from '../sections/About';
import { Certifications } from '../sections/Certifications';
import { Contact } from '../sections/Contact';
import { Divisions } from '../sections/Divisions';
import { GlobalReach } from '../sections/GlobalReach';
import { Hero } from '../sections/Hero';
import { Process } from '../sections/Process';
import { ProductGrid } from '../sections/ProductGrid';
import { WhyChooseUs } from '../sections/WhyChooseUs';
import '../styles/theme.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E8DCC8] selection:bg-[#B8860B] selection:text-white font-sans text-[#4A3728]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Divisions />
        <ProductGrid />
        <WhyChooseUs />
        <GlobalReach />
        <Process />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
