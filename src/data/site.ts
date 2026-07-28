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
  // Link de assinatura do assistente (assinatura recorrente no Asaas).
  // Enquanto estiver vazio, o botão "Assinar" abre o WhatsApp.
  subscriptionUrl: "https://www.asaas.com/c/889fsr7njmvey3qr",
  // Preço da assinatura do assistente (exibido no painel de demonstração).
  assistantPrice: "R$ 19,90",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function subscriptionLink(): string {
  return (
    site.subscriptionUrl ||
    whatsappLink("Olá! Quero assinar o acesso ilimitado ao assistente PandoraMind.")
  );
}
