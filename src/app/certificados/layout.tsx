import type {Metadata} from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Visualizador de Certificado',
  description: 'Visualización de un certificado de Juan Luzon.',
};

export default function CertificateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
