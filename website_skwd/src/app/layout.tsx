import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800"], // Light, Medium, SemiBold, ExtraBold
  variable: "--font-barlow",
});

export const metadata = {
  title: 'SKWD',
  description: 'SKWD – Connecting motivated students with professional events and businesses.',
  icons: {
    icon: '/logo-skwd.png'
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>
        <main>
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}