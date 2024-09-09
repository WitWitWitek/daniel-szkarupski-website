import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar/Navbar";
import "./globals.scss";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Daniel Szkarupski - Ruch Narodowy & Konfederacja",
  description:
    "Kandydat nr 2 Konfederacji do Sejmu RP w woj. opolskim. Konfederacja to jedyny antysystemowy wybór spoza układu okrągłego stołu (PiS, PO, SLD, PSL).",
  keywords:
    "polityka, samorząd, sejmik, patriotyzm, Ruch Narodowy, Konfederacja, patriotyzm, województwo opolskie, wybory, Opole, Nysa, Brzeg, Opolszczyzna",
  openGraph: {
    title: "Daniel Szkarupski - Ruch Narodowy & Konfederacja",
    description:
      "Kandydat nr 2 Konfederacji do Sejmu RP w woj. opolskim. Konfederacja to jedyny antysystemowy wybór spoza układu okrągłego stołu (PiS, PO, SLD, PSL).",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "KfG_6UiQAA_XZvxM_c2PGYluzLiGOmv9Re4rMR0Rals",
  },
  alternates: {
    canonical: "https://daniel-szkarupski.pl",
  },
  metadataBase: new URL("https://daniel-szkarupski.pl"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl-PL">
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
