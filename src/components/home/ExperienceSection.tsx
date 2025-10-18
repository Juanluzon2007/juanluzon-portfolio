'use client';

import { Briefcase } from 'lucide-react';
import { experienceData } from '@/lib/experience-data';
import { useLanguage } from '@/context/language-context';

export default function ExperienceSection() {
  const { language, t } = useLanguage();
  const featuredExperience = experienceData.filter((e) => e.isFeatured);

  return (
    <section
      id="experience"
      className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pb-16"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-white/90 mb-8">
          <Briefcase size={24} />
          {t('experience.title')}
        </h2>
        <div className="relative border-l-2 border-gray-700">
          {featuredExperience.map((item) => (
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
        <div className="text-center mt-8">
            <a href="/experiencia" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 px-4 py-2 rounded-full">
                {t('experience.seeAll')}
            </a>
        </div>
      </div>
    </section>
  );
}
