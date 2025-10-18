export type Project = {
  id: string;
  tags: { name: string, url: string }[];
  imageUrl: string;
  imageHint: string;
  projectUrl?: string;
  isFeatured: boolean;
  es: {
    title: string;
    description: string;
  };
  en: {
    title:string;
    description: string;
  }
};

export const projectsData: Project[] = [
  {
    id: 'portfolio',
    tags: [
        { name: "Next.js", url: "https://nextjs.org/" },
        { name: "React", url: "https://react.dev/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" }
    ],
    imageUrl: '/portfolio.png',
    imageHint: 'website screenshot',
    projectUrl: '#',
    isFeatured: true,
    es: {
      title: 'Portafolio Personal',
      description: 'Mi portafolio personal (el sitio que estás viendo ahora mismo), basado en el portafolio de <a href="https://porfolio.dev/" target="_blank" rel="noopener noreferrer" class="text-yellow-300 hover:underline">midudev</a>. Creado desde cero para mostrar mis habilidades y proyectos, utilizando las tecnologías más modernas de desarrollo web.',
    },
    en: {
      title: 'Personal Portfolio',
      description: 'My personal portfolio (the site you are viewing right now), based on the portfolio of <a href="https://porfolio.dev/" target="_blank" rel="noopener noreferrer" class="text-yellow-300 hover:underline">midudev</a>. Created from scratch to showcase my skills and projects, using the most modern web development technologies.',
    }
  },
];