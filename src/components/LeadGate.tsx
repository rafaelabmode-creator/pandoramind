import { useState } from "react";
import { Sparkles, Lock, Loader2 } from "lucide-react";
import { Logo } from "./Logo";
import { submitLead, saveAccess, type Lead, type Perfil } from "../lib/lead";
import { cn } from "../lib/cn";

const perfis: { value: Perfil; label: string }[] = [
  { value: "psicologo", label: "Psicóloga(o)" },
  { value: "estudante", label: "Estudante de Psicologia" },
  { value: "curioso", label: "Curiosa(o) pelo tema" },
];

export function LeadGate({ onUnlock }: { onUnlock: (nome: string) => void }) {
  const [nome, setNome] = useState("");
  const [perfil, setPerfil] = useState<Perfil | "">("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!nome.trim() || !email.trim() || !perfil) {
      setError("Preencha nome, e-mail e seu perfil.");
      return;
    }
    if (!consent) {
      setError("É preciso concordar com o uso dos dados para continuar.");
      return;
    }
    const lead: Lead = {
      nome: nome.trim(),
      perfil: perfil as Perfil,
      telefone: telefone.trim(),
      email: email.trim(),
      motivo: motivo.trim(),
      newsletter,
    };
    setLoading(true);
    try {
      await submitLead(lead);
      saveAccess(lead);
      onUnlock(lead.nome);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-ink outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100 placeholder:text-ink-soft";

  return (
    <div className="mx-auto max-w-lg px-5 py-14">
      <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-soft sm:p-9">
        <div className="mb-6 text-center">
          <Logo className="mx-auto h-14 w-14" />
          <h1 className="mt-4 text-2xl font-extrabold text-ink">
            Converse com o <span className="text-gradient">PandoraMind</span>
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Seu assistente de estudos em Psicologia e Neuropsicologia, gratuito. Faça um
            cadastro rápido para liberar o acesso. 🧠✨
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-ink">Nome completo *</label>
            <input
              className={inputCls}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como podemos te chamar?"
              autoComplete="name"
            />
          </div>

          <div>
            <span className="mb-1.5 block text-sm font-semibold text-ink">Você é… *</span>
            <div className="grid gap-2 sm:grid-cols-3">
              {perfis.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setPerfil(p.value)}
                  className={cn(
                    "rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors",
                    perfil === p.value
                      ? "border-brand-400 bg-brand-50 text-brand-700"
                      : "border-brand-200 text-ink-muted hover:border-brand-300",
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-ink">E-mail *</label>
              <input
                type="email"
                className={inputCls}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-ink">Telefone</label>
              <input
                className={inputCls}
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(00) 90000-0000"
                autoComplete="tel"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-ink">
              O que te trouxe até aqui?
            </label>
            <textarea
              className={cn(inputCls, "min-h-[80px] resize-y")}
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              placeholder="Conte rapidinho o que você busca (estudo, dúvida, curiosidade…)."
            />
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-brand-50 p-3">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-brand-600"
            />
            <span className="text-sm text-ink-muted">
              Quero receber a newsletter e novidades sobre os cursos da PandoraMind.
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-brand-600"
            />
            <span className="text-xs leading-relaxed text-ink-soft">
              Concordo que a PandoraMind utilize meus dados para contato e para liberar o
              acesso ao assistente, conforme a LGPD. *
            </span>
          </label>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-600">{error}</p>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" /> Liberando…
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" /> Liberar meu acesso
              </>
            )}
          </button>

          <p className="flex items-center justify-center gap-1.5 text-xs text-ink-soft">
            <Lock className="h-3.5 w-3.5" /> Seus dados ficam seguros e não são compartilhados.
          </p>
        </form>
      </div>
    </div>
  );
}
