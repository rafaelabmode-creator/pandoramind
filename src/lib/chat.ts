// Cliente de chat: envia o histórico ao backend (/api/chat) e recebe a
// resposta em streaming, chamando onToken() a cada pedaço de texto.

export type ChatRole = "user" | "assistant";
export interface ChatMessage {
  role: ChatRole;
  content: string;
}

export async function streamChat(
  messages: ChatMessage[],
  onToken: (chunk: string) => void,
  signal?: AbortSignal,
): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
    signal,
  });

  if (!response.ok) {
    let message = `Erro ${response.status} ao falar com o assistente.`;
    try {
      const data = await response.json();
      if (data?.error) message = data.error;
    } catch {
      /* sem JSON */
    }
    throw new Error(message);
  }
  if (!response.body) throw new Error("O servidor não retornou um fluxo de resposta.");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let full = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      const t = line.trim();
      if (!t.startsWith("data:")) continue;
      const data = t.slice(5).trim();
      if (!data || data === "[DONE]") continue;
      try {
        const json = JSON.parse(data);
        if (json.text) {
          full += json.text;
          onToken(json.text);
        }
      } catch {
        /* pedaço incompleto */
      }
    }
  }
  return full;
}
