import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/about" className="hover:text-gray-700">
            O nas
          </Link>
        </li>
        <li>
          <Link href="/offer" className="hover:text-gray-700">
            Oferta
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-700">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
} 