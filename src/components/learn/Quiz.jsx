import { useEffect, useMemo, useState } from 'react'
import Icon from '../Icon.jsx'
import Button from '../Button.jsx'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'

// Quiz de opción múltiple con retroalimentación inmediata, puntuación y
// persistencia del mejor resultado por día.
// preguntas = [{ pregunta, opciones: [], correcta: idx, explicacion }]
const LETRAS = ['A', 'B', 'C', 'D', 'E']

function veredicto(score, total) {
  const pct = total ? score / total : 0
  if (pct >= 0.9) return { tono: 'mint', texto: 'Dominio sólido. Nivel esperado en la unidad.' }
  if (pct >= 0.7) return { tono: 'steel', texto: 'Buen desempeño. Afina los puntos fallados.' }
  if (pct >= 0.5) return { tono: 'pearl', texto: 'Base aceptable. Repasa las lecciones nucleares.' }
  return { tono: 'terra', texto: 'Repasa el módulo completo antes de continuar.' }
}

export default function Quiz({ dia, preguntas = [] }) {
  const total = preguntas.length
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useLocalStorage(`uci-rotation:quiz:${dia}`, null)

  const answeredCount = Object.keys(answers).length
  const score = useMemo(
    () =>
      Object.entries(answers).reduce(
        (acc, [q, sel]) => acc + (preguntas[q]?.correcta === sel ? 1 : 0),
        0,
      ),
    [answers, preguntas],
  )
  const completed = answeredCount === total && total > 0

  useEffect(() => {
    if (!completed) return
    setResult((prev) => {
      const best = Math.max(score, prev?.best ?? 0)
      return { best, total, completedAt: new Date().toISOString() }
    })
  }, [completed, score, total, setResult])

  const answer = (qi, oi) => {
    if (answers[qi] != null) return
    setAnswers((a) => ({ ...a, [qi]: oi }))
  }
  const reset = () => setAnswers({})

  const v = veredicto(score, total)
  const TONO = {
    mint: 'text-mint-300 ring-mint-400/30 bg-mint-soft',
    steel: 'text-steel-300 ring-steel-400/30 bg-steel-soft',
    pearl: 'text-pearl-300 ring-pearl-400/30 bg-pearl-soft',
    terra: 'text-terra-300 ring-terra-400/30 bg-terra-soft',
  }

  return (
    <div className="space-y-4">
      {/* Barra de estado */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-700/60 bg-slate-800/70 px-5 py-3.5 shadow-card">
        <div className="flex items-center gap-2 text-[13px] text-ink-300">
          <Icon name="clipboard" size={15} className="text-steel-300" />
          {answeredCount}/{total} respondidas
          {result?.best != null && (
            <span className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-2 py-0.5 font-mono text-[11px] tabular text-ink-300 ring-1 ring-slate-700">
              mejor {result.best}/{result.total}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[15px] font-semibold tabular text-ink-100">
            {score}
            <span className="text-ink-400">/{total}</span>
          </span>
          {answeredCount > 0 && (
            <Button variant="ghost" size="sm" icon="back" onClick={reset}>
              Reiniciar
            </Button>
          )}
        </div>
      </div>

      {/* Preguntas */}
      {preguntas.map((q, qi) => {
        const sel = answers[qi]
        const answered = sel != null
        return (
          <div
            key={qi}
            className="rounded-2xl border border-slate-700/60 bg-slate-800/70 p-5 shadow-card"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0 font-mono text-[11px] font-semibold tabular text-ink-400">
                {String(qi + 1).padStart(2, '0')}
              </span>
              <p className="text-[14px] font-medium leading-relaxed text-ink-100">{q.pregunta}</p>
            </div>

            <div className="mt-3.5 grid gap-2">
              {q.opciones.map((op, oi) => {
                const esCorrecta = oi === q.correcta
                const esSeleccion = oi === sel
                let cls =
                  'border-slate-700 bg-slate-900/40 text-ink-200 hover:border-slate-600 hover:bg-slate-800'
                let mark = null
                if (answered) {
                  if (esCorrecta) {
                    cls = 'border-mint-400/40 bg-mint-soft text-ink-100'
                    mark = <Icon name="check" size={15} className="text-mint-300" />
                  } else if (esSeleccion) {
                    cls = 'border-terra-400/40 bg-terra-soft text-ink-100'
                    mark = <Icon name="close" size={15} className="text-terra-300" />
                  } else {
                    cls = 'border-slate-700/60 bg-slate-900/30 text-ink-400'
                  }
                }
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={answered}
                    onClick={() => answer(qi, oi)}
                    className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-[13.5px] leading-snug transition-colors disabled:cursor-default ${cls}`}
                  >
                    <span
                      className={[
                        'grid h-6 w-6 shrink-0 place-items-center rounded-md font-mono text-[11px] font-semibold ring-1',
                        answered && esCorrecta
                          ? 'bg-mint-400/15 text-mint-300 ring-mint-400/30'
                          : answered && esSeleccion
                            ? 'bg-terra-400/15 text-terra-300 ring-terra-400/30'
                            : 'bg-slate-800 text-ink-300 ring-slate-700',
                      ].join(' ')}
                    >
                      {LETRAS[oi]}
                    </span>
                    <span className="min-w-0 flex-1">{op}</span>
                    {mark}
                  </button>
                )
              })}
            </div>

            {answered && (
              <div
                className={[
                  'mt-3 flex gap-2.5 rounded-xl border-l-2 p-3.5',
                  sel === q.correcta
                    ? 'border-mint-400/60 bg-mint-soft/50'
                    : 'border-terra-400/60 bg-terra-soft/50',
                ].join(' ')}
              >
                <Icon
                  name={sel === q.correcta ? 'badge' : 'alert'}
                  size={15}
                  className={`mt-0.5 shrink-0 ${sel === q.correcta ? 'text-mint-300' : 'text-terra-300'}`}
                />
                <p className="text-[12.5px] leading-relaxed text-ink-200">
                  <span
                    className={`font-semibold ${sel === q.correcta ? 'text-mint-300' : 'text-terra-300'}`}
                  >
                    {sel === q.correcta ? 'Correcto. ' : `Incorrecto (correcta: ${LETRAS[q.correcta]}). `}
                  </span>
                  {q.explicacion}
                </p>
              </div>
            )}
          </div>
        )
      })}

      {/* Resultado final */}
      {completed && (
        <div
          className={`flex flex-col items-center gap-2 rounded-2xl border px-5 py-6 text-center ring-1 ${TONO[v.tono]}`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">Resultado</p>
          <p className="font-mono text-[34px] font-semibold leading-none tabular text-ink-100">
            {score}
            <span className="text-ink-400">/{total}</span>
          </p>
          <p className="text-[13px] leading-relaxed text-ink-200">{v.texto}</p>
          <Button variant="secondary" size="sm" icon="back" onClick={reset} className="mt-1">
            Repetir quiz
          </Button>
        </div>
      )}
    </div>
  )
}
