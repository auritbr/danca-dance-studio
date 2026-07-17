// Shared fictitious content for the Movimento em Cena site.
export const SITE = {
  name: "Movimento em Cena",
  fullName: "Ponto de Cultura Movimento em Cena",
  tagline: "Arte, formação e cidadania por meio da dança.",
  address: "Rua das Artes, 245 — Centro Cultural, São Paulo/SP",
  phone: "(11) 4002-8922",
  whatsapp: "5511940028922",
  email: "contato@movimentoemcena.org.br",
  hours: "Seg. a sex., das 9h às 18h",
  cnpj: "12.345.678/0001-90",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },
};

export const IMG = {
  hero: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=1600&q=80",
  ensemble: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&w=1200&q=80",
  ballet: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
  contemporary: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80",
  urban: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&w=800&q=80",
  salon: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
  jazz: "https://images.unsplash.com/photo-1519925610903-381054cc2a1c?auto=format&fit=crop&w=800&q=80",
  brazilian: "https://images.unsplash.com/photo-1533190395894-c17b74a7b25b?auto=format&fit=crop&w=800&q=80",
  workshop: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=1200&q=80",
  rehearsal: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=1200&q=80",
  stage: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
  community: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=1200&q=80",
  kids: "https://images.unsplash.com/photo-1596466713836-1e6115d6b1d0?auto=format&fit=crop&w=800&q=80",
  seniors: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?auto=format&fit=crop&w=800&q=80",
  backstage: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80",
  duo: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=800&q=80",
  group: "https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=800&q=80",
  portrait1: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  portrait2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  portrait3: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  portrait4: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80",
  portrait5: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
  portrait6: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  portrait7: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  portrait8: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
};

export const NAV = [
  { label: "Início", to: "/" as const },
  {
    label: "Quem Somos",
    to: "/quem-somos" as const,
    children: [
      { label: "Quem Somos", to: "/quem-somos" as const },
      { label: "Equipe", to: "/quem-somos/equipe" as const },
      { label: "Transparência", to: "/quem-somos/transparencia" as const },
    ],
  },
  {
    label: "Projetos",
    to: "/projetos" as const,
    children: [
      { label: "Dança que Transforma", to: "/projetos/danca-que-transforma" as const },
      { label: "Corpo, Ritmo e Movimento", to: "/projetos/corpo-ritmo-e-movimento" as const },
      { label: "Palco Aberto", to: "/projetos/palco-aberto" as const },
    ],
  },
  { label: "Notícias", to: "/noticias" as const },
  { label: "Galeria", to: "/galeria" as const },
  { label: "Contato", to: "/contato" as const },
];

export const NEWS = [
  {
    slug: "mostra-movimento-em-cena-2026",
    tag: "Apresentação",
    date: "12 de março de 2026",
    title: "Mostra Movimento em Cena reúne 12 grupos no Teatro Municipal",
    excerpt: "Edição comemorativa apresenta trabalhos autorais desenvolvidos ao longo do ano com participantes de todas as modalidades.",
    image: IMG.stage,
    author: "Equipe de Comunicação",
  },
  {
    slug: "oficina-de-ritmos-brasileiros",
    tag: "Oficina",
    date: "28 de fevereiro de 2026",
    title: "Oficina de ritmos brasileiros abre inscrições para nova turma",
    excerpt: "Formação gratuita apresenta linguagens da cultura popular e fortalece o repertório artístico da comunidade.",
    image: IMG.brazilian,
    author: "Coordenação Pedagógica",
  },
  {
    slug: "programa-danca-que-transforma-nova-etapa",
    tag: "Formação",
    date: "14 de fevereiro de 2026",
    title: "Programa Dança que Transforma inicia nova etapa formativa",
    excerpt: "Turmas se organizam por faixa etária e linguagem, com aulas semanais e encontros de criação coletiva.",
    image: IMG.workshop,
    author: "Redação",
  },
  {
    slug: "acao-cultural-no-bairro",
    tag: "Ação Social",
    date: "30 de janeiro de 2026",
    title: "Ação cultural ocupa praça pública com apresentações abertas",
    excerpt: "Mais de 400 pessoas participaram da tarde de dança, oficinas rápidas e conversas com artistas locais.",
    image: IMG.community,
    author: "Redação",
  },
  {
    slug: "parceria-com-escolas-publicas",
    tag: "Comunidade",
    date: "18 de janeiro de 2026",
    title: "Nova parceria amplia atendimento em escolas públicas",
    excerpt: "Ações formativas passam a integrar o contraturno escolar em cinco unidades da rede municipal.",
    image: IMG.kids,
    author: "Coordenação de Projetos",
  },
  {
    slug: "encontro-de-formacao-continuada",
    tag: "Formação",
    date: "05 de janeiro de 2026",
    title: "Encontro de formação continuada reúne educadores de dança",
    excerpt: "Programa de estudos aprofunda metodologias de ensino e práticas de criação artística comunitária.",
    image: IMG.rehearsal,
    author: "Equipe Pedagógica",
  },
];

