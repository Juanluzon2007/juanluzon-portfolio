'use client';
import { Code } from 'lucide-react';
import { projectsData } from '@/lib/projects-data';
import ProjectCard from '@/components/ProjectCard';
import { useLanguage } from '@/context/language-context';

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col pt-24">
      <div className="w-full flex-grow">
        <section id="proyectos" className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full py-16">
            <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 text-white/90 mb-12">
              <Code size={32} />
              {t('projects.allTitle')}
            </h1>
            <div className="space-y-16">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {/* Aquí se añadirán más proyectos en el futuro */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
