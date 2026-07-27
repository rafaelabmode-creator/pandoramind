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
  price: string; // ex.: "R$ 797,00"
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

  priceLots?: PriceLot[];
  priceNote?: string; // observação sobre preço
  paymentConditions?: string; // condições de pagamento

  ctaLabel: string;
}

export const INSTRUCTOR = {
  name: "Ráfa Modè",
  crp: "CRP 06/142235",
  bio: "Psicóloga com 8 anos de experiência clínica e mais de 400 pacientes atendidos, que une formação técnica sólida à vivência pessoal como mulher trans.",
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
      "Certificado de 24h emitido pelo Instituto MetaCognitiva",
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
      { label: "Certificação", value: "24h, emitida pelo Instituto MetaCognitiva" },
    ],
    priceLots: [
      { label: "1º Lote", price: "R$ 797,00", deadline: "até 15/08/2026" },
      { label: "2º Lote", price: "R$ 847,00", deadline: "até 31/08/2026" },
      { label: "3º Lote", price: "R$ 897,00", deadline: "até 11/09/2026" },
    ],
    paymentConditions:
      "Parcelamento em até 10x sem juros no cartão · pagamento via Asaas · vagas limitadas.",
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
    priceLots: [{ label: "Investimento", price: "R$ 597,00" }],
    priceNote:
      "Lote promocional de lançamento nas primeiras vagas. As 12 horas com role-play e discussão de casos justificam esse patamar no mercado de educação continuada em psicologia.",
    paymentConditions: "Parcelamento em até 12x.",
    ctaLabel: "Entrar na lista de espera",
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
