// Controle de uso gratuito do assistente (guardado no navegador).
// A pessoa tem um número limitado de interações na demonstração; depois disso,
// o acesso completo é liberado por assinatura ou por participar de um curso.

const USAGE_KEY = "pandoramind_usage_v1";

export const FREE_LIMIT = 5;

export function getUsage(): number {
  try {
    return Number(localStorage.getItem(USAGE_KEY) || "0") || 0;
  } catch {
    return 0;
  }
}

/** Conta mais uma interação e devolve o total atualizado. */
export function incrementUsage(): number {
  const n = getUsage() + 1;
  try {
    localStorage.setItem(USAGE_KEY, String(n));
  } catch {
    /* navegador sem storage — segue mesmo assim */
  }
  return n;
}

export function limitReached(): boolean {
  return getUsage() >= FREE_LIMIT;
}
