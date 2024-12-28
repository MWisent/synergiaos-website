import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">SynergiaOS</h3>
          <p className="text-gray-600">
            Inteligentna automatyzacja dla Twojego biznesu
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Firma</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-gray-600 hover:text-gray-900">O nas</Link></li>
            <li><Link href="/offer" className="text-gray-600 hover:text-gray-900">Oferta</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Rozwiązania</h4>
          <ul className="space-y-2">
            <li><Link href="/ai-agent" className="text-gray-600 hover:text-gray-900">AI Agent</Link></li>
            <li><Link href="/automation" className="text-gray-600 hover:text-gray-900">Automatyzacja</Link></li>
            <li><Link href="/integrations" className="text-gray-600 hover:text-gray-900">Integracje</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Kontakt</h4>
          <address className="text-gray-600 not-italic">
            <p>Email: kontakt@synergiaos.pl</p>
            <p>Tel: +48 123 456 789</p>
          </address>
        </div>
      </div>
      
      <div className="border-t border-gray-100">
        <div className="container py-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} SynergiaOS. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
} 