export const MODALITIES = [
  { slug: "bale", name: "Balé", desc: "Técnica clássica com foco em postura, musicalidade e consciência corporal.", age: "8 a 60 anos", level: "Iniciante ao avançado", image: IMG.ballet },
  { slug: "contemporanea", name: "Dança Contemporânea", desc: "Criação, improvisação e pesquisa de movimento em linguagem contemporânea.", age: "12 a 60 anos", level: "Livre", image: IMG.contemporary },
  { slug: "urbanas", name: "Danças Urbanas", desc: "Hip hop, house e outras vertentes urbanas com foco em cultura e comunidade.", age: "10 a 40 anos", level: "Iniciante e intermediário", image: IMG.urban },
  { slug: "salao", name: "Dança de Salão", desc: "Ritmos brasileiros e internacionais em par, com foco em condução e conexão.", age: "16 a 70 anos", level: "Livre", image: IMG.salon },
  { slug: "jazz", name: "Jazz Dance", desc: "Técnica, expressividade e repertório com influências do teatro musical.", age: "10 a 45 anos", level: "Iniciante ao avançado", image: IMG.jazz },
  { slug: "brasileiros", name: "Ritmos Brasileiros", desc: "Samba, frevo, coco e outras linguagens da cultura popular brasileira.", age: "Todas as idades", level: "Livre", image: IMG.brazilian },
];

export const PROJECTS = [
  {
    slug: "danca-que-transforma",
    title: "Dança que Transforma",
    category: "Formação",
    status: "Em andamento",
    period: "2024 — 2026",
    audience: "Crianças, adolescentes e jovens de 8 a 24 anos",
    image: IMG.workshop,
    summary: "Programa de formação continuada em diferentes linguagens da dança para crianças, adolescentes e jovens.",
  },
  {
    slug: "corpo-ritmo-e-movimento",
    title: "Corpo, Ritmo e Movimento",
    category: "Inclusão",
    status: "Em andamento",
    period: "2023 — 2026",
    audience: "Grupos intergeracionais a partir de 12 anos",
    image: IMG.rehearsal,
    summary: "Oficinas voltadas à consciência corporal, criatividade, musicalidade e expressão artística.",
  },
  {
    slug: "palco-aberto",
    title: "Palco Aberto",
    category: "Apresentação",
    status: "Em andamento",
    period: "2022 — 2026",
    audience: "Artistas em formação e público geral",
    image: IMG.stage,
    summary: "Ações de circulação, apresentações públicas e valorização das criações desenvolvidas pelos participantes.",
  },
];

