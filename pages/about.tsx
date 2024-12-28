import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { SEOMetadata } from '@/types';

const seoMetadata: SEOMetadata = {
  title: 'O nas - SynergiaOS',
  description: 'Poznaj zespół SynergiaOS i naszą misję automatyzacji procesów biznesowych.',
};

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{seoMetadata.title}</title>
        <meta name="description" content={seoMetadata.description} />
      </Head>

      <section className="container py-20">
        <h1 className="text-4xl font-bold mb-8">O nas</h1>
        <div className="prose max-w-none">
          <p className="text-xl mb-6">
            SynergiaOS to zespół ekspertów specjalizujących się w automatyzacji procesów biznesowych
            z wykorzystaniem sztucznej inteligencji.
          </p>
          {/* Add more content here */}
        </div>
      </section>
    </Layout>
  );
} 