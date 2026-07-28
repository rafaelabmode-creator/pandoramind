// Configurações gerais da marca e contato. Edite aqui em um só lugar.

export const site = {
  name: "PandoraMind",
  tagline: "Cursos de Psicologia",
  domain: "pandoramind.com.br",
  // Descrição curta do propósito da plataforma (aparece no hero).
  mission:
    "Explore territórios inexplorados da psicologia e desvende os segredos da mente humana — em cursos diretos ao ponto, baseados em evidências, para psicólogos e para todos.",
  // WhatsApp para inscrições / lista de espera (número oficial).
  whatsapp: "5516981878887",
  email: "contato@pandoramind.com.br",
  instagram: "https://instagram.com/",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
