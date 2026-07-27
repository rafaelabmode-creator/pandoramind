import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";
import { site } from "../data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50/50">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-extrabold tracking-tight text-ink">
              Pandora<span className="text-brand-600">Mind</span>
            </span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Plataforma de cursos de Psicologia da {site.name}. Formação clínica direta ao
            ponto, ética e baseada em evidências.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="mb-1 font-semibold text-ink">Navegar</span>
          <Link to="/" className="text-ink-muted hover:text-brand-700">
            Início
          </Link>
          <Link to="/cursos" className="text-ink-muted hover:text-brand-700">
            Cursos
          </Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-semibold text-ink">Contato</span>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-ink-muted hover:text-brand-700"
          >
            <Mail className="h-4 w-4" /> {site.email}
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-ink-muted hover:text-brand-700"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-brand-100">
        <div className="container-page py-5 text-center text-xs text-ink-soft">
          © {new Date().getFullYear()} {site.name} · {site.domain} · Espaço seguro e livre de
          preconceitos 🏳️‍🌈
        </div>
      </div>
    </footer>
  );
}
