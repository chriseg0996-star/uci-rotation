import Icon from '../Icon.jsx'

// EVIDENCE — tarjetas de evidencia (reemplazan listas de referencias largas).
// item = { org, titulo, revista, anio, doi, pubmed, url, nivel, porque, recomendacion, cambio }
const NIVEL = {
  Guía: 'bg-steel-soft text-steel-300 ring-steel-400/25',
  ECA: 'bg-pearl-soft text-pearl-300 ring-pearl-400/25',
  Consenso: 'bg-mint-soft text-mint-300 ring-mint-400/25',
  Revisión: 'bg-slate-800 text-ink-300 ring-slate-700',
}

function Row({ label, children }) {
  if (!children) return null
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-400">{label}</p>
      <p className="mt-0.5 text-[13px] leading-snug text-ink-200">{children}</p>
    </div>
  )
}

function LinkChip({ href, icon, children }) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-2.5 py-1 text-[11.5px] font-medium text-steel-300 ring-1 ring-slate-700 transition-colors hover:bg-slate-750 hover:text-steel-300"
    >
      <Icon name={icon} size={13} />
      {children}
    </a>
  )
}

export default function Evidence({ items = [] }) {
  return (
    <div className="space-y-4">
      {items.map((e, i) => (
        <article key={i} className="rounded-2xl border border-slate-700/60 bg-slate-800/70 p-4 shadow-card sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            {e.org && (
              <span className="rounded-md bg-slate-900 px-2 py-0.5 text-[11px] font-semibold text-ink-200 ring-1 ring-slate-700">
                {e.org}
              </span>
            )}
            {e.nivel && (
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${NIVEL[e.nivel] || NIVEL['Revisión']}`}>
                {e.nivel}
              </span>
            )}
            <span className="ml-auto font-mono text-[12px] tabular text-ink-400">{e.anio}</span>
          </div>

          <h3 className="mt-2.5 text-[14.5px] font-semibold leading-snug text-ink-100">{e.titulo}</h3>
          {e.revista && <p className="mt-0.5 text-[12px] italic text-ink-400">{e.revista}</p>}

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <Row label="Por qué importa">{e.porque}</Row>
            <Row label="Recomendación principal">{e.recomendacion}</Row>
            <Row label="Qué cambió en la práctica">{e.cambio}</Row>
          </div>

          {(e.doi || e.pubmed || e.url) && (
            <div className="mt-3.5 flex flex-wrap items-center gap-2 border-t border-slate-700/50 pt-3">
              <LinkChip href={e.doi ? `https://doi.org/${e.doi}` : null} icon="external">
                DOI
              </LinkChip>
              <LinkChip href={e.pubmed ? `https://pubmed.ncbi.nlm.nih.gov/${e.pubmed}/` : null} icon="external">
                PubMed
              </LinkChip>
              <LinkChip href={e.url} icon="book">
                Guía
              </LinkChip>
              {e.doi && <span className="font-mono text-[11px] text-ink-400">doi:{e.doi}</span>}
            </div>
          )}
        </article>
      ))}
    </div>
  )
}
