import { LayoutProps } from '@/types';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.variable} min-h-screen flex flex-col font-sans bg-black text-white`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}