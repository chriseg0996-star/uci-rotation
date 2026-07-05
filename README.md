# UCI Rotation

Bootcamp de Terapia Intensiva para Residentes Rotantes — MVP (React + Vite + Tailwind).

Público objetivo: Medicina Interna R3 · Urgencias R3 · Anestesiología R2.

## Ejecutar

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar build
```

## Estructura

```
src/
  data/modules.js        Fuente única: navegación, currículo, métricas
  components/
    Layout.jsx           Shell: sidebar + topbar + contenido
    Sidebar.jsx          Navegación con estado activo
    Card.jsx             Superficie base reutilizable (+ CardHeader)
    ProgressCard.jsx     Tarjeta de métrica con barra de progreso
    PageHeader.jsx       Encabezado de sección
    EmptyState.jsx       Estado vacío con dirección
    Icon.jsx             Iconos SVG en línea (sin dependencias)
  pages/                 Dashboard, Temario, Checklist, Calculadoras,
                         Biblioteca, CasosClinicos, Evaluacion
```

## Diseño

Paleta clínica: navy profundo, blanco, gris atenuado, acento azul UCI (`#2D7FF9`).
Tipografía: Inter (texto) + IBM Plex Mono (datos, tabular-nums). Desktop-first, responsivo.

## Siguiente paso

- Persistencia de progreso con `localStorage`.
- Contenido de Checklist, Calculadoras, Biblioteca, Casos y Evaluación.
