import Image from 'next/image';
import { certificatesData } from '@/lib/certificates-data';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import type { Metadata } from 'next';

type CertificatePageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: CertificatePageProps): Promise<Metadata> {
  const certificate = certificatesData.find((c) => c.id === params.id);
  if (!certificate) {
    return {
      title: 'Certificado no encontrado',
    };
  }
  
  // A simple way to guess language from headers on the server.
  // This is not foolproof but works for this case.
  const acceptLanguage = headers().get('accept-language');
  const lang: 'es' | 'en' = acceptLanguage?.startsWith('es') ? 'es' : 'en';
  const title = certificate[lang]?.title || certificate['en'].title;

  return {
    title: `Certificado: ${title}`,
    description: `Visualización del certificado '${title}' obtenido por Juan Luzon.`,
  };
}

export async function generateStaticParams() {
  const paths = certificatesData.map((certificate) => ({
    id: certificate.id,
  }));
  return paths;
}

export default function CertificatePage({ params }: CertificatePageProps) {
  const certificate = certificatesData.find((c) => c.id === params.id);

  if (!certificate) {
    notFound();
  }
  
  const acceptLanguage = headers().get('accept-language');
  const lang: 'es' | 'en' = acceptLanguage?.startsWith('es') ? 'es' : 'en';
  const title = certificate[lang]?.title || certificate['en'].title;


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-background">
      <div className="relative w-full max-w-5xl aspect-[1.414]"> {/* A4 aspect ratio */}
        <Image
          src={certificate.imageUrl}
          alt={title}
          fill
          className="object-contain rounded-lg shadow-2xl"
        />
      </div>
    </main>
  );
}
