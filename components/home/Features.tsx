import { Feature } from '@/types';

const featuresData: Feature[] = [
  {
    title: 'AI Agenci',
    description: 'Stwórz inteligentnych agentów AI, którzy automatyzują zadania i wspierają Twój biznes.',
    icon: '/icons/ai-agent.svg',
  },
  {
    title: 'Automatyzacja Procesów',
    description: 'Zautomatyzuj powtarzalne procesy, aby zwiększyć efektywność i oszczędzić czas.',
    icon: '/icons/automation.svg',
  },
  {
    title: 'Integracje',
    description: 'Zintegruj swoje systemy i aplikacje, aby stworzyć spójne środowisko pracy.',
    icon: '/icons/integrations.svg',
  },
];

export default function Features() {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Nasze Kluczowe Funkcje
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8 mr-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 