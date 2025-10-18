'use client';
import { Briefcase } from 'lucide-react';
import { experienceData } from '@/lib/experience-data';
import { useLanguage } from '@/context/language-context';

export default function ExperiencePage() {
  const { language, t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <div className="w-full flex-grow flex justify-center">
        <section id="experiencia" className="flex flex-col items-center px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl w-full py-16">
            <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 text-white/90 mb-12">
              <Briefcase size={32} />
              {t('experience.allTitle')}
            </h1>
            <div className="relative border-l-2 border-gray-700">
              {experienceData.map((item) => (
                <div key={item.id} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-3 h-3 bg-yellow-400 rounded-full -left-[7px] ring-4 ring-yellow-400/20"></span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-yellow-300">{item[language].title}</h3>
                  <p className="block mb-2 text-sm font-normal leading-none text-gray-400">{item[language].company}</p>
                  <p className="text-base font-normal text-gray-400">
                    {item[language].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
