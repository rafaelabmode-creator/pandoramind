import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Users,
  Package,
  Info,
  MessageCircle,
} from "lucide-react";
import { getCourse, statusLabels } from "../data/courses";
import { whatsappLink } from "../data/site";
import { NotFound } from "./NotFound";

export function CourseDetail() {
  const { slug } = useParams();
  const course = slug ? getCourse(slug) : undefined;

  if (!course) return <NotFound />;

  // Se o curso tem link de checkout (turma aberta), o botão leva ao pagamento.
  // Senão (lista de espera), abre o WhatsApp para captar o interesse.
  const cta =
    course.checkoutUrl ??
    whatsappLink(
      `Olá! Tenho interesse no curso "${course.title}". Pode me passar mais informações?`,
    );

  return (
    <article>
      {/* HERO DO CURSO */}
      <header className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div className="container-page relative py-14 md:py-20">
          <Link
            to="/cursos"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-100 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar aos cursos
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <span className="chip bg-white/15 text-white">
              <Users className="h-3.5 w-3.5" /> {course.audienceLabel}
            </span>
            <span className="chip bg-white/15 text-white">{statusLabels[course.status]}</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            <span aria-hidden className="mr-2">
              {course.emoji}
            </span>
            {course.title}
          </h1>
          {course.subtitle && (
            <p className="mt-3 text-xl font-medium text-brand-100">{course.subtitle}</p>
          )}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-50">
            {course.shortDescription}
          </p>

          <a
            href={cta}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-brand-700 shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-5 w-5" /> {course.ctaLabel}
          </a>
        </div>
      </header>

      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1fr_20rem]">
        {/* CONTEÚDO PRINCIPAL */}
        <div className="space-y-12">
          {/* Sobre */}
          <section>
            <h2 className="text-2xl font-extrabold text-ink">Sobre o curso</h2>
            <div className="mt-4 space-y-4">
              {course.longParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* O que você vai aprender */}
          <section>
            <h2 className="text-2xl font-extrabold text-ink">O que você vai dominar</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 rounded-xl border border-brand-100 bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm leading-relaxed text-ink-muted">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Para quem é */}
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-extrabold text-ink">
              <Users className="h-6 w-6 text-brand-600" /> Para quem é
            </h2>
            <ul className="mt-4 space-y-2.5">
              {course.targetAudience.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="leading-relaxed text-ink-muted">{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* O que está incluído */}
          {course.includes && course.includes.length > 0 && (
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-extrabold text-ink">
                <Package className="h-6 w-6 text-brand-600" /> O que está incluído
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.includes.map((inc) => (
                  <li key={inc} className="flex gap-3 rounded-xl bg-brand-50 p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-sm leading-relaxed text-ink">{inc}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* SIDEBAR: FICHA + PREÇO */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="space-y-6 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft">
            {/* Ficha técnica */}
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-700">
                <Info className="h-4 w-4" /> Ficha técnica
              </h3>
              <dl className="mt-3 space-y-3">
                {course.ficha.map((f) => (
                  <div key={f.label} className="border-b border-brand-50 pb-3 last:border-0 last:pb-0">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      {f.label}
                    </dt>
                    <dd className="mt-0.5 text-sm text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Preço */}
            {course.priceLots && course.priceLots.length > 0 && (
              <div className="border-t border-brand-100 pt-5">
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-700">
                  Investimento
                </h3>
                <div className="mt-3 space-y-2">
                  {course.priceLots.map((lot) => (
                    <div
                      key={lot.label}
                      className="flex items-center justify-between rounded-xl bg-brand-50 px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-semibold text-ink">{lot.label}</p>
                        {lot.deadline && (
                          <p className="text-xs text-ink-soft">{lot.deadline}</p>
                        )}
                      </div>
                      <span className="text-lg font-extrabold text-brand-700">{lot.price}</span>
                    </div>
                  ))}
                </div>
                {course.paymentConditions && (
                  <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                    {course.paymentConditions}
                  </p>
                )}
                {course.priceNote && (
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">{course.priceNote}</p>
                )}
              </div>
            )}

            <a
              href={cta}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <MessageCircle className="h-5 w-5" /> {course.ctaLabel}
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}
