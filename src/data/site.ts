// Configurações gerais da marca e contato. Edite aqui em um só lugar.

export const site = {
  name: "PandoraMind",
  tagline: "Cursos de Psicologia",
  domain: "pandoramind.com.br",
  // Descrição curta do propósito da plataforma (aparece no hero).
  mission:
    "Formação clínica em Psicologia — direta ao ponto, baseada em evidências e com prática de verdade. Para psicólogos que querem se aprofundar e para quem quer entender a mente humana.",
  // WhatsApp para inscrições / lista de espera (troque pelo número oficial).
  whatsapp: "5516991215432",
  email: "contato@pandoramind.com.br",
  instagram: "https://instagram.com/",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
