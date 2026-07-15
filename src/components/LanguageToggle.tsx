import { useLanguage } from "@/i18n/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
      aria-label="Cambiar idioma / Change language"
    >
      <Languages className="h-4 w-4" />
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}