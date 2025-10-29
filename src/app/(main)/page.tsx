'use server';

import HeroSection from '@/components/home/HeroSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import AboutSection from '@/components/home/AboutSection';
import CertificatesSection from '@/components/home/CertificatesSection';
import { getLanguage, getT } from '@/lib/language-server';

export default async function Home() {
  const language = await getLanguage();
  const t = await getT();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection language={language} t={t} />
      <ExperienceSection language={language} t={t} />
      <ProjectsSection language={language} t={t} />
      <AboutSection language={language} t={t} />
      <CertificatesSection language={language} t={t} />
    </main>
  );
}
