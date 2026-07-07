// Iconos SVG en línea (stroke, 24×24). Sin dependencias externas.
// Trazo 1.75 por defecto para una estética afilada y clínica.
const PATHS = {
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  book: 'M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2zM6 3v14',
  check: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  calc: 'M4 3h16v18H4zM8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v4M8 19h4',
  library: 'M4 4v16M9 4v16M14 5l5 15M4 8h5M4 14h5',
  stethoscope:
    'M6 3v6a5 5 0 0 0 10 0V3M6 3H4m2 0h2m6 0h2m-2 0h-2M11 19a3 3 0 1 0 6 0v-3M17 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
  clipboard:
    'M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1zM8 5H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2M9 12l2 2 4-4',
  pulse: 'M2 12h4l2-6 4 12 2-6h8',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  back: 'M19 12H5M11 18l-6-6 6-6',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2',
  chevron: 'M9 6l6 6-6 6',
  clock: 'M12 7v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z',
  badge: 'M9 12l2 2 4-4M12 3l2.1 1.4 2.5.2.9 2.4 1.9 1.6-.7 2.4.7 2.4-1.9 1.6-.9 2.4-2.5.2L12 21l-2.1-1.4-2.5-.2-.9-2.4L4.6 15.4l.7-2.4-.7-2.4 1.9-1.6.9-2.4 2.5-.2z',
  target: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
  bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3z',
  alert: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  case: 'M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m5 0H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1z',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  // — Nuevos
  gem: 'M6 3h12l3 6-9 12L3 9zM3 9h18M9 3 6 9l6 12M15 3l3 6-6 12',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M6 6l12 12M18 6 6 18',
  plus: 'M12 5v14M5 12h14',
  dot: 'M12 12h.01',
  layers: 'M12 3 3 8l9 5 9-5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5',
  compass: 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zM15.5 8.5 13 13l-4.5 2.5L11 11z',
  flame: 'M12 3c1.5 3 4 4.5 4 8a4 4 0 0 1-8 0c0-1 .3-1.8.8-2.5C9.8 9.7 11 8.5 12 3z',
  image: 'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M8.5 9.5a1.5 1.5 0 1 1 0-.01',
  expand: 'M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3',
  external: 'M14 4h6v6M20 4l-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5',
  sliders: 'M4 6h9M17 6h3M4 12h3M11 12h9M4 18h13M21 18h-1M13 4v4M7 10v4M17 16v4',
  brain:
    'M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.5A3 3 0 0 0 6 18a3 3 0 0 0 3 2V4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.5A3 3 0 0 1 18 18a3 3 0 0 1-3 2V4z',
  waveform: 'M2 12h3l2-7 3 14 2-9 2 5 2-3h6',
  zoomIn: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM21 21l-4.3-4.3M11 8v6M8 11h6',
}

export default function Icon({ name, className = '', size = 18, strokeWidth = 1.75 }) {
  const d = PATHS[name] || PATHS.grid
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
