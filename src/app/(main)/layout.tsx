import Header from '@/components/Header';
import FloatingNav from '@/components/FloatingNav';
import SocialLinks from '@/components/SocialLinks';
import { Toaster } from "@/components/ui/toast";
import ClientOnly from '@/components/ClientOnly';
import type { Metadata } from 'next';
import MobileNav from '@/components/MobileNav';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.juanluzon.com'), // Reemplaza con tu dominio de Netlify o dominio final
  title: 'Juan Luzon | Desarrollador de Software y Creador de Contenido',
  description: 'Portafolio de Juan Luzon, estudiante de Ingeniería de Software apasionado por el desarrollo de aplicaciones web con Next.js, React y Tailwind CSS. Descubre mis proyectos y habilidades.',
  keywords: ['Juan Luzon', 'portafolio', 'desarrollador de software', 'ingeniería de software', 'Next.js', 'React', 'TypeScript', 'desarrollador web', 'República Dominicana', 'creador de contenido'],
  authors: [{ name: 'Juan Luzon', url: 'https://www.juanluzon.com' }],
  creator: 'Juan Luzon',
  
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: '/',
    title: 'Juan Luzon | Desarrollador de Software y Creador de Contenido',
    description: 'Explora el portafolio de un apasionado estudiante de Ingeniería de Software de República Dominicana, especializado en crear aplicaciones web modernas.',
    siteName: 'Portafolio de Juan Luzon',
    images: [
      {
        url: '/og-image.png', // Asegúrate de tener una imagen en public/og-image.png (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Juan Luzon - Portafolio de Desarrollador de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Luzon | Desarrollador de Software y Creador de Contenido',
    description: 'Desarrollador de software especializado en aplicaciones web con Next.js y React. Apasionado por la tecnología y la creación de soluciones innovadoras.',
    creator: '@juanluzon_dev',
    images: ['/og-image.png'], // La misma imagen que en Open Graph
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
