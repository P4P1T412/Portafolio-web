import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";
import { getProjectImages } from "@/data/projectImages";

const SLIDE_INTERVAL_MS = 1400;

type ProjectCardProps = {
  project: Project;
  index: number;
  lang: "es" | "en";
  viewProjectLabel: string;
};

export function ProjectCard({
  project: p,
  index: i,
  lang,
  viewProjectLabel,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const images = getProjectImages(p.id);

  // ¿El dispositivo tiene mouse real? Si no, es táctil (celular/tablet).
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Desktop: hover sobre la descripción
  const [isHovered, setIsHovered] = useState(false);

  // Mobile: la tarjeta está visible/centrada en el viewport mientras se hace scroll
  const isInView = useInView(cardRef, { amount: 0.6 });

  const active = canHover ? isHovered : isInView;

  // Ciclo automático de imágenes mientras está "activo"
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    if (!active || images.length < 2) return;
    const id = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [active, images.length]);

  // Al dejar de estar activo, vuelve a mostrar la primera imagen
  useEffect(() => {
    if (!active) setImgIndex(0);
  }, [active]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm transition-colors hover:border-primary/60"
    >
      <div className="relative aspect-video overflow-hidden bg-secondary/50">
        {images.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={images[imgIndex]}
              src={images[imgIndex]}
              alt={`${p.title} ${imgIndex + 1}`}
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageIcon className="h-8 w-8" />
            <span className="text-xs">
              {lang === "es" ? "Tu imagen aquí" : "Your image here"}
            </span>
          </div>
        )}
      </div>

      <div
        className="p-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          {p.category[lang]}
        </span>
        <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
          {p.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {p.description[lang]}
        </p>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-gold hover:underline"
          >
            {viewProjectLabel} →
          </a>
        )}
      </div>
    </motion.article>
  );
}