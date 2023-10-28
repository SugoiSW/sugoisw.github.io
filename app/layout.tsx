'use client';
import './global.css';
import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   // Initialize Mixpanel with your API token
  //   mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL || '', {
  //     debug: true,
  //     track_pageview: true,
  //     persistence: 'localStorage',
  //   });
  // }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
