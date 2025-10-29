'use server';

import { User } from 'lucide-react';
import { aboutContent } from '@/lib/home-data';
import type { Language, TFunction } from '@/context/language-context';

type Props = {
  language: Language;
  t: TFunction;
};

export default async function AboutSection({ language, t }: Props) {
  const content = aboutContent[language];

  return (
    <section id="about-me" className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-white/90 mb-8">
          <User size={24} />
          {content.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 flex items-center justify-center order-1 md:order-2">
            <div className="p-2 bg-gray-900/80 rounded-lg transform -rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105 w-full max-w-xs">
              <video
                src={aboutContent.videoUrl}
                title={content.videoAlt}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4 text-base sm:text-lg text-gray-300 order-2 md:order-1">
             {content.paragraphs.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
             ))}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white/90 mb-4">{content.skillsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.technologies.map((tech) => (
                    <a 
                      href={tech.url}
                      key={tech.name} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800/50 text-white text-sm font-semibold px-3 py-1 rounded-full border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 cursor-pointer"
                    >
                      {tech.name}
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
