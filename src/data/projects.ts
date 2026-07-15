// Edita este archivo para poner tus propios proyectos.
// Reemplaza `image` por la ruta de tu imagen (ej: importa desde src/assets)
// o una URL. Deja `image: null` para mostrar un marcador de posición.

export type Project = {
  id: string;
  title: string;
  category: { es: string; en: string };
  description: { es: string; en: string };
  link?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Proyecto de Video",
    category: { es: "Edición de Video", en: "Video Editing" },
    description: {
      es: "Descripción de tu proyecto de edición de video.",
      en: "Description of your video editing project.",
    },
  },
  {
    id: "2",
    title: "Sitio Web",
    category: { es: "Desarrollo Web", en: "Web Development" },
    description: {
      es: "Descripción de tu proyecto web hecho con React.",
      en: "Description of your web project built with React.",
    },
  },
  {
    id: "3",
    title: "App Móvil",
    category: { es: "Desarrollo Móvil", en: "Mobile Development" },
    description: {
      es: "Descripción de tu app móvil hecha con Flutter.",
      en: "Description of your mobile app built with Flutter.",
    },
  },

];