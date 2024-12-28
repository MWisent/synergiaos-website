import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface AgentQuestion {
  question: string;
  context?: string;
  userId?: string;
}

export interface AgentResponse {
  answer: string;
  confidence: number;
  sources?: string[];
  error?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface CallToActionSection {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
} 