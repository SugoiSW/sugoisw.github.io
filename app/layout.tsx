'use client';
import './global.css';
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize Mixpanel with your API token
    console.log(process.env.NEXT_PUBLIC_MIXPANEL);
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL || '', {
      track_pageview: true,
      persistence: 'localStorage',
    });
  }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
