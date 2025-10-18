'use client';
import { useState, useEffect } from 'react';
import './globals.css';
import { Toaster, ToastProvider } from '@/components/ui/toast';
import { LanguageProvider } from '@/context/language-context';
import LoadingScreen from '@/components/LoadingScreen';
import { cn } from '@/lib/utils';
import ClientOnly from '@/components/ClientOnly';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Juan Luzon | Portafolio</title>
        <meta name="description" content="Portafolio de Juan Luzon, estudiante de Ingeniería de Software apasionado por el desarrollo web." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <LanguageProvider>
          {loading && <LoadingScreen />}
          <div className={cn("transition-opacity duration-300", loading ? 'opacity-0' : 'opacity-100')}>
            <ClientOnly>
              <ToastProvider>
                {children}
                <Toaster />
              </ToastProvider>
            </ClientOnly>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
