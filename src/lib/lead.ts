// Captura de lead + "portão" de acesso ao assistente (sem senha).
// A pessoa preenche uma vez; guardamos um sinal no navegador para não pedir
// de novo. Os dados vão para /api/lead (que encaminha ao Google Sheets).

const STORAGE_KEY = "pandoramind_lead_v1";

export type Perfil = "psicologo" | "estudante" | "curioso";

export interface Lead {
  nome: string;
  perfil: string; // rótulo legível (ex.: "Profissional da Psicologia")
  telefone: string;
  email: string;
  motivo: string;
  newsletter: boolean;
}

export function hasAccess(): boolean {
  try {
    return Boolean(localStorage.getItem(STORAGE_KEY));
  } catch {
    return false;
  }
}

export function saveAccess(lead: Lead) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ nome: lead.nome, perfil: lead.perfil, at: Date.now() }),
    );
  } catch {
    /* navegador sem storage — segue mesmo assim */
  }
}

export function getSavedName(): string {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw).nome ?? "") : "";
  } catch {
    return "";
  }
}

export async function submitLead(lead: Lead): Promise<void> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    let message = "Não foi possível enviar seu cadastro. Tente novamente.";
    try {
      const data = await res.json();
      if (data?.error) message = data.error;
    } catch {
      /* sem JSON */
    }
    throw new Error(message);
  }
}
