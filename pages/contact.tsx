import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/forms/ContactForm';
import { SEOMetadata, ContactFormData } from '@/types';
import { useState } from 'react';

const seoMetadata: SEOMetadata = {
  title: 'Kontakt - SynergiaOS',
  description: 'Skontaktuj się z nami i rozpocznij automatyzację swojego biznesu.',
};

export default function Contact() {
  const [agentResponse, setAgentResponse] = useState<string | null>(null);

  const handleFormSubmit = async (formData: ContactFormData) => {
    try {
      const response = await fetch('/api/agent/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: formData.message, context: 'Contact Form' }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setAgentResponse(`Error: ${errorData.message}`);
        return;
      }

      const data = await response.json();
      setAgentResponse(data.answer);
    } catch (error) {
      setAgentResponse(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <Layout>
      <Head>
        <title>{seoMetadata.title}</title>
        <meta name="description" content={seoMetadata.description} />
      </Head>

      <section className="container py-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
          <ContactForm onSubmit={handleFormSubmit} />
          {agentResponse && <p className="mt-4">{agentResponse}</p>}
        </div>
      </section>
    </Layout>
  );
} 