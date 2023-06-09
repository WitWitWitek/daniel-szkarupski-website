import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from './components/Navbar/Navbar';
import './globals.scss';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Daniel Szkarupski - Ruch Narodowy & Konfederacja',
  // description:
  //   'Kandydat nr 2 Konfederacji do Sejmu RP w wojewódzctwie opolskim. Konfederacja to jedyny antysystemowy wybór spoza układu okrągłego stołu (PiS, PO, SLD, PSL). Wielkie zjednoczenie środowisk wolnościowych, narodowych, patriotycznych i konserwatywnych - Szkarupski, Korwin, Winnicki, Braun, Kulesza, Bosak, Berkowicz, Tumanowicz, Mentzen.',
  description:
    'Opolski działacz narodowy, członek Młodzieży Wszechpolskiej i Ruchu Narodowego. Pasjonat fotografii. Absolwente Uniwersytetu Opolskiego na kierunku Filologia Angielska oraz studiów Geopolityka i Geostrategia.',
  // keywords:
  //   'Ruch Narodowy, Konfederacja, Patriotyzm, Województwo opolskie, Wybory do Sejmu i Senatu 2023, Konfederacja w wojewódzctwie opolskim, Ruch Narodowy w wojewódzctwie opolskim',
  keywords:
    'Ruch Narodowy, Konfederacja, Patriotyzm, Województwo opolskie, Konfederacja w wojewódzctwie opolskim, Ruch Narodowy w wojewódzctwie opolskim',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
      </body>
    </html>
  );
}
