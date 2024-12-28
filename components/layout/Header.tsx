import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SynergiaOS
        </Link>
        <Navigation />
      </div>
    </header>
  );
} 