export const TEAM = [
  { name: "Helena Marques", role: "Coordenação Geral", area: "Coordenação", bio: "Coreógrafa e gestora cultural com 18 anos de atuação em programas comunitários de dança.", image: IMG.portrait2 },
  { name: "Rafael Nogueira", role: "Coordenação Pedagógica", area: "Coordenação", bio: "Bailarino e educador com pós-graduação em ensino da dança e políticas culturais.", image: IMG.portrait4 },
  { name: "Amanda Vieira", role: "Professora de Balé", area: "Professores", bio: "Formada pela Escola de Dança do Teatro Municipal, integra companhias há mais de uma década.", image: IMG.portrait1 },
  { name: "Bruno Aparecido", role: "Professor de Danças Urbanas", area: "Professores", bio: "Pesquisador de culturas urbanas e articulador de coletivos de hip hop.", image: IMG.portrait7 },
  { name: "Clarice Tavares", role: "Professora de Contemporâneo", area: "Professores", bio: "Intérprete-criadora com trajetória em festivais nacionais e residências artísticas.", image: IMG.portrait3 },
  { name: "Diogo Ramos", role: "Produção Executiva", area: "Produção", bio: "Produtor cultural com atuação em circulação de espetáculos e mostras artísticas.", image: IMG.portrait8 },
  { name: "Eliane Souza", role: "Administrativo e Financeiro", area: "Administrativo", bio: "Atua na gestão administrativa de projetos culturais incentivados há mais de 15 anos.", image: IMG.portrait5 },
  { name: "Fernanda Lopes", role: "Comunicação", area: "Comunicação", bio: "Jornalista e articuladora de comunicação de projetos socioculturais.", image: IMG.portrait6 },
];

export const DOCUMENTS = [
  { name: "Estatuto Social", category: "Estatuto", year: "2024", date: "10/01/2024", format: "PDF", size: "320 KB" },
  { name: "Relatório de Atividades 2025", category: "Relatórios de atividades", year: "2025", date: "15/02/2026", format: "PDF", size: "2,4 MB" },
  { name: "Relatório Financeiro 2025", category: "Relatórios financeiros", year: "2025", date: "15/02/2026", format: "PDF", size: "1,1 MB" },
  { name: "Prestação de Contas — 2º semestre", category: "Prestação de contas", year: "2025", date: "20/12/2025", format: "PDF", size: "980 KB" },
  { name: "Plano de Trabalho 2026", category: "Planos de trabalho", year: "2026", date: "05/01/2026", format: "PDF", size: "540 KB" },
  { name: "Ata de Assembleia Ordinária", category: "Atas", year: "2025", date: "28/03/2025", format: "PDF", size: "210 KB" },
  { name: "Edital Chamada de Bolsistas 2025", category: "Editais", year: "2025", date: "10/06/2025", format: "PDF", size: "410 KB" },
  { name: "Certificado de Ponto de Cultura", category: "Certificados", year: "2024", date: "12/09/2024", format: "PDF", size: "180 KB" },
  { name: "Termo de Parceria — Secretaria de Cultura", category: "Parcerias", year: "2024", date: "22/04/2024", format: "PDF", size: "760 KB" },
  { name: "Relatório de Atividades 2024", category: "Relatórios de atividades", year: "2024", date: "18/02/2025", format: "PDF", size: "2,1 MB" },
  { name: "Prestação de Contas 2023", category: "Prestação de contas", year: "2023", date: "20/03/2024", format: "PDF", size: "1,3 MB" },
];

export const EVENTS = [
  { date: "22 MAR", title: "Aula aberta de dança contemporânea", time: "19h30", place: "Sede Movimento em Cena", category: "Aula aberta" },
  { date: "05 ABR", title: "Mostra Movimento em Cena", time: "20h", place: "Teatro Municipal", category: "Apresentação" },
  { date: "18 ABR", title: "Oficina de ritmos brasileiros", time: "14h", place: "Centro Cultural do Bairro", category: "Oficina" },
];

export const TESTIMONIALS = [
  { name: "Mariana Alves", role: "Participante das oficinas", text: "As aulas mudaram a minha relação com o corpo e com o palco. Encontrei um lugar de aprendizado e acolhimento.", image: IMG.portrait1 },
  { name: "José Ribeiro", role: "Familiar de participante", text: "Ver minha filha desenvolver disciplina, criatividade e amizades é um presente para toda a família.", image: IMG.portrait4 },
  { name: "Profa. Renata Lima", role: "Educadora parceira", text: "O trabalho do Movimento em Cena dialoga com a escola e amplia o repertório cultural das crianças.", image: IMG.portrait5 },
  { name: "Coletivo Passo em Cena", role: "Parceiro cultural", text: "É uma referência de organização e escuta comunitária. Uma parceria que fortalece a cena da dança.", image: IMG.portrait7 },
];
