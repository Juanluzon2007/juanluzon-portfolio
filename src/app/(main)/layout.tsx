import Header from '@/components/Header';
import FloatingNav from '@/components/FloatingNav';
import SocialLinks from '@/components/SocialLinks';
import { Toaster } from "@/components/ui/toast";
import ClientOnly from '@/components/ClientOnly';
import type { Metadata } from 'next';
import MobileNav from '@/components/MobileNav';

export const metadata: Metadata = {
  title: 'Juan Luzon | Portafolio de Desarrollador de Software',
  description: 'Portafolio de Juan Luzon, estudiante de Ingeniería de Software apasionado por el desarrollo de aplicaciones web. Descubre mis proyectos y habilidades.',
  keywords: ['Juan Luzon', 'portafolio', 'desarrollador', 'ingeniería de software', 'Next.js', 'React', 'TypeScript', 'República Dominicana'],
  authors: [{ name: 'Juan Luzon' }],
  creator: 'Juan Luzon',
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: 'https://www.juanluzon.com', // Reemplazar con tu dominio
    title: 'Juan Luzon | Portafolio de Desarrollador de Software',
    description: 'Explora los proyectos y la experiencia de Juan Luzon, un apasionado estudiante de Ingeniería de Software de República Dominicana.',
    siteName: 'Portafolio de Juan Luzon',
    images: [
      {
        url: '/og-image.png', // Asegúrate de tener una imagen en public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Juan Luzon - Portafolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Luzon | Portafolio de Desarrollador',
    description: 'Desarrollador de software especializado en aplicaciones web con Next.js y React.',
    creator: '@juanluzon_dev',
    images: ['/og-image.png'], // Asegúrate de tener una imagen en public/og-image.png
  },
};


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <ClientOnly>
        <Header />
        <FloatingNav />
        <MobileNav />
      </ClientOnly>
      <div>
        {children}
      </div>
      <footer className="w-full py-8 text-sm text-gray-400">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Juan Luzon. Todos los derechos reservados.</p>
            <p>Hecho con <span className="text-yellow-300">Next.js</span> y <span className="text-yellow-300">Tailwind CSS</span>.</p>
          </div>
          <ClientOnly>
            <SocialLinks />
          </ClientOnly>
        </div>
      </footer>
      <Toaster />
    </>
  );

}
