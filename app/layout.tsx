import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Py-Crafters | Tech Company',
  description: 'Crafting digital solutions with Python and beyond.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FDFDFB] text-[#2D2A26] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}