import { handleChat } from "./_shared.js";

// Função serverless (Vercel): POST /api/chat
export default function handler(req, res) {
  return handleChat(req, res);
}
