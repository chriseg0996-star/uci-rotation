import { Link } from 'react-router-dom'
import Icon from '../Icon.jsx'

// Encabezado compacto del módulo clínico: número, título, subtítulo y metadatos.
// Sin seguimiento de completado (filosofía de referencia de bolsillo, no curso).
export default function ModuleHero({ numero, titulo, subtitulo, meta = [] }) {
  return (
    <div>
      <Link
        to="/temario"
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-400 transition-colors hover:text-ink-100"
      >
        <Icon name="back" size={15} />
        Módulos clínicos
      </Link>

      <div className="mt-4 flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-steel-400 font-mono text-xl font-semibold text-slate-900 shadow-[0_8px_20px_-8px_rgba(143,167,196,0.5)]">
          {numero}
        </div>
        <div className="min-w-0">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-steel-400">
            Módulo {numero} · Referencia de UCI
          </p>
          <h1 className="mt-1 text-[24px] font-semibold leading-[1.1] tracking-tightest text-ink-100 sm:text-[27px]">
            {titulo}
          </h1>
          {subtitulo && (
            <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-ink-300">{subtitulo}</p>
          )}
          {meta.length > 0 && (
            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] text-ink-400">
              {meta.map((m, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <Icon name={m.icon} size={13} className="text-slate-500" />
                  {m.texto}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
