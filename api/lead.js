import { handleLead } from "./_shared.js";

// Função serverless (Vercel): POST /api/lead
export default function handler(req, res) {
  return handleLead(req, res);
}
