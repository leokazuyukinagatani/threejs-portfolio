export const navLinks = [
  {
    id: 1,
    name: 'Inicio',
    href: '#home',
  },
  {
    id: 2,
    name: 'Sobre',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experiência',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contato',
    href: '#contact',
  },
];

export const clientReviews = [

  {
    id: 1,
    name: 'Jeferson Fernandes',
    position: 'FullStack Developer at Maxicon Systems',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQFsvyWIAe2-tw/profile-displayphoto-shrink_800_800/B4DZQ2jGq9HcAc-/0/1736081960141?e=1742428800&v=beta&t=2NzMmeilL7nQ6EmmpawROAbKfXX5w0CvY5kVKafmktM',
    review:
      'Recomendo o Leo como um desenvolvedor competente com quem trabalhei desde o programa de trainee e, posteriormente, na mesma squad após a efetivação. Suas habilidades em diversas tecnologias, como Angular, React, Java e React Native, são notáveis e trazem bons resultados para a equipe. Além disso, sua disposição em ajudar os colegas e compartilhar conhecimentos contribui para um ambiente de trabalho colaborativo e produtivo.',
  },
  {
    id: 2,
    name: 'Mewerton Melo',
    position: 'IA Developer at Controladoria Geral',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQGfyisYYxVAMg/profile-displayphoto-shrink_800_800/B4DZPGQN8mHUAg-/0/1734197961230?e=1742428800&v=beta&t=iFlF_VljNlDzuBBTLpaXvvq6jlE56u919Zzsp4DXcS8',
    review:
      'Leo Kazuyuki é um excelente Desenvolvedor web, sempre em busca de novos conhecimentos e sempre disponível para ajudar os companheiros, me ajudou bastante em uma aplicação na qual usamos as tecnologias React JS no Front-end e Node JS no Back-end, e pode acreditar que não tinha um problema que ele não resolvesse, sempre muito competente e empenhado na solução dos problemas. Não teria como não recomendar, qualquer empresa que tenha um profissional desse nível tem muita sorte. Sucesso Leo! Qualquer dia que eu tiver um problema grande volto a te abusar! kkk E claro! Precisando de mim é só chamar!',
  },
    {
    id: 3,
    name: 'Edineia S. B. Brum',
    position: 'System Developer, Analyst & PO Assistant (one product) at Maxicon Systems',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQGpW0evwKGo6w/profile-displayphoto-shrink_800_800/B4DZQXh7cRG0Ac-/0/1735561558172?e=1742428800&v=beta&t=0b4ZkRahsQA91i4Q0_IghLcQI2OheMIWT8fIHXBJ2b4',
    review:
      'O Léo é aquele desenvolvedor atento à performance a às boas práticas no código ao mesmo tempo. Além de estar sempre estudando, se desenvolvendo na parte mais técnica, também chega junto pra compreender melhor a regra de negócio antes de codar (o que é um diferencial valioso hoje em dia). Posso dizer que suas "histórias de pescador" ficam só pra pescaria mesmo, porque no nosso dia a dia de trabalho ele entregava MUITO! Ele é rápido e está sempre disposto a ajudar nos enroscos que surgem naquelas demandas mais complexas. Proatividade, assiduidade, espírito de equipe, senso de urgência... são algumas das qualidades que daria pra citar sobre ele. Vou sentir falta de ouvir seus "tá" nas calls de alinhamento que fazíamos (cada "tá" com uma tonalidade bem característica... hehe...). Um ponto que também preciso citar é a qualidade nas análises e documentações, principalmente as RCUs, excelentes, de verdade!',
  },
];

export const myProjects = [
  {
    title: 'Zigen',
    desc: 'Landing page de aplicativo de musíca',
    subdesc:
      'Contruindo uma página de vendas com HTML e CSS, para divulgar Zigen um aplicativo perfeito para aprender a cantar',
    href: 'https://leokazuyukinagatani.github.io/zingen',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/tailwindcss.png',
      }
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Maxicon Sistemas',
    pos: 'Software Developer - Squad Dunamis',
    duration: 'Dezembro de 2024 - Present',
    title: 'Atualmente, trabalho no desenvolvimento de uma aplicação robusta que integra APIs REST em .NET e Java, frontend em Angular e banco de dados em Postgres. O projeto também envolve processos de sincronização para garantir a consistência dos dados entre sistemas, proporcionando uma solução escalável e eficiente.',
    icon: '/assets/maxicon.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Maxicon Sistemas',
    pos: 'Software Developer - Squad Mobile',
    duration: 'Outubro de 2023 - Dezembro de 2024 (1 ano 3 meses)',
    title: 'Durante o período, participei de três projetos, sendo que um deles foi desenvolvido integralmente, desde o levantamento de requisitos até a entrega final. Trabalhei no desenvolvimento de aplicativos web utilizando Angular e React, criei APIs em Java (JAX-RS e Spring Boot) e atuei no desenvolvimento de aplicativos móveis com React Native. Também gerenciei bancos de dados em Postgres e Oracle, desempenhando atividades de levantamento de requisitos e implementando estratégias de sincronização entre bancos de dados.',
    icon: '/assets/maxicon.png',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Biopark',
    pos: 'Software Developer Trainee - Squad Biopark',
    duration: 'Abril de 2023 - Outubro de 2023 (7 meses)',
    title: 'Durante o período, participei de um projeto em parceria com o Biopark, no qual desenvolvi um portal web e um aplicativo voltados para o agronegócio. Este projeto resultou em um produto que integra um aplicativo e um portal como parte de um módulo de ERP, oferecendo soluções específicas para atender às necessidades do setor. Nele foi utilizado Java, JAX-RS, React Native, WatermelonDB, Postgres, Oracle, GitLab, Hibernate, StyledComponents. Metodologia ágil utilizada: Scrum (JIRA).',
    icon: '/assets/biopark.ico',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Kebook',
    pos: 'Software Developer',
    duration: 'Janeiro de 2023 - Abril de 2023 (4 meses)',
    title: 'Trabalhei como desenvolvedor web, adquirindo habilidades técnicas em HTML, CSS, JavaScript, PHP, CPanel, Email Marketing, criação de Landingpages, Suporte Técnico, Configuração de Domínios, SEO, LinkTree e Git. Estas habilidades me permitiram criar sites de alta qualidade, otimizados para SEO, além de desenvolver landing pages para gerar leads e aumentar a visibilidade de sites.',
    icon: '/assets/kebook.png',
    animation: 'clapping',
  },
];

