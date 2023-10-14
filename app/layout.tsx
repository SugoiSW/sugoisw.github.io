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
        <link rel="SugoiSW" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
