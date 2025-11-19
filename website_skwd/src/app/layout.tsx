import Navbar from '@/components/Navbar';
import { Barlow } from "next/font/google";
import OrientationWarning from '@/components/OrientationWarning';
import "./globals.css";
import LayoutClient from '@/components/LayoutClient';
import Script from "next/script";

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
  metadataBase: new URL('https://skwd.be'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <head>
        {/* META PIXEL CODE */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1523562288959114');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* NO-JS FALLBACK (BELANGRIJK VOOR META) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1523562288959114&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className={`${barlow.variable} antialiased`}>
        <main>
          <header>
            <Navbar />
          </header>
          <OrientationWarning />
          <LayoutClient>{children}</LayoutClient>
        </main>
      </body>

    </html>
  );
}