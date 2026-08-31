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
