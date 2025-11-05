import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Barlow } from "next/font/google";
import OrientationWarning from '@/components/OrientationWarning';
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800"],
  variable: "--font-barlow",
});

export const metadata = {
  title: 'SKWD',
  description: 'Wij verbinden gemotiveerde studenten met bedrijven voor feilloze events in heel België. Event staffing voor hospitality en logistiek.',
  icons: {
    icon: '/logo-skwd.png'
  },
  metadataBase: new URL('https://skwd.vercel.app'),
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>
        <main>
          <header>
            <Navbar />
          </header>
          <OrientationWarning />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}