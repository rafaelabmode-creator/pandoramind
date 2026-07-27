import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users } from "lucide-react";
import { type Course, statusLabels } from "../data/courses";
import { cn } from "../lib/cn";

const statusStyle: Record<Course["status"], string> = {
  "inscricoes-abertas": "bg-emerald-100 text-emerald-700",
  "lista-de-espera": "bg-amber-100 text-amber-700",
  "em-breve": "bg-brand-100 text-brand-700",
};

export function CourseCard({ course }: { course: Course }) {
  const workload = course.ficha.find((f) => f.label === "Carga horária")?.value;

  return (
    <Link
      to={`/cursos/${course.slug}`}
      className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft"
    >
      <div className="mb-4 flex items-center justify-between">
        <span
          aria-hidden
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl"
        >
          {course.emoji}
        </span>
        <span className={cn("chip", statusStyle[course.status])}>
          {statusLabels[course.status]}
        </span>
      </div>

      <span className="chip mb-2 self-start bg-brand-50 text-brand-700">
        <Users className="h-3.5 w-3.5" />
        {course.audienceLabel}
      </span>

      <h3 className="text-xl font-bold leading-snug text-ink">{course.title}</h3>
      {course.subtitle && (
        <p className="mt-1 text-sm font-medium text-brand-600">{course.subtitle}</p>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-4">
        {course.shortDescription}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-brand-50 pt-4">
        {workload && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-ink-soft">
            <Clock className="h-4 w-4" /> {workload}
          </span>
        )}
        <span className="flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:gap-2 transition-all">
          Ver curso <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
