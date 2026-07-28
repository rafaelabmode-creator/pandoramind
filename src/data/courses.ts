// ============================================================================
//  CATÁLOGO DE CURSOS DA PANDORAMIND
// ----------------------------------------------------------------------------
//  Esta é a "ficha padrão" de um curso. Para adicionar um novo curso, copie um
//  objeto existente, troque os dados e pronto — a home, o catálogo e a página
//  do curso se atualizam sozinhos. Nada de mexer no layout. 💜
// ============================================================================

export type Audience = "psicologos" | "todos";

export interface PriceLot {
  label: string; // ex.: "1º Lote"
  price: string; // texto de exibição à vista, ex.: "R$ 797,00"
  amount?: number; // valor numérico em reais (ex.: 797) — habilita o cálculo da parcela
  compareAtAmount?: number; // valor "cheio" para mostrar desconto (ex.: 897)
  deadline?: string; // ex.: "até 15/08/2026"
}

export interface FichaItem {
  label: string;
  value: string;
}

export interface Course {
  slug: string;
  title: string;
  subtitle?: string;
  audience: Audience;
  audienceLabel: string; // texto exibido no selo
  status: "inscricoes-abertas" | "lista-de-espera" | "em-breve";
  featured?: boolean;
  emoji: string;

  shortDescription: string; // card / catálogo
  longParagraphs: string[]; // página do curso (um item por parágrafo)

  highlights: string[]; // "O que você vai aprender / dominar"
  targetAudience: string[]; // "Para quem é"
  includes?: string[]; // "O que está incluído"
  ficha: FichaItem[]; // ficha técnica
  installmentsMax?: number; // parcelamento máximo no cartão (ex.: 10)

  modules?: { title: string; description: string }[]; // programa do curso (módulos)
  faq?: { q: string; a: string }[]; // perguntas frequentes
  guarantee?: string; // texto da garantia (ex.: 7 dias)
  disclaimer?: string; // aviso ético (ex.: não substitui terapia)

  priceLots?: PriceLot[];
  priceNote?: string; // observação sobre preço
  paymentConditions?: string; // condições de pagamento

  // Link de checkout (ex.: Asaas). Se preenchido, o botão leva direto ao
  // pagamento. Se vazio (curso em lista de espera), o botão abre o WhatsApp.
  checkoutUrl?: string;
  ctaLabel: string;
}

export const INSTRUCTOR = {
  name: "Ráfa Modè",
  crp: "CRP 06/142235",
  bio: "Psicóloga com 8 anos de experiência clínica e mais de 400 pacientes atendidos, que une formação técnica sólida a uma escuta acolhedora, ética e sem julgamentos.",
};

