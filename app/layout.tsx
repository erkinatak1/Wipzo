import type { Metadata } from 'next';
import Link from 'next/link';
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-raw',
});
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body-raw',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono-raw',
});

export const metadata: Metadata = {
  title: 'Wipzo Araç Kurutma Bezi | 800 GSM Twisted-Loop Mikrofiber',
  description:
    "Wipzo, 800 GSM twisted-loop mikrofiber araç kurutma bezi — tek geçişte kurutur, su izi bırakmaz. Denizli'de üretilir, %70 polyester / %30 poliamid, lazer kesim kenar.",
  keywords: [
    'araç kurutma bezi',
    'mikrofiber havlu',
    'twisted loop',
    'detailing bezi',
    'su izi bırakmayan bez',
  ],
  alternates: { canonical: 'https://wipzostore.com/' },
  openGraph: {
    type: 'website',
    title: 'Wipzo — Tek Bez. Sıfır İz.',
    description:
      '800 GSM twisted-loop mikrofiber araç kurutma bezi. Denizli üretimi, su izi bırakmaz.',
    url: 'https://wipzostore.com/',
    locale: 'tr_TR',
  },
  twitter: { card: 'summary_large_image' },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Wipzo Araç Kurutma Bezi',
  description:
    '800 GSM twisted-loop mikrofiber araç kurutma bezi, %70 polyester / %30 poliamid, lazer kesim kenar, 70x90 cm, Denizli üretimi.',
  brand: { '@type': 'Brand', name: 'Wipzo' },
  material: '70% Polyester, 30% Polyamide',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'TRY',
    price: '549.00',
    availability: 'https://schema.org/PreOrder',
    url: 'https://wipzostore.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}