'use server';

import { Code } from 'lucide-react';
import { projectsData } from '@/lib/projects-data';
import ProjectCard from '@/components/ProjectCard';
import type { Language, TFunction } from '@/context/language-context';

type Props = {
  language: Language;
  t: TFunction;
};

export default async function ProjectsSection({ language, t }: Props) {
  const featuredProjects = projectsData.filter((p) => p.isFeatured);

  return (
    <section id="projects" className="w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-2 text-white/90 mb-12">
          <Code size={24} />
          {t('projects.title')}
        </h2>
        <div className="space-y-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} language={language} t={t} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="/proyectos" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 px-4 py-2 rounded-full">
            {t('projects.seeAll')}
          </a>
        </div>
      </div>
    </section>
  );
}
