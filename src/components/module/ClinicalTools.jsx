import { useState } from 'react'
import Icon from '../Icon.jsx'
import FigureTable from '../figure/FigureTable.jsx'

// CLINICAL TOOLS — solo herramientas prácticas. Calculadoras de cabecera + tablas de referencia.
// tools = [{ tipo:'calc', calc:'ppc'|'lindegaard', titulo } | { tipo:'table', titulo, table }]

function Field({ label, unit, value, onChange }) {
  return (
    <label className="block">
      <span className="text-[12px] text-ink-300">{label}</span>
      <div className="mt-1 flex items-center rounded-lg border border-slate-700 bg-slate-900/70 focus-within:border-steel-400/50 focus-within:ring-2 focus-within:ring-steel-400/25">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-2 font-mono text-[15px] tabular text-ink-100 outline-none placeholder:text-ink-400"
          placeholder="—"
        />
        {unit && <span className="pr-3 text-[12px] text-ink-400">{unit}</span>}
      </div>
    </label>
  )
}

function Result({ value, unit, tone, interpretacion }) {
  const TONE = {
    steel: 'text-steel-300 ring-steel-400/30 bg-steel-soft',
    pearl: 'text-pearl-300 ring-pearl-400/30 bg-pearl-soft',
    terra: 'text-terra-300 ring-terra-400/30 bg-terra-soft',
    mint: 'text-mint-300 ring-mint-400/30 bg-mint-soft',
    idle: 'text-ink-400 ring-slate-700 bg-slate-900/50',
  }
  return (
    <div className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 ring-1 ${TONE[tone] || TONE.idle}`}>
      <div>
        <p className="font-mono text-[26px] font-semibold leading-none tabular text-ink-100">
          {value ?? '—'}
          {value != null && unit ? <span className="ml-1 text-[14px] text-ink-400">{unit}</span> : ''}
        </p>
      </div>
      {interpretacion && <p className="text-right text-[12.5px] font-medium leading-snug">{interpretacion}</p>}
    </div>
  )
}

function CppCalculator() {
  const [map, setMap] = useState('')
  const [icp, setIcp] = useState('')
  const m = parseFloat(map)
  const i = parseFloat(icp)
  const ok = !isNaN(m) && !isNaN(i)
  const cpp = ok ? Math.round(m - i) : null
  let tone = 'idle'
  let txt = 'Introduce PAM y PIC'
  if (ok) {
    if (i > 22) {
      tone = 'terra'
      txt = 'PIC >22: además de la PPC, trata la PIC'
    } else if (cpp < 50) {
      tone = 'terra'
      txt = 'Riesgo de isquemia (<50)'
    } else if (cpp < 60) {
      tone = 'pearl'
      txt = 'Límite bajo'
    } else if (cpp <= 70) {
      tone = 'mint'
      txt = 'En objetivo (60–70)'
    } else {
      tone = 'steel'
      txt = 'No forzar >70 (riesgo de SDRA)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="PAM" unit="mmHg" value={map} onChange={setMap} />
        <Field label="PIC" unit="mmHg" value={icp} onChange={setIcp} />
      </div>
      <Result value={cpp} unit="mmHg" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">PPC = PAM − PIC · nivela el transductor al trago.</p>
    </div>
  )
}

function LindegaardCalculator() {
  const [mca, setMca] = useState('')
  const [ica, setIca] = useState('')
  const m = parseFloat(mca)
  const c = parseFloat(ica)
  const ok = !isNaN(m) && !isNaN(c) && c > 0
  const ratio = ok ? +(m / c).toFixed(1) : null
  let tone = 'idle'
  let txt = 'Introduce VMF de ACM y ACI'
  if (ok) {
    if (m < 120) {
      tone = 'mint'
      txt = 'Sin criterio de vasoespasmo por velocidad'
    } else if (ratio < 3) {
      tone = 'steel'
      txt = 'Hiperemia (no vasoespasmo)'
    } else if (ratio <= 6) {
      tone = 'pearl'
      txt = 'Vasoespasmo'
    } else {
      tone = 'terra'
      txt = 'Vasoespasmo severo'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="VMF ACM" unit="cm/s" value={mca} onChange={setMca} />
        <Field label="VMF ACI extracraneal" unit="cm/s" value={ica} onChange={setIca} />
      </div>
      <Result value={ratio} unit="" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Lindegaard = VMF(ACM) / VMF(ACI) · &gt;3 vasoespasmo · &gt;6 severo.</p>
    </div>
  )
}

function MapCalculator() {
  const [pas, setPas] = useState('')
  const [pad, setPad] = useState('')
  const s = parseFloat(pas)
  const d = parseFloat(pad)
  const ok = !isNaN(s) && !isNaN(d)
  const map = ok ? Math.round((s + 2 * d) / 3) : null
  let tone = 'idle'
  let txt = 'Introduce PAS y PAD'
  if (ok) {
    if (map < 65) {
      tone = 'terra'
      txt = 'Por debajo del objetivo (<65)'
    } else {
      tone = 'mint'
      txt = 'En objetivo (≥65)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="PAS" unit="mmHg" value={pas} onChange={setPas} />
        <Field label="PAD" unit="mmHg" value={pad} onChange={setPad} />
      </div>
      <Result value={map} unit="mmHg" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">PAM = (PAS + 2·PAD) / 3 · objetivo ≥65 mmHg.</p>
    </div>
  )
}

function ShockIndexCalculator() {
  const [fc, setFc] = useState('')
  const [pas, setPas] = useState('')
  const f = parseFloat(fc)
  const s = parseFloat(pas)
  const ok = !isNaN(f) && !isNaN(s) && s > 0
  const si = ok ? +(f / s).toFixed(2) : null
  let tone = 'idle'
  let txt = 'Introduce FC y PAS'
  if (ok) {
    if (si < 0.7) {
      tone = 'mint'
      txt = 'Normal'
    } else if (si <= 1.0) {
      tone = 'pearl'
      txt = 'Elevado: sospecha hipoperfusión'
    } else {
      tone = 'terra'
      txt = 'Alto riesgo (>1,0)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="FC" unit="lpm" value={fc} onChange={setFc} />
        <Field label="PAS" unit="mmHg" value={pas} onChange={setPas} />
      </div>
      <Result value={si} unit="" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Índice de shock = FC / PAS · &gt;0,9 sugiere hipoperfusión.</p>
    </div>
  )
}

function QsofaCalculator() {
  const [c, setC] = useState([false, false, false])
  const crit = ['FR ≥22/min', 'PAS ≤100 mmHg', 'Alteración del estado mental']
  const score = c.filter(Boolean).length
  const tone = score >= 2 ? 'terra' : 'mint'
  const txt = score >= 2 ? 'Tamizaje positivo (≥2)' : 'Tamizaje negativo'
  return (
    <div className="grid gap-3">
      <div className="grid gap-2">
        {crit.map((label, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={c[i]}
            onClick={() => setC((p) => p.map((x, j) => (j === i ? !x : x)))}
            className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 text-left text-[13px] text-ink-200 transition-colors hover:border-slate-600"
          >
            <span
              className={[
                'grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors',
                c[i] ? 'border-terra-400/50 bg-terra-soft text-terra-300' : 'border-slate-600 text-transparent',
              ].join(' ')}
            >
              <Icon name="check" size={12} strokeWidth={2.4} />
            </span>
            {label}
          </button>
        ))}
      </div>
      <Result value={score} unit="/ 3" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">qSOFA es tamizaje pronóstico, no diagnóstico de sepsis.</p>
    </div>
  )
}

const CALCS = {
  ppc: CppCalculator,
  lindegaard: LindegaardCalculator,
  map: MapCalculator,
  shockindex: ShockIndexCalculator,
  qsofa: QsofaCalculator,
}

function ToolCard({ icon, titulo, children }) {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-800/70 p-4 shadow-card">
      <div className="mb-3 flex items-center gap-2.5">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-steel-soft text-steel-300 ring-1 ring-steel-400/20">
          <Icon name={icon} size={15} />
        </span>
        <h3 className="text-[14px] font-semibold tracking-tight text-ink-100">{titulo}</h3>
      </div>
      {children}
    </div>
  )
}

export default function ClinicalTools({ tools = [] }) {
  const calcs = tools.filter((t) => t.tipo === 'calc')
  const tables = tools.filter((t) => t.tipo === 'table')

  return (
    <div className="space-y-4">
      {calcs.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {calcs.map((t, i) => {
            const Calc = CALCS[t.calc]
            return (
              <ToolCard key={i} icon="sliders" titulo={t.titulo}>
                {Calc ? <Calc /> : null}
              </ToolCard>
            )
          })}
        </div>
      )}

      {tables.map((t, i) => (
        <ToolCard key={i} icon="list" titulo={t.titulo}>
          <FigureTable table={t.table} />
        </ToolCard>
      ))}
    </div>
  )
}
