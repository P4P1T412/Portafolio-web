export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
      cta: "Cotiza conmigo",
    },
    hero: {
      tagline: "Nuestros Servicios",
      title1: "C-FELIPE",
      title2: "WEB & MEDIA",
      subtitle:
        "Freelance creativo y desarrollador. Convierto ideas en experiencias digitales: video, apps y presencia en línea.",
      cta: "Cotiza conmigo",
      secondary: "Ver portafolio",
    },
    services: {
      heading: "Servicios",
      subheading: "Todo lo que tu marca necesita, en un solo lugar.",
      items: [
        {
          title: "Edición de Foto y Video",
          desc: "Edición profesional, color y motion graphics para contenido que destaca.",
        },
        {
          title: "Manejo de Redes Sociales",
          desc: "Estrategia, contenido y gestión para hacer crecer tu comunidad.",
        },
        {
          title: "Desarrollo Web",
          desc: "Sitios y aplicaciones modernas con React, Node.js y JavaScript.",
        },
        {
          title: "Desarrollo Móvil",
          desc: "Aplicaciones móviles multiplataforma con Flutter.",
        },
        {
          title: "Nube Privada",
          desc: "Almacenamiento seguro y privado para tus archivos y tu equipo.",
        },
      ],
    },
    portfolio: {
      heading: "Portafolio",
      subheading: "Algunos de los proyectos destacadosen los que he trabajado.",
      viewProject: "Ver proyecto",
    },
    contact: {
      heading: "Trabajemos juntos",
      subheading:
        "¿Tienes un proyecto en mente? Contáctame y hagámoslo realidad.",
      label: "Contáctame",
      whatsapp: "Escríbeme por WhatsApp",
      call: "Llamar ahora",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      built: "Servicios freelance de medios y desarrollo.",
    },
  },
  en: {
    nav: {
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Get a quote",
    },
    hero: {
      tagline: "Our Services",
      title1: "C-FELIPE",
      title2: "WEB & MEDIA",
      subtitle:
        "Creative freelancer and developer. I turn ideas into digital experiences: video, apps, and online presence.",
      cta: "Get a quote",
      secondary: "View portfolio",
    },
    services: {
      heading: "Services",
      subheading: "Everything your brand needs, in one place.",
      items: [
        {
          title: "Photo & Video Editing",
          desc: "Professional editing, color and motion graphics for standout content.",
        },
        {
          title: "Social Media Management",
          desc: "Strategy, content and management to grow your community.",
        },
        {
          title: "Web Development",
          desc: "Modern websites and apps built with React, Node.js and JavaScript.",
        },
        {
          title: "Mobile Development",
          desc: "Cross-platform mobile apps built with Flutter.",
        },
        {
          title: "Private Cloud",
          desc: "Secure, private storage for your files and your team.",
        },
      ],
    },
    portfolio: {
      heading: "Portfolio",
      subheading: "Some of the notable projects he worked on.",
      viewProject: "View project",
    },
    contact: {
      heading: "Let's work together",
      subheading: "Got a project in mind? Reach out and let's make it real.",
      label: "Contact me",
      whatsapp: "Message me on WhatsApp",
      call: "Call now",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Freelance media and development services.",
    },
  },
} as const;

export const CONTACT = {
  phoneDisplay: "(+502) 4194-3417",
  phoneHref: "tel:+50241943417",
  whatsappHref: "https://wa.me/50241943417",
};