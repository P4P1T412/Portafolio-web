import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="red-glow absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-lg tracking-wide text-muted-foreground"
        >
          {t.hero.tagline}
        </motion.p>
        <div className="mt-2 h-[3px] w-40 divider-line" />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display leading-[0.9]"
        >
          <span className="block text-4xl font-medium tracking-wide text-foreground/90 sm:text-6xl">
            {t.hero.title1}
          </span>
          <span className="block text-6xl font-bold tracking-tight text-foreground sm:text-8xl">
            {t.hero.title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("contacto")}
            className="rounded-full bg-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-gold-foreground transition-transform hover:scale-105"
          >
            {t.hero.cta}
          </button>
          <button
            onClick={() => scrollTo("portafolio")}
            className="rounded-full border border-border bg-secondary/30 px-7 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary"
          >
            {t.hero.secondary}
          </button>
        </motion.div>
      </div>
    </section>
  );
}