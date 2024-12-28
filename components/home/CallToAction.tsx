import Link from 'next/link';
import { CallToActionSection } from '@/types';

const callToActionData: CallToActionSection = {
  title: 'Gotowy na automatyzację?',
  subtitle: 'Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej firmie.',
  buttonText: 'Skontaktuj się',
  buttonLink: '/contact',
};

export default function CallToAction() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">{callToActionData.title}</h2>
        <p className="text-xl mb-8 text-gray-700">{callToActionData.subtitle}</p>
        <Link
          href={callToActionData.buttonLink}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          {callToActionData.buttonText}
        </Link>
      </div>
    </section>
  );
} 