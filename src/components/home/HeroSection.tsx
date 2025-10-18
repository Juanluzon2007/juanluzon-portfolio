'use client';

import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import { heroContent } from '@/lib/home-data';

export default function HeroSection() {
  const { language, t } = useLanguage();
  const content = heroContent[language];

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pb-16 pt-24 text-center"
    >
      <div className="max-w-3xl w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={heroContent.imageUrl}
              alt={content.imageAlt}
              fill
              className="object-cover"
              data-ai-hint="man portrait"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-gray-800/90 px-3 py-1 text-xs text-green-300 border border-green-400/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {content.available}
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 text-white">{content.title}</h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300" dangerouslySetInnerHTML={{ __html: content.description }} />
        <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
          <a href={`mailto:${heroContent.contactEmail}`} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 px-4 py-2 rounded-full">
            {t('contact.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
