// Loading Skeleton — primitivos de carga con shimmer (.skeleton en index.css).
// Bloque base configurable + presets de línea y tarjeta.
export default function Skeleton({ className = '', rounded = 'rounded-lg' }) {
  return <div className={`skeleton ${rounded} ${className}`} aria-hidden="true" />
}

// Bloque de líneas de texto; la última sale más corta.
export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2.5 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-3 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`}
          rounded="rounded"
        />
      ))}
    </div>
  )
}

// Tarjeta de módulo en carga (coincide con el layout de ModuleCard).
export function SkeletonCard() {
  return (
    <div
      className="rounded-2xl border border-slate-700/60 bg-slate-800/70 p-5 shadow-card"
      aria-hidden="true"
    >
      <div className="flex items-start gap-4">
        <Skeleton className="h-11 w-11" rounded="rounded-xl" />
        <div className="flex-1 space-y-2.5 pt-1">
          <Skeleton className="h-2.5 w-16" rounded="rounded" />
          <Skeleton className="h-4 w-3/4" rounded="rounded" />
        </div>
      </div>
      <div className="mt-4 flex gap-4 border-t border-slate-700/50 pt-3.5">
        <Skeleton className="h-3 w-20" rounded="rounded" />
        <Skeleton className="h-3 w-24" rounded="rounded" />
      </div>
    </div>
  )
}

// Rejilla de tarjetas en carga, para estados de carga a nivel de página.
export function SkeletonGrid({ count = 6, className = '' }) {
  return (
    <div
      className={`grid gap-4 md:grid-cols-2 ${className}`}
      role="status"
      aria-label="Cargando contenido"
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
