import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";
import { courses, INSTRUCTOR } from "../data/courses";
import { site } from "../data/site";
import { CourseCard } from "../components/CourseCard";

const audiences = [
  {
    icon: HeartHandshake,
    title: "Para todos",
    text: "Quer entender a mente, as emoções e os relacionamentos? Conteúdo acessível, sem jargão, para a vida real.",
  },
  {
    icon: GraduationCap,
    title: "Para psicólogos",
    text: "Aprofundamento clínico com teoria baseada em evidências, supervisão e prática — para levar direto ao consultório.",
  },
];

const values = [
  { icon: Sparkles, label: "Direto ao ponto" },
  { icon: ShieldCheck, label: "Base científica" },
  { icon: BadgeCheck, label: "Prática de verdade" },
];

export function Home() {
  const featured = courses.filter((c) => c.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
        <div
          className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
          aria-hidden
        />
        <div className="container-page py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center animate-fade-up">
            <span className="chip mb-6 bg-white text-brand-700 shadow-card ring-1 ring-brand-100">
              <Sparkles className="h-4 w-4" /> Cursos de Psicologia
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.1] text-ink sm:text-5xl md:text-6xl">
              Psicologia que faz{" "}
              <span className="text-gradient">diferença na prática</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              {site.mission}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/cursos" className="btn-primary w-full sm:w-auto">
                Ver cursos <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="#cursos" className="btn-outline w-full sm:w-auto">
                Conhecer a proposta
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {values.map((v) => (
                <span
                  key={v.label}
                  className="flex items-center gap-2 text-sm font-semibold text-ink-muted"
                >
                  <v.icon className="h-4 w-4 text-brand-500" /> {v.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="container-page py-6">
        <div className="grid gap-5 md:grid-cols-2">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-card"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                <a.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{a.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CURSOS EM DESTAQUE */}
      <section id="cursos" className="container-page scroll-mt-20 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Cursos em destaque</h2>
            <p className="mt-2 text-ink-muted">Formações práticas, com começo, meio e aplicação.</p>
          </div>
          <Link
            to="/cursos"
            className="hidden shrink-0 items-center gap-1 font-semibold text-brand-700 hover:gap-2 transition-all sm:flex"
          >
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      {/* QUEM ENSINA */}
      <section className="container-page py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-12 text-white md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mb-4 bg-white/15 text-white">Quem ensina</span>
            <h2 className="text-3xl font-extrabold text-white">{INSTRUCTOR.name}</h2>
            <p className="mt-1 font-medium text-brand-200">{INSTRUCTOR.crp}</p>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-50">
              {INSTRUCTOR.bio}
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container-page pb-20">
        <div className="rounded-3xl border border-brand-100 bg-brand-50 px-6 py-12 text-center">
          <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
            Pronta(o) para dar o próximo passo?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-muted">
            Escolha um curso e transforme teoria em prática clínica de verdade.
          </p>
          <Link to="/cursos" className="btn-primary mt-7">
            Explorar todos os cursos <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
