import { useState } from "react";
import { courses, type Audience } from "../data/courses";
import { CourseCard } from "../components/CourseCard";
import { cn } from "../lib/cn";

type Filter = "todos-os-cursos" | Audience;

const filters: { key: Filter; label: string }[] = [
  { key: "todos-os-cursos", label: "Todos os cursos" },
  { key: "psicologos", label: "Para psicólogos" },
  { key: "todos", label: "Para todos" },
];

export function Courses() {
  const [filter, setFilter] = useState<Filter>("todos-os-cursos");

  const visible =
    filter === "todos-os-cursos" ? courses : courses.filter((c) => c.audience === filter);

  return (
    <div className="container-page py-14">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-extrabold text-ink">Cursos</h1>
        <p className="mt-3 text-lg text-ink-muted">
          Formações diretas ao ponto, com apostilas, estudos de caso e prática. Filtre pelo
          público que combina com você.
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar cursos">
        {filters.map((f) => (
          <button
            key={f.key}
            role="tab"
            aria-selected={filter === f.key}
            onClick={() => setFilter(f.key)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              filter === f.key
                ? "bg-brand-600 text-white shadow-card"
                : "bg-brand-50 text-brand-700 hover:bg-brand-100",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-ink-soft">
          Nenhum curso nesta categoria por enquanto. Novidades em breve! ✨
        </p>
      )}
    </div>
  );
}
