// Carga automáticamente todas las imágenes dentro de src/assets/portfolio/<id>/
// No hace falta tocar este archivo: solo creá la carpeta con el id del proyecto
// (el mismo id que usás en projects.ts) y metés las imágenes ahí adentro.

const modules = import.meta.glob(
  "/src/assets/portfolio/*/*.{png,jpg,jpeg,webp,gif}",
  { eager: true, import: "default" }
) as Record<string, string>;

const imagesByProject: Record<string, string[]> = {};

for (const path in modules) {
  // path llega como "/src/assets/portfolio/1/foto1.jpg"
  const match = path.match(/\/portfolio\/([^/]+)\//);
  if (!match) continue;
  const projectId = match[1];
  (imagesByProject[projectId] ??= []).push(modules[path]);
}

// Orden alfabético por nombre de archivo, para que sea predecible
// (renombrá tus fotos como foto1, foto2, foto3... si querés controlar el orden)
Object.values(imagesByProject).forEach((arr) => arr.sort());

export function getProjectImages(id: string): string[] {
  return imagesByProject[id] ?? [];
}