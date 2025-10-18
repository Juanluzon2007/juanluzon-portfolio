export type Certificate = {
  id: string;
  imageUrl: string;
  href?: string;
  isFeatured: boolean;
  es: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
};

export const certificatesData: Certificate[] = [
  {
    id: 'bachiller',
    imageUrl: '/certificate.png',
    isFeatured: true,
    es: {
      title: 'Bachiller en Humanidades y Ciencias Sociales',
      description: 'Estudios secundarios completados en República Dominicana.',
    },
    en: {
      title: 'High School Diploma in Humanities and Social Sciences',
      description: 'Secondary studies completed in the Dominican Republic.',
    },
  },

];
