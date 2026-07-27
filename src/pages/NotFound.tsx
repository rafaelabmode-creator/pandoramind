import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="text-6xl">🧭</span>
      <h1 className="mt-6 text-3xl font-extrabold text-ink">Página não encontrada</h1>
      <p className="mt-2 text-ink-muted">
        A página que você procura não existe ou foi movida.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <Home className="h-5 w-5" /> Voltar ao início
      </Link>
    </div>
  );
}
