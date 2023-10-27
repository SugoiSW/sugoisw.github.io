'use client';
import Head from 'next/head';
import './global.css';
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

export const metadata = {
  title: 'SugoiSW Soluciones',
  description:
    'Sugoisw es tu socio de confianza para soluciones de software de vanguardia. Nos especializamos en Desarrollo Móvil, Desarrollo Web, Visión por Computadora e Inteligencia Artificial, ofreciendo servicios innovadores y personalizados para ayudar a tu negocio a prosperar. Explora nuestra experiencia y déjanos llevar tu viaje digital al siguiente nivel',
  keywords:
    'Consulting, Software, Mobile Development, Web Development, Computer Vision, AI',
  creator: 'SugoiSW',
  authors: [{ name: 'bernardo' }],
  publisher: 'SugoiSW',
  openGraph: {
    title: 'SugoiSW',
    description:
      'Sugoisw es tu socio de confianza para soluciones de software de vanguardia. Nos especializamos en Desarrollo Móvil, Desarrollo Web, Visión por Computadora e Inteligencia Artificial, ofreciendo servicios innovadores y personalizados para ayudar a tu negocio a prosperar. Explora nuestra experiencia y déjanos llevar tu viaje digital al siguiente nivel',
    url: 'https://sugoisw.github.io/',
    siteName: 'SugoiSW',
    images: [
      {
        url: 'https://sugoisw.github.io/img/logo.png',
        width: 612,
        height: 612,
        alt: 'SugoiSW solutions',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize Mixpanel with your API token
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL || '', {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
    });
  }, []);
  return (
    <html lang="en">
      <Head>
        <link rel="SugoiSW" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
