import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5173,
    // Em desenvolvimento, encaminha /api/* para o servidor local (dev-server.mjs).
    proxy: {
      "/api": { target: "http://localhost:3001", changeOrigin: true },
    },
  },
});
