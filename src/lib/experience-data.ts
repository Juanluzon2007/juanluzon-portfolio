export type Experience = {
  id: string;
  isFeatured: boolean;
  es: {
    title: string;
    company: string;
    description: string;
  };
  en: {
    title: string;
    company: string;
    description: string;
  };
};

export const experienceData: Experience[] = [
  {
    id: 'student-creator',
    isFeatured: true,
    es: {
      title: 'Creador de Contenido',
      company: 'Estudiante',
      description: 'Actualmente aprendiendo y desarrollando proyectos personales para construir mi portafolio. Apasionado por la tecnología y el desarrollo de software.',
    },
    en: {
      title: 'Content Creator',
      company: 'Student',
      description: 'Currently learning and developing personal projects to build my portfolio. Passionate about technology and software development.',
    },
  },
 
];
