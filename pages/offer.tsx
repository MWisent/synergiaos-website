import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { SEOMetadata } from '@/types';

const seoMetadata: SEOMetadata = {
  title: 'Oferta - SynergiaOS',
  description: 'Poznaj nasze rozwiązania w zakresie automatyzacji i AI.',
};

export default function Offer() {
  return (
    <Layout>
      <Head>
        <title>{seoMetadata.title}</title>
        <meta name="description" content={seoMetadata.description} />
      </Head>

      <section className="container py-20">
        <h1 className="text-4xl font-bold mb-12">Nasze Rozwiązania</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dodaj karty z ofertami */}
        </div>
      </section>
    </Layout>
  );
} 