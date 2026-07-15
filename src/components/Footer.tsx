import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT } from "@/i18n/translations";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-bold text-foreground">
            C-FELIPE WEB & MEDIA
          </p>
          <p className="text-sm text-muted-foreground">{t.footer.built}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <a href={CONTACT.phoneHref} className="hover:text-foreground">
            {CONTACT.phoneDisplay}
          </a>
          <p className="mt-1">
            © {new Date().getFullYear()} C-FELIPE. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}