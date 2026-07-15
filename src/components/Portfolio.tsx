import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Portfolio() {
  const { t, lang } = useLanguage();
  return (
    <section id="portafolio" className="relative scroll-mt-20 py-24">
      <div className="red-glow absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            {t.portfolio.heading}
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-24 divider-line" />
          <p className="mt-4 text-muted-foreground">{t.portfolio.subheading}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              lang={lang}
              viewProjectLabel={t.portfolio.viewProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}