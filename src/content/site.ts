export const navigationItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const

export const heroContent = {
  eyebrow: 'Soluções integradas em engenharia e construção civil',
  heading: {
    before: 'Construímos com',
    emphasis: 'precisão',
    after: 'o que',
    finalLine: 'o futuro vai exigir.',
  },
  description:
    'Integramos projeto, planejamento, materiais, tecnologia, suprimentos e execução para acompanhar as diferentes etapas do seu empreendimento.',
  details: [
    { title: 'Projeto', description: 'Desenvolvimento arquitetônico e estrutural.' },
    { title: 'Planejamento', description: 'Coordenação técnica e compatibilização.' },
    { title: 'Materiais', description: 'Fabricação, fornecimento e comercialização.' },
    { title: 'Execução', description: 'Construção integrada ao processo.' },
  ],
} as const

export const temporaryHeroImage = {
  alt: 'Fachada de concreto brutalista com padrões geométricos.',
  src: 'https://images.unsplash.com/photo-1746911779503-f16ee2088257?auto=format&fit=crop&w=1600&q=85',
  source: 'Unsplash — Chris Johnson',
} as const

export const servicesContent = {
  eyebrow: 'Serviços',
  title: 'Soluções integradas para cada etapa da construção.',
  items: [
    {
      title: 'Projetos Arquitetônicos',
      description: 'Desenvolvimento de projetos arquitetônicos para orientar as decisões do empreendimento.',
    },
    {
      title: 'Projetos Estruturais',
      description: 'Desenvolvimento de projetos estruturais como parte da solução de engenharia.',
    },
    {
      title: 'Planejamento',
      description: 'Planejamento para organizar as etapas e os recursos envolvidos na construção.',
    },
    {
      title: 'Coordenação Técnica',
      description: 'Coordenação técnica e compatibilização entre as disciplinas do projeto.',
    },
    {
      title: 'Fabricação e Fornecimento',
      description: 'Fabricação e fornecimento de materiais e componentes para a construção.',
    },
    {
      title: 'Materiais de Construção',
      description: 'Comercialização de materiais de construção integrada às necessidades do projeto.',
    },
    {
      title: 'Execução de Obras',
      description: 'Execução de obras conectada às demais etapas do processo construtivo.',
    },
  ],
} as const

export const aboutContent = {
  eyebrow: 'Sobre a El Shay',
  title: 'Engenharia integrada para decisões mais coordenadas.',
  paragraphs: [
    'A El Shay atua em diferentes etapas do ciclo da construção, conectando engenharia, planejamento, materiais, tecnologia, suprimentos e execução.',
    'Essa estrutura permite suporte técnico ao longo das diferentes fases do projeto, aproximando as decisões de engenharia, fornecimento e construção.',
    'As soluções são adaptadas às características e aos requisitos de cada empreendimento, buscando equilibrar desempenho técnico, eficiência, qualidade construtiva, cronograma e viabilidade econômica.',
  ],
  pillars: [
    { title: 'Projeto', description: 'Arquitetura e estrutura como ponto de partida.' },
    { title: 'Coordenação', description: 'Compatibilização técnica entre disciplinas.' },
    { title: 'Materiais', description: 'Componentes, fornecimento e comercialização.' },
    { title: 'Execução', description: 'Construção conectada ao processo.' },
  ],
} as const

export const temporaryAboutImage = {
  alt: 'Escadas e vigas de concreto formando uma composição geométrica.',
  src: 'https://images.unsplash.com/photo-1752751975167-feba23828ae9?auto=format&fit=crop&w=1200&q=85',
  source: 'Unsplash — Declan Sun',
} as const

export const contactContent = {
  eyebrow: 'Contato',
  title: 'Vamos conversar sobre o seu projeto?',
  description:
    'Solicite um orçamento, apresente uma necessidade ou converse com a El Shay sobre uma solução integrada para o seu empreendimento.',
  whatsAppLabel: 'Fale pelo WhatsApp',
  whatsAppUrl: null as string | null,
} as const
