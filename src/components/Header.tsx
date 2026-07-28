import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { site } from "../data/site";
import { cn } from "../lib/cn";
import { Logo } from "./Logo";

const nav = [
  { label: "Início", to: "/" },
  { label: "Cursos", to: "/cursos" },
  { label: "Assistente IA", to: "/assistente" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="PandoraMind — início">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-tight text-ink">
            Pandora<span className="text-brand-600">Mind</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                  isActive ? "text-brand-700" : "text-ink-muted hover:text-brand-700",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/cursos" className="btn-primary ml-2 px-5 py-2 text-sm">
            <Sparkles className="h-4 w-4" />
            Ver cursos
          </Link>
        </nav>

        <button
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-100 bg-white md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-3 text-base font-semibold",
                    isActive ? "bg-brand-50 text-brand-700" : "text-ink-muted",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/cursos"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              <Sparkles className="h-4 w-4" />
              Ver cursos
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="px-4 py-3 text-sm text-ink-soft"
            >
              {site.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
