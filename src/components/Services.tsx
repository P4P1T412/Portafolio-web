import { motion } from "framer-motion";
import { Clapperboard, MessagesSquare, Code2, Smartphone, CloudUpload } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Clapperboard, MessagesSquare, Code2, Smartphone, CloudUpload];

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="servicios" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 text-center">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            {t.services.heading}
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-24 divider-line" />
          <p className="mt-4 text-muted-foreground">{t.services.subheading}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/60"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}