export const courses: Course[] = [
  // --------------------------------------------------------------------------
  // Curso 1 — Psicologia Afirmativa LGBTQIAPN+
  // --------------------------------------------------------------------------
  {
    slug: "psicologia-afirmativa",
    title: "Psicologia Afirmativa LGBTQIAPN+",
    subtitle: "Da teoria à prática clínica segura",
    audience: "psicologos",
    audienceLabel: "Para psicólogos",
    status: "inscricoes-abertas",
    featured: true,
    emoji: "🏳️‍🌈",
    shortDescription:
      "Capacitação completa em Psicologia Afirmativa para o atendimento ético, técnico e seguro da população LGBTQIAPN+. 8 encontros ao vivo com teoria baseada em evidências e supervisão clínica, habilitando o profissional a atuar em conformidade com as resoluções do CFP e a emitir documentos técnicos.",
    longParagraphs: [
      "Psicologia Afirmativa LGBTQIAPN+: Da Teoria à Prática Clínica Segura é uma capacitação de 24 horas para psicólogos e estudantes de Psicologia que desejam atender a população LGBTQIAPN+ com competência ética, técnica e legal.",
      "Ao longo de 8 encontros ao vivo (1h30 de teoria + 1h30 de supervisão clínica com estudos de caso e role-playing), o curso percorre desde os fundamentos da diversidade sexual e de gênero até a elaboração de laudos psicológicos para hormonioterapia e cirurgias de afirmação de gênero, passando pelo Modelo de Estresse de Minoria, o manejo clínico de temas críticos, as infâncias e adolescências LGBTQIAPN+ e as resoluções do CFP (01/99, 01/18, 08/20 e 08/22).",
      "Facilitado por Ráfa Modè (CRP 06/142235), psicóloga com 8 anos de experiência clínica e mais de 400 pacientes atendidos, que une formação técnica sólida à vivência pessoal como mulher trans.",
    ],
    highlights: [
      "Fundamentos da diversidade sexual e de gênero",
      "Modelo de Estresse de Minoria aplicado à clínica",
      "Manejo clínico de temas críticos",
      "Infâncias e adolescências LGBTQIAPN+",
      "Resoluções do CFP (01/99, 01/18, 08/20 e 08/22)",
      "Elaboração de laudos para hormonioterapia e cirurgias de afirmação de gênero",
    ],
    targetAudience: [
      "Psicólogas(os) clínicas(os) que atendem ou desejam atender a população LGBTQIAPN+",
      "Estudantes de Psicologia a partir do 3º ano",
      "Profissionais que precisam emitir laudos e documentos técnicos em processos de afirmação de gênero",
      "Psicólogas(os) que atuam em escolas, ONGs, saúde pública e políticas públicas",
      "Profissionais que buscam conformidade ética com as resoluções do CFP",
    ],
    includes: [
      "Apostilas digitais",
      "Modelos de documentos técnicos",
      "Bibliografia comentada",
      "Gravações da parte teórica por 1 ano",
      "Grupo de discussão",
      "Certificado de 24h",
    ],
    ficha: [
      { label: "Formato", value: "100% online ao vivo (Google Meet)" },
      { label: "Carga horária", value: "24 horas — 8 encontros de 3h" },
      { label: "Quando", value: "Sábados, das 09h às 12h" },
      {
        label: "Período",
        value: "12/09/2026 a 14/11/2026 (sem aulas em 10/10 e 31/10)",
      },
      {
        label: "Gravações",
        value: "Parte teórica por 1 ano (supervisão não é gravada, por sigilo ético)",
      },
      { label: "Certificação", value: "Certificado de 24h" },
    ],
    installmentsMax: 10,
    priceLots: [
      { label: "1º Lote", price: "R$ 797,00", amount: 797, compareAtAmount: 897, deadline: "até 15/08/2026" },
      { label: "2º Lote", price: "R$ 847,00", amount: 847, compareAtAmount: 897, deadline: "até 31/08/2026" },
      { label: "3º Lote", price: "R$ 897,00", amount: 897, deadline: "até 11/09/2026" },
    ],
    paymentConditions:
      "Parcelamento em até 10x sem juros no cartão · pagamento via Asaas · vagas limitadas.",
    checkoutUrl: "https://www.asaas.com/c/4vxo2zmhapnwc4bz",
    ctaLabel: "Quero me inscrever",
  },

  // --------------------------------------------------------------------------
  // Curso 2 — Superando a Resistência na Terapia
  // --------------------------------------------------------------------------
  {
    slug: "superando-a-resistencia-na-terapia",
    title: "Superando a Resistência na Terapia",
    subtitle: "Transforme impasses clínicos em mapa de trabalho",
    audience: "psicologos",
    audienceLabel: "Para psicólogos",
    status: "lista-de-espera",
    featured: true,
    emoji: "🧭",
    shortDescription:
      "O paciente que não muda não é um beco sem saída — é um mapa que você ainda não aprendeu a ler. 6 aulas práticas integrando Leahy e Ellis para transformar impasses clínicos em material de trabalho. Com apostilas, estudos de caso e role-plays.",
    longParagraphs: [
      "Superando a Resistência na Terapia é um curso de aprofundamento clínico para psicólogos que já dominam a técnica, mas esbarram no mesmo obstáculo: o paciente que falta, que não faz as tarefas, que responde “sim, mas...” a cada intervenção — ou que simplesmente não melhora, apesar de tudo estar “certo”.",
      "Em 6 encontros de 2 horas, o curso integra dois dos autores mais importantes sobre o tema — Robert Leahy (Terapia Cognitiva) e Albert Ellis (REBT) — para transformar a resistência de inimiga em mapa clínico. Você vai aprender a identificar as dimensões da resistência (validação, autoconsistência, esquemática, moral, vitimização, aversão ao risco e autossabotagem), avaliar sua função, escolher a porta de entrada certa para cada padrão e, na última aula, trabalhar o fator mais negligenciado de todos: a resistência do próprio terapeuta.",
      "Cada aula combina exposição teórica, apostila completa e estudo de caso com role-play e gabarito comentado — para que você saia não com conceitos, mas com falas prontas para usar na próxima sessão difícil.",
    ],
    highlights: [
      "As 7 dimensões da resistência: validação, autoconsistência, esquemática, moral, vitimização, aversão ao risco e autossabotagem",
      "Como avaliar a função da resistência em cada paciente",
      "Escolher a porta de entrada certa para cada padrão",
      "Integração prática entre Robert Leahy (Terapia Cognitiva) e Albert Ellis (REBT)",
      "Falas prontas para usar na próxima sessão difícil",
      "Aula final: a resistência do próprio terapeuta (módulo de supervisão)",
    ],
    targetAudience: [
      "Psicólogos clínicos em TCC ou abordagens integrativas, especialmente nos primeiros 2 a 10 anos de consultório",
      "Estudantes de pós-graduação em TCC",
      "Supervisores clínicos (a aula 6 é praticamente um módulo de supervisão)",
      "Psiquiatras que fazem psicoterapia",
      "Pré-requisito recomendável: graduação em Psicologia concluída ou em fase final",
    ],
    includes: [
      "Apostila completa por aula",
      "Estudos de caso com role-play e gabarito comentado",
      "Certificado de 12h",
    ],
    ficha: [
      { label: "Formato", value: "Ao vivo online (turmas)" },
      { label: "Carga horária", value: "12 horas — 6 encontros de 2h" },
      { label: "Metodologia", value: "Exposição teórica + apostila + estudo de caso com role-play" },
      { label: "Certificação", value: "12h — material permanente (apostilas)" },
    ],
    installmentsMax: 12,
    priceLots: [{ label: "Investimento", price: "R$ 597,00", amount: 597 }],
    priceNote:
      "Lote promocional de lançamento nas primeiras vagas. As 12 horas com role-play e discussão de casos justificam esse patamar no mercado de educação continuada em psicologia.",
    paymentConditions: "Parcelamento em até 12x.",
    ctaLabel: "Entrar na lista de espera",
  },

  // --------------------------------------------------------------------------
  // Curso 3 — Reescrevendo Sua História (público geral)
  // --------------------------------------------------------------------------
  {
    slug: "reescrevendo-sua-historia",
    title: "Reescrevendo Sua História",
    subtitle: "Domine seus pensamentos, transforme suas emoções e recupere o controle da sua vida",
    audience: "todos",
    audienceLabel: "Para todos",
    status: "em-breve",
    featured: true,
    emoji: "✍️",
    shortDescription:
      "Um curso para quem se sente ansioso, preso a pensamentos negativos ou no piloto automático. Com base na terapia cognitiva, aprenda a identificar e transformar os pensamentos que moldam suas emoções — e reescreva sua história. Com apostila, planilhas, áudios de relaxamento e encontros ao vivo mensais.",
    longParagraphs: [
      "Você já sentiu que está preso aos mesmos pensamentos, repetindo padrões que te puxam para a ansiedade, o desânimo ou a autocrítica — como se a sua história já estivesse escrita? A boa notícia da ciência é: dá para reescrevê-la.",
      "Reescrevendo Sua História é um curso para pessoas comuns (não é preciso ser da área) que querem entender a própria mente e retomar o controle das próprias emoções. Baseado na Terapia Cognitivo-Comportamental (TCC), ele traduz ferramentas científicas em passos simples e aplicáveis no dia a dia.",
      "Em 8 módulos, com apostila digital, planilhas exclusivas, áudios de relaxamento e encontros ao vivo mensais, você aprende a observar seus pensamentos, questioná-los e construir formas mais saudáveis de sentir e agir. Sem fórmulas mágicas — com método, prática e acolhimento.",
    ],
    highlights: [
      "Identificar pensamentos automáticos negativos em segundos",
      "Reconhecer as distorções cognitivas que alimentam a ansiedade",
      "Questionar e reestruturar crenças que te limitam",
      "Usar técnicas práticas de regulação emocional no dia a dia",
      "Aplicar exercícios de relaxamento para acalmar corpo e mente",
      "Quebrar padrões de autossabotagem e procrastinação",
      "Construir uma autoimagem mais gentil e realista",
      "Criar um plano pessoal para manter os resultados a longo prazo",
    ],
    targetAudience: [
      "Pessoas que convivem com ansiedade, preocupação excessiva ou desânimo e querem ferramentas práticas",
      "Quem se sente preso a padrões negativos e à autocrítica e deseja mudar",
      "Pessoas curiosas sobre como a mente funciona e como pensar de forma mais saudável",
      "Quem busca autoconhecimento e desenvolvimento pessoal com base científica — sem precisar de formação em Psicologia",
    ],
    includes: [
      "Apostila digital completa",
      "Planilhas exclusivas de acompanhamento",
      "Áudios de relaxamento guiado",
      "Encontros ao vivo mensais",
      "Certificado de conclusão",
    ],
    modules: [
      {
        title: "As bases da mente",
        description:
          "Entenda o modelo cognitivo: como pensamentos, emoções e comportamentos se conectam e por que isso abre a porta para a mudança.",
      },
      {
        title: "Pensamentos automáticos: o roteiro invisível",
        description:
          "Aprenda a perceber os pensamentos rápidos e automáticos que passam despercebidos e ditam suas reações.",
      },
      {
        title: "Distorções cognitivas: as armadilhas da mente",
        description:
          "Conheça as 'armadilhas' mais comuns (catastrofização, leitura mental, tudo-ou-nada) e como identificá-las em você.",
      },
      {
        title: "Reestruturação cognitiva: questionando e reescrevendo",
        description:
          "Ferramentas práticas para questionar pensamentos disfuncionais e construir versões mais realistas e gentis.",
      },
      {
        title: "Emoções sob nova luz",
        description:
          "Como acolher e regular emoções difíceis — ansiedade, tristeza, raiva — sem ser dominado por elas.",
      },
      {
        title: "Crenças centrais: as raízes da sua história",
        description:
          "Descubra as crenças profundas sobre si, os outros e o mundo — e comece a reescrevê-las.",
      },
      {
        title: "Da intenção à ação",
        description:
          "Estratégias para vencer a procrastinação, a evitação e os padrões que travam a sua mudança.",
      },
      {
        title: "Sua nova história: mantendo os resultados",
        description:
          "Monte um plano pessoal de manutenção para seguir cuidando da sua mente muito além do curso.",
      },
    ],
    ficha: [
      { label: "Formato", value: "100% online" },
      { label: "Estrutura", value: "8 módulos + encontros ao vivo mensais" },
      { label: "Nível", value: "Aberto ao público — sem pré-requisitos" },
      { label: "Materiais", value: "Apostila digital, planilhas e áudios de relaxamento" },
      { label: "Certificação", value: "Certificado de conclusão" },
    ],
    guarantee:
      "Garantia de 7 dias: se sentir que o curso não é para você, devolvemos 100% do valor, sem burocracia.",
    disclaimer:
      "Este é um curso educativo e de desenvolvimento pessoal, com base científica. Ele não substitui psicoterapia nem acompanhamento profissional. Se você estiver em sofrimento intenso, procure um(a) psicólogo(a); em situações de crise, ligue para o CVV (188).",
    installmentsMax: 10,
    priceLots: [
      { label: "Promocional", price: "R$ 297,00", amount: 297, compareAtAmount: 397, deadline: "oferta de lançamento" },
      { label: "Valor normal", price: "R$ 397,00", amount: 397 },
    ],
    priceNote: "Condição promocional de lançamento por tempo limitado.",
    paymentConditions: "Parcelamento no cartão · pagamento via Asaas.",
    // Guardado para quando o curso for gravado e as inscrições abrirem:
    checkoutUrl: "https://www.asaas.com/c/c3akykrezir3sm9o",
    faq: [
      {
        q: "Preciso ter formação em Psicologia?",
        a: "Não! O curso foi feito para o público geral, com linguagem acessível e prática. Qualquer pessoa interessada em se conhecer melhor pode acompanhar.",
      },
      {
        q: "O curso substitui a terapia?",
        a: "Não. Ele é educativo e de desenvolvimento pessoal, com base científica, mas não substitui psicoterapia nem acompanhamento profissional. Em sofrimento intenso, buscar um(a) psicólogo(a) é fundamental.",
      },
      {
        q: "Como acesso o conteúdo?",
        a: "É 100% online. Você acessa a apostila, as planilhas e os áudios de forma digital e participa dos encontros ao vivo mensais.",
      },
      {
        q: "Recebo certificado?",
        a: "Sim, você recebe um certificado de conclusão ao final do curso.",
      },
      {
        q: "E se eu não gostar?",
        a: "Você tem 7 dias de garantia. Se sentir que não é para você, é só solicitar o reembolso e devolvemos 100% do valor.",
      },
    ],
    ctaLabel: "Quero ser avisado(a)",
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const statusLabels: Record<Course["status"], string> = {
  "inscricoes-abertas": "Inscrições abertas",
  "lista-de-espera": "Lista de espera",
  "em-breve": "Em breve",
};
