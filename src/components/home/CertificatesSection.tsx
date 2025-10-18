'use client';

import { GraduationCap } from 'lucide-react';
import CertificateCard from '@/components/CertificateCard';
import { certificatesData } from '@/lib/certificates-data';
import { useLanguage } from '@/context/language-context';

export default function CertificatesSection() {
  const { t } = useLanguage();
  const featuredCertificates = certificatesData.filter((c) => c.isFeatured);

  return (
    <section id="certificates" className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-white/90 mb-12">
          <GraduationCap size={24} />
          {t('certificates.featuredTitle')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
        <div className="text-center mt-16">
            <a href="/certificados" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 px-4 py-2 rounded-full">
                {t('certificates.seeAll')}
            </a>
        </div>
      </div>
    </section>
  );
}
