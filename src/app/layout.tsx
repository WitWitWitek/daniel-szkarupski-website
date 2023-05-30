import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from './components/Navbar/Navbar';
import './globals.scss';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Daniel Szkarupski',
  description: 'Kandydat nr 2 Konfederacji do Sejmu RP w wojewódzctwie opolskim',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <div id="fb-root" />
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v16.0"
          nonce="lCqYkqwv"
        />
        <Script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
      </body>
    </html>
  );
}
