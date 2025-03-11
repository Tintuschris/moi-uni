import NavBar from '@/components/navbar';
import HeroSection from '@/components/herosection';
import NewsSection from '@/components/newssection';
import CampusSection from '@/components/campussection';
import AboutSection from '@/components/aboutsection';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <main>
      <NavBar/>
      <HeroSection />
      <NewsSection />
      <CampusSection />
      <AboutSection />
      <Footer />
    </main>
  );
}