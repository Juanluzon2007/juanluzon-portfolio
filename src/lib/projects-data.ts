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
  // 1. Portafolio Personal 
  {
    id: 'portfolio',
    tags: [
        { name: "Next.js", url: "https://nextjs.org/" },
        { name: "React", url: "https://react.dev/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" }
    ],
    imageUrl: '/portfolio.webp',
    imageHint: 'website screenshot',
    projectUrl: 'https://juanluzon-portfolio.netlify.app/',
    isFeatured: true, // Se mantiene 'true' como en tu ejemplo original
    es: {
      title: 'Portafolio Personal',
      description: 'Mi portafolio personal (el sitio que estás viendo ahora mismo), basado en el portafolio de <a href="https://porfolio.dev/" target="_blank" rel="noopener noreferrer" class="text-yellow-300 hover:underline">midudev</a>. Creado desde cero para mostrar mis habilidades y proyectos, utilizando las tecnologías más modernas de desarrollo web.',
    },
    en: {
      title: 'Personal Portfolio',
      description: 'My personal portfolio (the site you are viewing right now), based on the portfolio of <a href="https://porfolio.dev/" target="_blank" rel="noopener noreferrer" class="text-yellow-300 hover:underline">midudev</a>. Created from scratch to showcase my skills and projects, using the most modern web development technologies.',
    }
  },

  // 2. Tarjeta de Cumpleaños para Mamá
  {
    id: 'feliz-cumpleanos-madre',
    tags: [
      { name: "HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { name: "CSS", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { name: "JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" }
    ],
    imageUrl: '#',
    imageHint: 'website screenshot of a birthday card',
    projectUrl: 'https://juanluzon2007.github.io/madre/',
    isFeatured: false,
    es: {
      title: 'Tarjeta de Cumpleaños para Mamá',
      description: 'Una página web interactiva sencilla creada como una sorpresa y tarjeta de felicitación digital para un cumpleaños especial. Incluye un mensaje personal y una "sorpresa" con funcionalidad básica de JavaScript. Este proyecto destaca la aplicación de HTML y CSS puros para fines personales.',
    },
    en: {
      title: 'Birthday Card for Mom',
      description: 'A simple interactive webpage created as a surprise and digital greeting card for my mother. It includes a personal message and a "surprise" with basic JavaScript functionality. This project showcases the application of pure HTML and CSS for personal use.',
    }
  },

  // 3. Cuenta Regresiva para Graduación
  {
    id: 'cuenta-regresiva-graduacion',
    tags: [
      { name: "HTML5", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { name: "CSS3", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { name: "JavaScript", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" }
    ],
    imageUrl: '#',
    imageHint: 'website screenshot of a countdown timer',
    projectUrl: 'https://juanluzon2007.github.io/shiny-barnacle/',
    isFeatured: false,
    es: {
      title: 'Cuenta Regresiva para Graduación',
      description: 'Un proyecto simple que implementa una cuenta regresiva dinámica en tiempo real. La aplicación calcula y muestra el tiempo restante (años, meses, días, horas, minutos y segundos) hasta un evento futuro específico, en este caso, una fiesta de graduación. Demuestra manejo de fechas y manipulación del DOM con JavaScript.',
    },
    en: {
      title: 'Graduation Countdown Timer',
      description: 'A simple project that implements a dynamic, real-time countdown timer. The application calculates and displays the remaining time (years, months, days, hours, minutes, and seconds) until a specific future event, a graduation party. It demonstrates date handling and DOM manipulation using JavaScript.',
    }
  }
];
