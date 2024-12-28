import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SynergiaOS - Inteligentna Automatyzacja dla Twojego Biznesu</title>
        <meta name="description" content="Tworzymy AI Agentów i automatyzujemy procesy, abyś mógł skupić się na rozwoju." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Inteligentna Automatyzacja<br />dla Twojego Biznesu
            </h1>
            <p className={styles.heroSubtitle}>
              Tworzymy AI Agentów i automatyzujemy procesy, abyś mógł skupić się na tym, co najważniejsze - rozwoju Twojej firmy.
            </p>
            <button className={styles.heroButton}>Bezpłatna Konsultacja</button>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/hero-image.png" // Przykładowa grafika - do zmiany
              alt="AI Agent"
              width={600}
              height={400}
            />
          </div>
        </section>

        {/* Pozostałe sekcje: Oferta, Dlaczego My?, Kontakt */}

      </main>
    </Layout>
  );
}
