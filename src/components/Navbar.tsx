import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

const links = [
  { id: "servicios", key: "services" as const },
  { id: "portafolio", key: "portfolio" as const },
  { id: "contacto", key: "contact" as const },
];

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left font-display leading-none tracking-wide"
        >
          <span className="block text-sm font-medium text-foreground/80">
            C-FELIPE
          </span>
          <span className="block text-lg font-bold text-foreground">
            WEB & MEDIA
          </span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.nav[l.key]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => scrollTo("contacto")}
            className="hidden rounded-full bg-gold px-4 py-2 text-sm font-bold text-gold-foreground transition-transform hover:scale-105 sm:inline-flex"
          >
            {t.nav.cta}
          </button>
        </div>
      </nav>
    </header>
  );
}