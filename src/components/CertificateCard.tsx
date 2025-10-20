import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { Certificate } from '@/lib/certificates-data';
import { useLanguage } from '@/context/language-context';

type CertificateCardProps = {
  certificate: Certificate;
};

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const { language, t } = useLanguage();
  const { href } = certificate;
  const currentCertificate = certificate[language];

  return (
    <div className="w-full flex justify-center">
      <div className="block w-full group">
        <div
          className="relative rounded-lg flex items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-105"
          style={{
            boxShadow: '0 0 0 5px rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="w-full h-full [transform-style:preserve-3d]">
            <Image
              src={certificate.imageUrl}
              alt={currentCertificate.title}
              width={1280}
              height={905}
              className="w-full h-auto object-contain transition-transform duration-700 "
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full p-4 box-border bg-gradient-to-br from-purple-900/80 to-blue-900/70 flex flex-col justify-center items-center text-center transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] [transform-style:preserve-3d] [transform-origin:bottom] opacity-0 group-hover:opacity-100"
          >
            <p className="m-0 text-base sm:text-lg font-bold text-white">{currentCertificate.title}</p>
            <p className="mt-2 text-xs text-gray-300 line-clamp-3 px-2">{currentCertificate.description}</p>
            
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-2 text-xs text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full"
              >
                <ExternalLink size={12} />
                {t('certificates.credentialButton')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
