'use client';

import HeroSection from '@/components/home/HeroSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import AboutSection from '@/components/home/AboutSection';
import CertificatesSection from '@/components/home/CertificatesSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <CertificatesSection />
    </main>
  );
}
