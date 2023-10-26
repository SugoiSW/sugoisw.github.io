import Head from 'next/head';
import './global.css';

export const metadata = {
  title: 'SugoiSW Soluciones',
  description: 'Hecho con ❤️ por SugoiSW',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>SugoiSW</title>

        <link rel="SugoiSW" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Consulting, Software, Mobile Development, Web Development, Computer Vision, AI"
        />
        <meta
          name="description"
          content="Sugoisw es tu socio de confianza para soluciones de software de vanguardia. Nos especializamos en Desarrollo Móvil, Desarrollo Web, Visión por Computadora e Inteligencia Artificial, ofreciendo servicios innovadores y personalizados para ayudar a tu negocio a prosperar. Explora nuestra experiencia y déjanos llevar tu viaje digital al siguiente nivel."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content="SugoiSW" />

        <meta property="og:title" content="SugoiSW" />
        <meta
          property="og:description"
          content="Sugoisw es tu socio de confianza para soluciones de software de vanguardia. Nos especializamos en Desarrollo Móvil, Desarrollo Web, Visión por Computadora e Inteligencia Artificial, ofreciendo servicios innovadores y personalizados para ayudar a tu negocio a prosperar. Explora nuestra experiencia y déjanos llevar tu viaje digital al siguiente nivel."
        />
        <meta
          property="og:image"
          content="https://sugoisw.github.io/img/logo.webp"
        />
        <meta property="og:url" content="https://sugoisw.github.io/" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
