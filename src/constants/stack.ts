const frontEnd = [
  {
    path: "nextjs-docs",
    name: "Next.js",
    description:
      "Framework React para construção de aplicativos web estáticos e dinâmicos.",
  },
  {
    path: "react-docs",
    name: "React",
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário.",
  },
  {
    path: "react-native-docs",
    name: "React Native",
    description:
      "Framework JavaScript para criar aplicativos móveis nativos usando React.",
  },
  {
    path: "svelte-docs",
    name: "Svelte",
    description:
      "Framework JavaScript para construção de interfaces de usuário com uma abordagem reativa.",
  },
  {
    path: "typescript-docs",
    name: "TypeScript",
    description:
      "Superset tipado de JavaScript que compila para JavaScript puro.",
  },
  {
    path: "tailwindcss-docs",
    name: "Tailwind CSS",
    description:
      "Framework CSS utilitário para construção de designs personalizados.",
  },
  {
    path: "material-tailwind-docs",
    name: "Material Tailwind",
    description:
      "Framework CSS para construção de designs com base no Material Design usando Tailwind CSS.",
  },
  {
    path: "styled-components-docs",
    name: "Styled Components",
    description:
      "Biblioteca para estilização de componentes React utilizando tagged template literals.",
  },
  {
    path: "stitches-docs",
    name: "Stitches",
    description: "Biblioteca de estilos CSS em tempo de execução para React.",
  },
  {
    path: "ant-design-docs",
    name: "Ant Design",
    description:
      "Biblioteca de componentes UI React com um estilo visual elegante e consistente.",
  },
  {
    path: "shadcn-ui-docs",
    name: "Shadcn UI",
    description: "Biblioteca de componentes UI para React.",
  },
  {
    path: "material-ui-docs",
    name: "Material-UI",
    description:
      "Biblioteca de componentes UI React baseada no Material Design.",
  },
  {
    path: "chakra-ui-docs",
    name: "Chakra UI",
    description:
      "Biblioteca de componentes UI React focada na acessibilidade e simplicidade.",
  },
  {
    path: "radix-ui-docs",
    name: "Radix UI",
    description:
      "Biblioteca de componentes UI React de alta qualidade para aplicativos modernos.",
  },
];

const backEnd = [
  {
    path: "nodejs-docs",
    name: "Node.js",
    description:
      "Ambiente de tempo de execução JavaScript assíncrono baseado no V8 da Google.",
  },
  {
    path: "kitajs-docs",
    name: "Kita.js",
    description:
      "Framework JavaScript minimalista para construção de APIs RESTful.",
  },
  {
    path: "fastify-docs",
    name: "Fastify",
    description: "Framework web rápido e eficiente para Node.js.",
  },
  {
    path: "express-docs",
    name: "Express",
    description: "Framework web Node.js minimalista e flexível.",
  },
  {
    path: "typescript-docs",
    name: "TypeScript",
    description:
      "Superset tipado de JavaScript que compila para JavaScript puro.",
  },
];

const orm = [
  {
    path: "prisma-docs",
    name: "Prisma",
    description:
      "ORM (Object-Relational Mapping) moderno e intuitivo para Node.js e TypeScript.",
  },
  {
    path: "sequelize-docs",
    name: "Sequelize",
    description:
      "ORM baseado em promessas para Node.js, MySQL, MariaDB, PostgreSQL, SQLite e MSSQL.",
  },
];

const database = [
  {
    path: "mysql-docs",
    name: "MySQL",
    description:
      "Sistema de gerenciamento de banco de dados relacional de código aberto.",
  },
  {
    path: "mongodb-docs",
    name: "MongoDB",
    description: "Banco de dados NoSQL orientado a documentos.",
  },
  {
    path: "postgres-docs",
    name: "PostgreSQL",
    description:
      "Sistema de gerenciamento de banco de dados relacional de código aberto.",
  },
  {
    path: "oracle-docs",
    name: "Oracle Database",
    description:
      "Sistema de gerenciamento de banco de dados relacional desenvolvido pela Oracle.",
  },
];

const cloud = [
  {
    path: "firebase-docs",
    name: "Firebase",
    description:
      "Plataforma de desenvolvimento de aplicativos móveis e da web.",
  },
  {
    path: "vercel-docs",
    name: "Vercel",
    description:
      "Plataforma de computação em nuvem que permite aos desenvolvedores implantar, escalar e gerenciar aplicativos web e APIs.",
  },
  {
    path: "railway-docs",
    name: "Railway",
    description:
      "Plataforma de desenvolvimento em nuvem que permite a implantação e gerenciamento simplificado de aplicativos web e bancos de dados.",
  },
];

const packageManagers = [
  {
    path: "npm",
    name: "npm",
    description: "Gerenciador de pacotes padrão para o ambiente Node.js.",
  },
  {
    path: "yarn",
    name: "yarn",
    description:
      "Gerenciador de pacotes rápido, confiável e seguro para JavaScript.",
  },
  {
    path: "pnpm",
    name: "pnpm",
    description:
      "Gerenciador de pacotes rápido, eficiente e que utiliza espaço em disco de forma inteligente.",
  },
];

const tools = [
  {
    path: "vscode-docs",
    name: "Visual Studio Code",
    description: "Editor de código-fonte desenvolvido pela Microsoft.",
  },
  {
    path: "figma-docs",
    name: "Figma",
    description:
      "Ferramenta de design de interface de usuário baseada em navegador.",
  },
  {
    path: "jira-docs",
    name: "Jira",
    description:
      "Software de gerenciamento de projetos e rastreamento de problemas.",
  },
  {
    path: "discord-docs",
    name: "Discord",
    description:
      "Plataforma de comunicação por voz, vídeo e texto voltada para gamers.",
  },
  {
    path: "spotify-docs",
    name: "Spotify",
    description: "Serviço de streaming de música digital.",
  },
  {
    path: "insomnia-docs",
    name: "Insomnia",
    description:
      "Ferramenta de cliente REST para testar APIs e desenvolvimento de software.",
  },
  {
    path: "postman-docs",
    name: "Postman",
    description:
      "Plataforma de colaboração para desenvolvimento de API utilizada por desenvolvedores para construir, testar e documentar APIs.",
  },
  {
    path: "google-meet-docs",
    name: "Google Meet",
    description: "Plataforma de videoconferência desenvolvida pelo Google.",
  },
  {
    path: "teams-docs",
    name: "Microsoft Teams",
    description:
      "Plataforma de colaboração e comunicação desenvolvida pela Microsoft.",
  },
];

export const groupStack = [
  {
    id: 1,
    groupName: "Front End",
    techs: frontEnd,
  },
  {
    id: 2,
    groupName: "Back End",
    techs: backEnd,
  },
  {
    id: 3,
    groupName: "ORM",
    techs: orm,
  },
  {
    id: 4,
    groupName: "Database",
    techs: database,
  },
  {
    id: 5,
    groupName: "Cloud",
    techs: cloud,
  },
  {
    id: 6,
    groupName: "Tools",
    techs: tools,
  },
  {
    id: 7,
    groupName: "Package Managers",
    techs: packageManagers,
  },
];
