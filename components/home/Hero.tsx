import { HeroSection } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const heroData: HeroSection = {
  title: 'Automatyzacja Nowej Generacji',
  subtitle: 'Wykorzystaj potencjał AI do optymalizacji procesów w Twojej firmie',
  ctaText: 'Rozpocznij teraz',
  ctaLink: '/contact',
  backgroundImage: '/images/hero-bg.jpg'
};

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroData.backgroundImage ?? "/images/default-bg.jpg"}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 text-white">
            {heroData.title}
          </h1>
          <p className="text-xl mb-8 text-white/90">
            {heroData.subtitle}
          </p>
          <Link 
            href={heroData.ctaLink}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            {heroData.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
} 