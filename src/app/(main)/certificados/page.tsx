'use client';
import { GraduationCap } from 'lucide-react';
import { certificatesData } from '@/lib/certificates-data';
import CertificateCard from '@/components/CertificateCard';
import { useLanguage } from '@/context/language-context';

export default function CertificatesPage() {
  const { t } = useLanguage();
  
  return (
    <main className="flex min-h-screen flex-col pt-24">
      <div className="w-full flex-grow">
        <section id="certificados" className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full py-16">
            <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 text-white/90 mb-12">
              <GraduationCap size={32} />
              {t('certificates.allTitle')}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificatesData.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
