import HeroVideo from '../components/HeroVideo';
import ExperienceHero from '../components/ExperienceHero';
import QuickFilterBar from '../components/QuickFilterBar';
import FeaturedCarCard from '../components/FeaturedCarCard';
import PerformanceMetrics from '../components/PerformanceMetrics';
import ExperienceCard from '../components/ExperienceCard';
import BookingPreview from '../components/BookingPreview';
import CallToAction from '../components/CallToAction';
import { Car } from '../types/car';

const cars: Car[] = [
  {
    id: '1',
    name: 'Porsche 911 Cabriolet',
    image: '/images/911.jpg',
    horsepower: 450,
    topSpeed: 308,
    acceleration: 3.9,
    dailyRate: 450,
    rating: 4.9,
  },
  {
    id: '2',
    name: 'BMW M4 Convertible',
    image: '/images/m4.jpg',
    horsepower: 510,
    topSpeed: 280,
    acceleration: 4.1,
    dailyRate: 400,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Audi R8 Spyder',
    image: '/images/r8.jpg',
    horsepower: 602,
    topSpeed: 330,
    acceleration: 3.3,
    dailyRate: 650,
    rating: 4.9,
  },
];

export default function HomePage() {
  return (
    <main className="space-y-16">
      <HeroVideo />
      <ExperienceHero />
      <QuickFilterBar />
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {cars.map((car) => (
          <FeaturedCarCard key={car.id} car={car} />
        ))}
      </section>
      <PerformanceMetrics cars={cars} />
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        <ExperienceCard title="Furka Pass" image="/images/furka.jpg" description="Twisting high-alpine road" />
        <ExperienceCard title="St. Bernard" image="/images/bernard.jpg" description="Historic mountain pass" />
        <ExperienceCard title="Bernina" image="/images/bernina.jpg" description="Sweeping scenic views" />
      </section>
      <div className="max-w-3xl mx-auto px-4">
        <BookingPreview cars={cars} />
      </div>
      <CallToAction />
    </main>
  );
}
