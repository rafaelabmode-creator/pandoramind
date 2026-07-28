// Servidor local de desenvolvimento — reproduz as funções serverless da Vercel
// (/api/chat e /api/lead) para você testar tudo na sua máquina.
import express from "express";
import cors from "cors";
import "dotenv/config";
import { handleChat, handleLead } from "./api/_shared.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

const PORT = process.env.PORT || 3001;

app.get("/api/health", (_req, res) =>
  res.json({ ok: true, hasKey: Boolean(process.env.GEMINI_API_KEY) }),
);
app.post("/api/chat", (req, res) => handleChat(req, res));
app.post("/api/lead", (req, res) => handleLead(req, res));

app.listen(PORT, () => {
  console.log(`\n🧠  Backend PandoraMind (dev) em http://localhost:${PORT}`);
  console.log(`    Chave Gemini: ${process.env.GEMINI_API_KEY ? "configurada ✅" : "NÃO ❌ (veja .env)"}\n`);
});
