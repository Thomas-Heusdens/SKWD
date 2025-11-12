'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/fr' || pathname === '/nl';

  return (
    <>
      {children}
      {!isHomePage && <Footer />}
    </>
  );
}