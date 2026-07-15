# Portafolio C-FELIPE WEB & MEDIA

Sitio de una sola página de scroll con navegación superior, en español e inglés (selector de idioma), pensado como publicidad para atraer clientes potenciales. Estética tomada de tu imagen: fondo negro/carbón, resplandor rojo intenso, tipografía condensada en mayúsculas y acento dorado en los botones de acción.

## Identidad visual
- **Colores**: negro/carbón de fondo, rojo dramático como color principal (resplandores y degradados), dorado cálido para botones de acción ("Cotiza conmigo") y detalles rosados/magenta como los separadores de la imagen.
- **Tipografía**: display condensada en mayúsculas para títulos (estilo del logo) + fuente limpia para el cuerpo.
- **Ambiente**: degradados radiales rojos, tarjetas oscuras semitransparentes con bordes sutiles, animaciones suaves de entrada.

## Secciones (una página con scroll)

```text
┌──────────────────────────────────────┐
│ NAV: C-FELIPE  Servicios Portafolio   │
│      Contacto        [ES/EN]          │
├──────────────────────────────────────┤
│ HERO: C-FELIPE / WEB & MEDIA          │
│ Subtítulo + [COTIZA CONMIGO]          │
│ (fondo con resplandor rojo)           │
├──────────────────────────────────────┤
│ SERVICIOS (tarjetas con íconos)       │
│ Edición Foto/Video · Redes Sociales   │
│ Desarrollo Web · Desarrollo Móvil     │
│ Nube Privada                          │
├──────────────────────────────────────┤
│ PORTAFOLIO (grid de proyectos —       │
│ tarjetas placeholder editables)       │
├──────────────────────────────────────┤
│ CONTACTO: WhatsApp + Llamar           │
│ (+502) 4194-3417                      │
├──────────────────────────────────────┤
│ FOOTER                                │
└──────────────────────────────────────┘
```

### 1. Hero
Nombre "C-FELIPE / WEB & MEDIA", frase corta de propuesta de valor, botón dorado **Cotiza conmigo** que lleva a contacto/WhatsApp. Fondo con resplandor rojo.

### 2. Servicios
Cinco tarjetas con ícono, título y descripción corta:
- Edición de Foto y Video
- Manejo de Redes Sociales
- Desarrollo Web (React, Node.js, JavaScript)
- Desarrollo Móvil (Flutter)
- Nube Privada (almacenamiento)

### 3. Portafolio (plantilla editable)
Grid de tarjetas de proyecto con imagen de marcador de posición, título, categoría y descripción. Estructura pensada para que reemplaces fácilmente imágenes e info desde un archivo de datos (ej. `src/data/projects.ts`). Incluiré 4–6 proyectos de ejemplo que borrarás/editarás.

### 4. Contacto
Botones directos a **WhatsApp** (wa.me con el número) y **Llamar** (tel:), además del texto "Contáctame (+502) 4194-3417". Sin base de datos ni backend.

### 5. Footer
Marca, número y derechos.

## Bilingüe (ES / EN)
Selector de idioma en la barra de navegación. Todos los textos vendrán de un diccionario central (`src/i18n/translations.ts`) para mantener ambos idiomas sincronizados. Español por defecto.

## Detalles técnicos
- Rutas TanStack: contenido en `src/routes/index.tsx` (página única con scroll y anclas internas para el menú). SEO en `head()`: título "C-FELIPE WEB & MEDIA — Servicios Freelance", descripción, og:title/description y twitter card.
- Tokens de color/tipografía definidos en `src/styles.css` (`@theme`, oklch). Fuentes vía `<link>` en `__root.tsx`.
- Estado de idioma con contexto React + `localStorage` (leído en efecto para evitar desajuste de hidratación).
- Componentes reutilizables: `Navbar`, `Hero`, `Services`, `Portfolio`, `Contact`, `Footer`, `LanguageToggle`.
- Datos de proyectos e íconos separados para edición fácil.
- Animaciones de entrada suaves con framer-motion.
- Sin Lovable Cloud (contacto es solo enlaces WhatsApp/llamada).

## Lo que tú harás después
Reemplazar las imágenes y textos de los proyectos en `src/data/projects.ts` y ajustar cualquier descripción de servicio.