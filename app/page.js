import NavBar from '@/components/navbar';
import NewsSection from '@/components/newssection';
import CampusSection from '@/components/campussection';

export default function HomePage() {
  return (
    <main>
      <NavBar/>
      <NewsSection />
      <CampusSection />
    </main>
  );
}