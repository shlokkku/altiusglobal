import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import '../styles/theme.css';

export default function App() {
  const pathname = window.location.pathname;
  const Page = pathname === '/about' ? AboutPage : pathname === '/products' ? ProductsPage : HomePage;

  return (
    <div className="min-h-screen bg-[#E8DCC8] selection:bg-[#B8860B] selection:text-white font-sans text-[#4A3728]">
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
