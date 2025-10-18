import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects-data';
import { useLanguage } from '@/context/language-context';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage();
  const currentProject = project[language];

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 md:order-1">
        <Image
          src={project.imageUrl}
          alt={currentProject.title}
          fill
          className="object-cover"
          data-ai-hint={project.imageHint}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      <div className="md:order-2">
        <h3 className="text-xl font-bold text-white">{currentProject.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {project.tags.map((tag) => (
            <a
              href={tag.url}
              target="_blank"
              rel="noopener noreferrer"
              key={tag.name} 
              className="bg-gray-800/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-gray-700/50 cursor-pointer"
            >
              {tag.name}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-base" dangerouslySetInnerHTML={{ __html: currentProject.description }} />
        <div className="mt-6 flex gap-4">
          {project.projectUrl && (
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 px-4 py-2 rounded-full">
              <ExternalLink size={16} /> {t('projects.codeButton')}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
