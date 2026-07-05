import { useState } from 'react'
import Icon from '../Icon.jsx'
import Button from '../Button.jsx'

// Caso clínico interactivo. Revela fases progresivamente y exige que el residente
// formule su conducta (razonamiento) antes de mostrar el análisis experto.
// caso = { titulo, contexto, fases: [{ titulo, vineta, datos?, pregunta, pista?, analisis: [], aprendizaje? }] }
const MIN_RAZONAMIENTO = 15

export default function InteractiveCase({ caso }) {
  const [unlocked, setUnlocked] = useState(1)
  const [revealed, setRevealed] = useState([])
  const [notes, setNotes] = useState({})
  const [pistas, setPistas] = useState([])

  if (!caso?.fases?.length) return null
  const total = caso.fases.length
  const isRevealed = (i) => revealed.includes(i)
  const terminado = revealed.length === total

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/70 shadow-card">
      {/* Cabecera del caso */}
      <div className="border-b border-slate-700/50 bg-slate-850/60 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-steel-soft text-steel-300 ring-1 ring-steel-400/20">
              <Icon name="stethoscope" size={16} />
            </span>
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-steel-400">
                Caso clínico interactivo
              </p>
              <h3 className="mt-0.5 text-[15px] font-semibold tracking-tight text-ink-100">
                {caso.titulo}
              </h3>
            </div>
          </div>
          <span className="shrink-0 font-mono text-[12px] tabular text-ink-400">
            {Math.min(unlocked, total)}/{total}
          </span>
        </div>
        {caso.contexto && (
          <p className="mt-3 text-[13.5px] leading-relaxed text-ink-200">{caso.contexto}</p>
        )}
      </div>

      {/* Fases */}
      <div className="divide-y divide-slate-700/40">
        {caso.fases.slice(0, unlocked).map((fase, i) => {
          const shown = isRevealed(i)
          const note = notes[i] || ''
          const canReveal = note.trim().length >= MIN_RAZONAMIENTO
          const esUltimaVisible = i === unlocked - 1

          return (
            <div key={i} className="px-5 py-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-slate-900 font-mono text-[11px] font-semibold tabular text-steel-300 ring-1 ring-slate-700">
                  {i + 1}
                </span>
                <h4 className="text-[13.5px] font-semibold tracking-tight text-ink-100">
                  {fase.titulo}
                </h4>
              </div>

              <p className="text-[13.5px] leading-relaxed text-ink-200">{fase.vineta}</p>

              {/* Datos clínicos */}
              {fase.datos?.length > 0 && (
                <dl className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-2 rounded-xl border border-slate-700/50 bg-slate-900/40 p-3.5 sm:grid-cols-3">
                  {fase.datos.map((d, j) => (
                    <div key={j} className="min-w-0">
                      <dt className="text-[10.5px] uppercase tracking-wide text-ink-400">{d.k}</dt>
                      <dd className="font-mono text-[13px] tabular text-ink-100">{d.v}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {/* Pregunta + razonamiento */}
              <div className="mt-4 rounded-xl border border-steel-400/20 bg-steel-soft p-4">
                <p className="flex items-start gap-2 text-[13.5px] font-medium text-ink-100">
                  <Icon name="target" size={15} className="mt-0.5 shrink-0 text-steel-300" />
                  {fase.pregunta}
                </p>

                {fase.pista && (
                  <button
                    type="button"
                    onClick={() =>
                      setPistas((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]))
                    }
                    className="mt-2.5 inline-flex items-center gap-1.5 text-[12px] font-medium text-steel-300 transition-colors hover:text-steel-400"
                  >
                    <Icon name="bulb" size={13} />
                    {pistas.includes(i) ? 'Ocultar pista' : 'Ver pista'}
                  </button>
                )}
                {fase.pista && pistas.includes(i) && (
                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink-300">{fase.pista}</p>
                )}

                {!shown && (
                  <>
                    <textarea
                      value={note}
                      onChange={(e) => setNotes((n) => ({ ...n, [i]: e.target.value }))}
                      rows={3}
                      placeholder="Escribe tu conducta y el razonamiento fisiológico que la sustenta…"
                      className="mt-3 w-full resize-y rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2.5 text-[13px] leading-relaxed text-ink-100 placeholder:text-ink-400 focus:border-steel-400/50 focus:outline-none focus:ring-2 focus:ring-steel-400/30"
                    />
                    <div className="mt-3 flex items-center gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        icon="compass"
                        disabled={!canReveal}
                        onClick={() => setRevealed((r) => [...r, i])}
                      >
                        Revelar análisis experto
                      </Button>
                      {!canReveal && (
                        <span className="text-[11.5px] text-ink-400">
                          Formula tu conducta para desbloquear.
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Análisis experto */}
              {shown && (
                <div className="mt-4 animate-fade-up">
                  <p className="mb-2.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-mint-300">
                    <Icon name="badge" size={14} />
                    Análisis experto
                  </p>
                  <ol className="space-y-2.5 border-l border-slate-700 pl-4">
                    {fase.analisis.map((a, j) => (
                      <li key={j} className="relative text-[13.5px] leading-relaxed text-ink-200">
                        <span className="absolute -left-[25px] top-0 grid h-5 w-5 place-items-center rounded-full bg-slate-800 font-mono text-[10px] tabular text-steel-300 ring-1 ring-slate-700">
                          {j + 1}
                        </span>
                        {a}
                      </li>
                    ))}
                  </ol>

                  {fase.aprendizaje && (
                    <div className="mt-3.5 flex gap-3 rounded-xl border border-pearl-400/20 bg-pearl-soft p-3.5">
                      <Icon name="gem" size={15} className="mt-0.5 shrink-0 text-pearl-300" />
                      <p className="text-[12.5px] leading-relaxed text-ink-100">
                        {fase.aprendizaje}
                      </p>
                    </div>
                  )}

                  {esUltimaVisible && i < total - 1 && (
                    <Button
                      variant="secondary"
                      size="sm"
                      iconRight="arrow"
                      className="mt-4"
                      onClick={() => setUnlocked((u) => u + 1)}
                    >
                      Continuar a la siguiente fase
                    </Button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {terminado && (
        <div className="flex items-center gap-3 border-t border-slate-700/50 bg-mint-soft/40 px-5 py-4">
          <Icon name="badge" size={18} className="shrink-0 text-mint-300" />
          <p className="text-[13px] leading-relaxed text-ink-200">
            Caso completado. Revisa tu razonamiento contra el análisis experto de cada fase e
            identifica dónde tu conducta habría divergido.
          </p>
        </div>
      )}
    </div>
  )
}
