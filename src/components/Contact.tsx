import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT } from "@/i18n/translations";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contacto" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border bg-card/60 p-10 backdrop-blur-sm"
        >
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            {t.contact.heading}
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-24 divider-line" />
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            {t.contact.subheading}
          </p>

          <p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">
            {t.contact.label}
          </p>
          <p className="font-display text-2xl font-bold text-foreground">
            {CONTACT.phoneDisplay}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-gold-foreground transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              {t.contact.whatsapp}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-7 py-3 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary"
            >
              <Phone className="h-5 w-5" />
              {t.contact.call}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}