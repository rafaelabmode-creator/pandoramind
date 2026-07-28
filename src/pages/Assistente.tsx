import { useEffect, useRef, useState } from "react";
import { Send, RotateCcw, Sparkles } from "lucide-react";
import { Logo } from "../components/Logo";
import { LeadGate } from "../components/LeadGate";
import { streamChat, type ChatMessage } from "../lib/chat";
import { hasAccess, getSavedName } from "../lib/lead";
import { cn } from "../lib/cn";

const SUGGESTIONS = [
  "Explique a NR-1 e os riscos psicossociais no trabalho.",
  "Qual a diferença entre TCC e ACT?",
  "Como a Terapia dos Esquemas entende os padrões precoces?",
  "O que é neurociência afetiva, de forma simples?",
];

function welcome(nome: string): ChatMessage {
  const primeiro = nome.split(" ")[0] || "";
  return {
    role: "assistant",
    content: `Olá${primeiro ? `, ${primeiro}` : ""}! Que alegria te receber por aqui! 😄 Eu sou o **PandoraMind**, seu assistente de estudos em Psicologia e Neuropsicologia. Minhas paixões são TCC, ACT, Terapia dos Esquemas, neurociência afetiva e a saúde mental no trabalho (NR-1). 🧠✨\n\nPor onde vamos começar?`,
  };
}

function renderContent(text: string) {
  const html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");
  return { __html: html };
}

export function Assistente() {
  const [unlocked, setUnlocked] = useState(hasAccess());
  const [nome, setNome] = useState(getSavedName());
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (unlocked && messages.length === 0) setMessages([welcome(nome)]);
  }, [unlocked, nome, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  if (!unlocked) {
    return (
      <LeadGate
        onUnlock={(n) => {
          setNome(n);
          setUnlocked(true);
        }}
      />
    );
  }

  async function sendMessage(text: string) {
    const content = text.trim();
    if (!content || isLoading) return;
    setError(null);
    setInput("");

    const next: ChatMessage[] = [
      ...messages,
      { role: "user", content },
      { role: "assistant", content: "" },
    ];
    setMessages(next);
    setIsLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;
    try {
      await streamChat(
        next.slice(0, -1),
        (chunk) =>
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = {
              role: "assistant",
              content: copy[copy.length - 1].content + chunk,
            };
            return copy;
          }),
        controller.signal,
      );
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError((err as Error).message || "Algo deu errado.");
      setMessages((prev) => {
        const copy = [...prev];
        if (copy[copy.length - 1]?.role === "assistant" && !copy[copy.length - 1].content)
          copy.pop();
        return copy;
      });
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col bg-gradient-to-b from-brand-50/60 to-white">
      {/* barra do assistente */}
      <div className="border-b border-brand-100 bg-white/80 backdrop-blur">
        <div className="container-page flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <div className="leading-tight">
              <p className="font-bold text-ink">PandoraMind</p>
              <p className="text-xs text-ink-soft">Assistente de estudos</p>
            </div>
          </div>
          <button
            onClick={() => {
              abortRef.current?.abort();
              setMessages([welcome(nome)]);
              setError(null);
            }}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
          >
            <RotateCcw className="h-4 w-4" /> <span className="hidden sm:inline">Nova conversa</span>
          </button>
        </div>
      </div>

      {/* mensagens */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="container-page flex max-w-3xl flex-col gap-4 py-6">
          {messages.map((msg, i) => (
            <div key={i} className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}>
              {msg.role === "assistant" && <Logo className="mr-2 mt-1 h-8 w-8 shrink-0" />}
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed shadow-card",
                  msg.role === "user"
                    ? "rounded-br-sm bg-brand-600 text-white"
                    : "rounded-bl-sm border border-brand-100 bg-white text-ink",
                )}
              >
                {msg.content ? (
                  <span dangerouslySetInnerHTML={renderContent(msg.content)} />
                ) : (
                  <span className="inline-flex gap-1 py-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand-300" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand-300 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-brand-300 [animation-delay:300ms]" />
                  </span>
                )}
              </div>
            </div>
          ))}

          {messages.length <= 1 && (
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="flex items-start gap-2 rounded-xl border border-brand-100 bg-white/70 px-4 py-3 text-left text-sm text-ink-muted transition-colors hover:bg-white"
                >
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {s}
                </button>
              ))}
            </div>
          )}

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}
        </div>
      </div>

      {/* input */}
      <div className="border-t border-brand-100 bg-white/80 backdrop-blur">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="container-page max-w-3xl py-4"
        >
          <div className="flex items-end gap-2 rounded-2xl border border-brand-200 bg-white p-2 shadow-card focus-within:ring-2 focus-within:ring-brand-100">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
              rows={1}
              placeholder="Escreva sua pergunta… (Enter para enviar)"
              className="max-h-40 flex-1 resize-none bg-transparent px-3 py-2 text-ink outline-none placeholder:text-ink-soft"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="btn-primary px-4 py-2.5"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-ink-soft">
            Ferramenta de apoio ao estudo · não substitui avaliação profissional · espaço seguro e
            livre de preconceitos 🏳️‍🌈
          </p>
        </form>
      </div>
    </div>
  );
}
