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

function SexToggle({ value, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[
        ['H', 'Hombre'],
        ['M', 'Mujer'],
      ].map(([v, l]) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          aria-pressed={value === v}
          className={[
            'rounded-lg border px-3 py-2 text-[13px] font-medium transition-colors',
            value === v
              ? 'border-steel-400/40 bg-steel-soft text-steel-300'
              : 'border-slate-700 bg-slate-900/50 text-ink-300 hover:border-slate-600',
          ].join(' ')}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

function pcp(sexo, cm) {
  const base = sexo === 'M' ? 45.5 : 50
  return base + 0.91 * (cm - 152.4)
}

function PbwCalculator() {
  const [sexo, setSexo] = useState('H')
  const [cm, setCm] = useState('')
  const h = parseFloat(cm)
  const ok = !isNaN(h) && h > 0
  const pbw = ok ? Math.round(pcp(sexo, h)) : null
  return (
    <div className="grid gap-3">
      <SexToggle value={sexo} onChange={setSexo} />
      <Field label="Talla" unit="cm" value={cm} onChange={setCm} />
      <Result value={pbw} unit="kg" tone={ok ? 'steel' : 'idle'} interpretacion={ok ? `Vt 6 mL/kg ≈ ${Math.round(pbw * 6)} mL` : 'Introduce sexo y talla'} />
      <p className="text-[11px] text-ink-400">PCP = {`{50♂ / 45,5♀}`} + 0,91·(talla − 152,4).</p>
    </div>
  )
}

function TidalVolumeCalculator() {
  const [pbw, setPbw] = useState('')
  const [mlkg, setMlkg] = useState('6')
  const p = parseFloat(pbw)
  const m = parseFloat(mlkg)
  const ok = !isNaN(p) && !isNaN(m)
  const vt = ok ? Math.round(p * m) : null
  let tone = 'idle'
  let txt = 'Introduce PCP y mL/kg'
  if (ok) {
    if (m <= 8 && m >= 4) {
      tone = m <= 6 ? 'mint' : 'pearl'
      txt = m <= 6 ? 'Protector (≤6 mL/kg)' : 'Aceptable (4–8 mL/kg)'
    } else {
      tone = 'terra'
      txt = 'Fuera de rango protector'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="PCP" unit="kg" value={pbw} onChange={setPbw} />
        <Field label="Objetivo" unit="mL/kg" value={mlkg} onChange={setMlkg} />
      </div>
      <Result value={vt} unit="mL" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Vt = PCP × mL/kg · protector 6 (rango 4–8).</p>
    </div>
  )
}

function DrivingPressureCalculator() {
  const [pplat, setPplat] = useState('')
  const [peep, setPeep] = useState('')
  const a = parseFloat(pplat)
  const b = parseFloat(peep)
  const ok = !isNaN(a) && !isNaN(b)
  const dp = ok ? Math.round(a - b) : null
  let tone = 'idle'
  let txt = 'Introduce Pmeseta y PEEP'
  if (ok) {
    if (dp <= 15) {
      tone = 'mint'
      txt = 'En objetivo (≤15)'
    } else {
      tone = 'terra'
      txt = 'Elevado: riesgo de VILI (>15)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Pmeseta" unit="cmH₂O" value={pplat} onChange={setPplat} />
        <Field label="PEEP" unit="cmH₂O" value={peep} onChange={setPeep} />
      </div>
      <Result value={dp} unit="cmH₂O" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">ΔP = Pmeseta − PEEP · objetivo ≤15 cmH₂O.</p>
    </div>
  )
}

function ComplianceCalculator() {
  const [vt, setVt] = useState('')
  const [pplat, setPplat] = useState('')
  const [peep, setPeep] = useState('')
  const v = parseFloat(vt)
  const a = parseFloat(pplat)
  const b = parseFloat(peep)
  const ok = !isNaN(v) && !isNaN(a) && !isNaN(b) && a - b > 0
  const crs = ok ? Math.round(v / (a - b)) : null
  let tone = 'idle'
  let txt = 'Introduce Vt, Pmeseta y PEEP'
  if (ok) {
    if (crs >= 50) {
      tone = 'mint'
      txt = 'Normal (≥50)'
    } else if (crs >= 30) {
      tone = 'pearl'
      txt = 'Reducida'
    } else {
      tone = 'terra'
      txt = 'Baja (ARDS)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Field label="Vt" unit="mL" value={vt} onChange={setVt} />
        <Field label="Pmeseta" unit="cmH₂O" value={pplat} onChange={setPplat} />
        <Field label="PEEP" unit="cmH₂O" value={peep} onChange={setPeep} />
      </div>
      <Result value={crs} unit="mL/cmH₂O" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Crs = Vt / (Pmeseta − PEEP) · normal 50–70.</p>
    </div>
  )
}

function PfRatioCalculator() {
  const [pao2, setPao2] = useState('')
  const [fio2, setFio2] = useState('')
  const p = parseFloat(pao2)
  let f = parseFloat(fio2)
  if (!isNaN(f) && f > 1) f = f / 100
  const ok = !isNaN(p) && !isNaN(f) && f > 0
  const pf = ok ? Math.round(p / f) : null
  let tone = 'idle'
  let txt = 'Introduce PaO₂ y FiO₂'
  if (ok) {
    if (pf >= 300) {
      tone = 'mint'
      txt = 'Sin ARDS (≥300)'
    } else if (pf >= 200) {
      tone = 'steel'
      txt = 'ARDS leve (200–300)'
    } else if (pf >= 100) {
      tone = 'pearl'
      txt = 'ARDS moderado (100–200)'
    } else {
      tone = 'terra'
      txt = 'ARDS severo (<100)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="PaO₂" unit="mmHg" value={pao2} onChange={setPao2} />
        <Field label="FiO₂" unit="0–1 o %" value={fio2} onChange={setFio2} />
      </div>
      <Result value={pf} unit="" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">PaO₂/FiO₂ · clasificación de Berlín (PEEP ≥5).</p>
    </div>
  )
}

function MechPowerCalculator() {
  const [rr, setRr] = useState('')
  const [vt, setVt] = useState('')
  const [ppeak, setPpeak] = useState('')
  const [pplat, setPplat] = useState('')
  const [peep, setPeep] = useState('')
  const [f, v, pk, pl, pe] = [rr, vt, ppeak, pplat, peep].map(parseFloat)
  const ok = [f, v, pk, pl, pe].every((x) => !isNaN(x)) && v > 0
  const mp = ok ? +(0.098 * f * (v / 1000) * (pk - 0.5 * (pl - pe))).toFixed(1) : null
  let tone = 'idle'
  let txt = 'Introduce los 5 parámetros'
  if (ok) {
    if (mp <= 17) {
      tone = 'mint'
      txt = 'Aceptable (≤17 J/min)'
    } else {
      tone = 'terra'
      txt = 'Elevada: riesgo de VILI'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="FR" unit="rpm" value={rr} onChange={setRr} />
        <Field label="Vt" unit="mL" value={vt} onChange={setVt} />
        <Field label="Ppico" unit="cmH₂O" value={ppeak} onChange={setPpeak} />
        <Field label="Pmeseta" unit="cmH₂O" value={pplat} onChange={setPplat} />
        <Field label="PEEP" unit="cmH₂O" value={peep} onChange={setPeep} />
      </div>
      <Result value={mp} unit="J/min" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">≈ 0,098 · FR · Vt · (Ppico − ½ΔP) · umbral ~17 J/min.</p>
    </div>
  )
}

function RsbiCalculator() {
  const [rr, setRr] = useState('')
  const [vt, setVt] = useState('')
  const f = parseFloat(rr)
  const v = parseFloat(vt)
  const ok = !isNaN(f) && !isNaN(v) && v > 0
  const rsbi = ok ? Math.round(f / (v / 1000)) : null
  let tone = 'idle'
  let txt = 'Introduce FR y Vt'
  if (ok) {
    if (rsbi < 105) {
      tone = 'mint'
      txt = 'Favorable (<105)'
    } else {
      tone = 'terra'
      txt = 'Desfavorable (≥105)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="FR" unit="rpm" value={rr} onChange={setRr} />
        <Field label="Vt" unit="mL" value={vt} onChange={setVt} />
      </div>
      <Result value={rsbi} unit="resp/min/L" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">RSBI = FR / Vt(L) · &lt;105 predice éxito.</p>
    </div>
  )
}

function NifCalculator() {
  const [nif, setNif] = useState('')
  const n = Math.abs(parseFloat(nif))
  const ok = !isNaN(n)
  let tone = 'idle'
  let txt = 'Introduce el NIF/MIP (magnitud)'
  if (ok) {
    if (n >= 30) {
      tone = 'mint'
      txt = 'Fuerza adecuada (≥30)'
    } else if (n >= 25) {
      tone = 'pearl'
      txt = 'Límite (25–30)'
    } else {
      tone = 'terra'
      txt = 'Débil (<25)'
    }
  }
  return (
    <div className="grid gap-3">
      <Field label="NIF / MIP" unit="cmH₂O" value={nif} onChange={setNif} />
      <Result value={ok ? `−${n}` : null} unit="cmH₂O" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Favorable ≤ −25 a −30 cmH₂O (más negativo = más fuerza).</p>
    </div>
  )
}

function VitalCapacityCalculator() {
  const [vc, setVc] = useState('')
  const [pbw, setPbw] = useState('')
  const v = parseFloat(vc)
  const p = parseFloat(pbw)
  const ok = !isNaN(v) && !isNaN(p) && p > 0
  const mlkg = ok ? +(v / p).toFixed(1) : null
  let tone = 'idle'
  let txt = 'Introduce CV y PCP'
  if (ok) {
    if (mlkg >= 10) {
      tone = 'mint'
      txt = 'Favorable (≥10 mL/kg)'
    } else {
      tone = 'terra'
      txt = 'Reducida (<10 mL/kg)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Capacidad vital" unit="mL" value={vc} onChange={setVc} />
        <Field label="PCP" unit="kg" value={pbw} onChange={setPbw} />
      </div>
      <Result value={mlkg} unit="mL/kg" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">CV / PCP · favorable ≥10 mL/kg.</p>
    </div>
  )
}

function P01Calculator() {
  const [p01, setP01] = useState('')
  const x = parseFloat(p01)
  const ok = !isNaN(x)
  let tone = 'idle'
  let txt = 'Introduce el P0.1'
  if (ok) {
    if (x < 3.5) {
      tone = 'mint'
      txt = 'Impulso adecuado (<3,5)'
    } else if (x <= 4) {
      tone = 'pearl'
      txt = 'Límite (3,5–4)'
    } else {
      tone = 'terra'
      txt = 'Impulso alto (>4): riesgo de fracaso'
    }
  }
  return (
    <div className="grid gap-3">
      <Field label="P0.1" unit="cmH₂O" value={p01} onChange={setP01} />
      <Result value={ok ? x : null} unit="cmH₂O" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">P0.1 alto (&gt;3,5–4) sugiere impulso respiratorio elevado.</p>
    </div>
  )
}

function CuffLeakCalculator() {
  const [vti, setVti] = useState('')
  const [vte, setVte] = useState('')
  const a = parseFloat(vti)
  const b = parseFloat(vte)
  const ok = !isNaN(a) && !isNaN(b) && a > 0
  const leakMl = ok ? Math.round(a - b) : null
  const leakPct = ok ? Math.round(((a - b) / a) * 100) : null
  let tone = 'idle'
  let txt = 'Introduce Vt inflado y desinflado'
  if (ok) {
    if (leakMl < 110 || leakPct < 10) {
      tone = 'terra'
      txt = `Fuga baja (${leakPct}%): riesgo de estridor`
    } else {
      tone = 'mint'
      txt = `Fuga adecuada (${leakPct}%)`
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Vt cuff inflado" unit="mL" value={vti} onChange={setVti} />
        <Field label="Vt cuff desinflado" unit="mL" value={vte} onChange={setVte} />
      </div>
      <Result value={leakMl} unit="mL" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Fuga = Vti − Vte · &lt;110 mL o &lt;10–15% → riesgo de estridor.</p>
    </div>
  )
}

function HighRiskExtubCalculator() {
  const crit = [
    'Edad >65 años',
    'Cardiopatía / ICC',
    'Enfermedad respiratoria crónica (EPOC)',
    'VM >7 días',
    'Tos débil / secreciones abundantes',
    'Fracaso de SBT o extubación previa',
  ]
  const [c, setC] = useState(crit.map(() => false))
  const score = c.filter(Boolean).length
  const tone = score >= 2 ? 'terra' : score === 1 ? 'pearl' : 'mint'
  const txt = score >= 2 ? 'Alto riesgo: soporte planificado' : score === 1 ? 'Riesgo intermedio' : 'Bajo riesgo'
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
      <Result value={score} unit={`/ ${crit.length}`} tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">≥2 factores → planifica soporte profiláctico (HFNC ± VNI).</p>
    </div>
  )
}

function LactateClearanceCalculator() {
  const [ini, setIni] = useState('')
  const [act, setAct] = useState('')
  const a = parseFloat(ini)
  const b = parseFloat(act)
  const ok = !isNaN(a) && !isNaN(b) && a > 0
  const cl = ok ? Math.round(((a - b) / a) * 100) : null
  let tone = 'idle'
  let txt = 'Introduce lactato inicial y actual'
  if (ok) {
    if (cl >= 20) {
      tone = 'mint'
      txt = 'Buen aclaramiento (≥20%)'
    } else if (cl >= 10) {
      tone = 'pearl'
      txt = 'Aclaramiento límite (10–20%)'
    } else {
      tone = 'terra'
      txt = 'Sin aclaramiento (<10%): reevaluar'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Lactato inicial" unit="mmol/L" value={ini} onChange={setIni} />
        <Field label="Lactato actual" unit="mmol/L" value={act} onChange={setAct} />
      </div>
      <Result value={cl} unit="%" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Aclaramiento = (inicial − actual)/inicial · meta ≥10–20% a 2 h.</p>
    </div>
  )
}

function Scvo2Calculator() {
  const [v, setV] = useState('')
  const x = parseFloat(v)
  const ok = !isNaN(x)
  let tone = 'idle'
  let txt = 'Introduce la ScvO₂'
  if (ok) {
    if (x < 65) {
      tone = 'terra'
      txt = 'Baja (<65%): DO₂ insuficiente / extracción alta'
    } else if (x <= 75) {
      tone = 'mint'
      txt = 'Normal (65–75%)'
    } else {
      tone = 'pearl'
      txt = 'Alta (>75%): baja extracción (distributivo/citopático)'
    }
  }
  return (
    <div className="grid gap-3">
      <Field label="ScvO₂" unit="%" value={v} onChange={setV} />
      <Result value={ok ? x : null} unit="%" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Normal 65–75% · interpretar con lactato y GC, no aislada.</p>
    </div>
  )
}

function Cao2Calculator() {
  const [hb, setHb] = useState('')
  const [sao2, setSao2] = useState('')
  const [pao2, setPao2] = useState('')
  const h = parseFloat(hb)
  const s = parseFloat(sao2)
  const p = parseFloat(pao2)
  const ok = !isNaN(h) && !isNaN(s)
  const cao2 = ok ? +(1.34 * h * (s / 100) + 0.003 * (isNaN(p) ? 0 : p)).toFixed(1) : null
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Field label="Hb" unit="g/dL" value={hb} onChange={setHb} />
        <Field label="SaO₂" unit="%" value={sao2} onChange={setSao2} />
        <Field label="PaO₂" unit="mmHg" value={pao2} onChange={setPao2} />
      </div>
      <Result value={cao2} unit="mL/dL" tone={ok ? 'steel' : 'idle'} interpretacion={ok ? 'Contenido arterial de O₂' : 'Introduce Hb y SaO₂'} />
      <p className="text-[11px] text-ink-400">CaO₂ = 1,34·Hb·SaO₂ + 0,003·PaO₂ · la Hb domina la DO₂.</p>
    </div>
  )
}

function VtiSvCalculator() {
  const [d, setD] = useState('')
  const [vti, setVti] = useState('')
  const dd = parseFloat(d)
  const t = parseFloat(vti)
  const ok = !isNaN(dd) && !isNaN(t) && dd > 0
  const sv = ok ? Math.round(Math.PI * (dd / 2) ** 2 * t) : null
  let tone = 'idle'
  let txt = 'Introduce D del TSVI y VTI'
  if (ok) {
    if (sv >= 60) {
      tone = 'mint'
      txt = 'Volumen sistólico normal'
    } else {
      tone = 'terra'
      txt = 'Volumen sistólico bajo'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Diámetro TSVI" unit="cm" value={d} onChange={setD} />
        <Field label="VTI" unit="cm" value={vti} onChange={setVti} />
      </div>
      <Result value={sv} unit="mL" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">VS = π·(D/2)²·VTI · normal ≈ 60–100 mL.</p>
    </div>
  )
}

function CardiacOutputCalculator() {
  const [sv, setSv] = useState('')
  const [hr, setHr] = useState('')
  const s = parseFloat(sv)
  const f = parseFloat(hr)
  const ok = !isNaN(s) && !isNaN(f)
  const co = ok ? +((s * f) / 1000).toFixed(1) : null
  let tone = 'idle'
  let txt = 'Introduce VS y FC'
  if (ok) {
    if (co >= 4) {
      tone = 'mint'
      txt = 'Gasto normal-alto (≥4)'
    } else {
      tone = 'terra'
      txt = 'Gasto bajo (<4)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Volumen sistólico" unit="mL" value={sv} onChange={setSv} />
        <Field label="FC" unit="lpm" value={hr} onChange={setHr} />
      </div>
      <Result value={co} unit="L/min" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">GC = VS × FC · normal ≈ 4–8 L/min.</p>
    </div>
  )
}

function SvrCalculator() {
  const [map, setMap] = useState('')
  const [cvp, setCvp] = useState('')
  const [co, setCo] = useState('')
  const m = parseFloat(map)
  const v = parseFloat(cvp)
  const c = parseFloat(co)
  const ok = !isNaN(m) && !isNaN(v) && !isNaN(c) && c > 0
  const svr = ok ? Math.round(((m - v) / c) * 80) : null
  let tone = 'idle'
  let txt = 'Introduce PAM, PVC y GC'
  if (ok) {
    if (svr < 800) {
      tone = 'terra'
      txt = 'Baja (<800): vasodilatación (distributivo)'
    } else if (svr <= 1200) {
      tone = 'mint'
      txt = 'Normal (800–1200)'
    } else {
      tone = 'pearl'
      txt = 'Alta (>1200): vasoconstricción'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Field label="PAM" unit="mmHg" value={map} onChange={setMap} />
        <Field label="PVC" unit="mmHg" value={cvp} onChange={setCvp} />
        <Field label="GC" unit="L/min" value={co} onChange={setCo} />
      </div>
      <Result value={svr} unit="dyn·s·cm⁻⁵" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">RVS = (PAM − PVC)/GC × 80 · normal 800–1200.</p>
    </div>
  )
}

function AnionGapCalculator() {
  const [na, setNa] = useState('')
  const [cl, setCl] = useState('')
  const [hco3, setHco3] = useState('')
  const n = parseFloat(na)
  const c = parseFloat(cl)
  const h = parseFloat(hco3)
  const ok = !isNaN(n) && !isNaN(c) && !isNaN(h)
  const ag = ok ? Math.round(n - (c + h)) : null
  let tone = 'idle'
  let txt = 'Introduce Na, Cl y HCO₃'
  if (ok) {
    if (ag > 12) {
      tone = 'terra'
      txt = 'Brecha elevada (>12)'
    } else {
      tone = 'mint'
      txt = 'Brecha normal (8–12)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Field label="Na⁺" unit="mmol/L" value={na} onChange={setNa} />
        <Field label="Cl⁻" unit="mmol/L" value={cl} onChange={setCl} />
        <Field label="HCO₃⁻" unit="mmol/L" value={hco3} onChange={setHco3} />
      </div>
      <Result value={ag} unit="mmol/L" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">AG = Na − (Cl + HCO₃) · normal 8–12 · corrige por albúmina.</p>
    </div>
  )
}

function CorrectedAgCalculator() {
  const [ag, setAg] = useState('')
  const [alb, setAlb] = useState('')
  const a = parseFloat(ag)
  const b = parseFloat(alb)
  const ok = !isNaN(a) && !isNaN(b)
  const corr = ok ? +(a + 2.5 * (4 - b)).toFixed(1) : null
  let tone = 'idle'
  let txt = 'Introduce AG y albúmina'
  if (ok) {
    if (corr > 12) {
      tone = 'terra'
      txt = 'Brecha corregida elevada (>12)'
    } else {
      tone = 'mint'
      txt = 'Brecha corregida normal'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="AG medido" unit="mmol/L" value={ag} onChange={setAg} />
        <Field label="Albúmina" unit="g/dL" value={alb} onChange={setAlb} />
      </div>
      <Result value={corr} unit="mmol/L" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">AG corregido = AG + 2,5 × (4 − albúmina).</p>
    </div>
  )
}

function DeltaRatioCalculator() {
  const [ag, setAg] = useState('')
  const [hco3, setHco3] = useState('')
  const a = parseFloat(ag)
  const h = parseFloat(hco3)
  const ok = !isNaN(a) && !isNaN(h) && 24 - h !== 0
  const dr = ok ? +((a - 12) / (24 - h)).toFixed(2) : null
  let tone = 'idle'
  let txt = 'Introduce AG y HCO₃'
  if (ok) {
    if (dr < 0.4) {
      tone = 'terra'
      txt = '<0,4: acidosis sin brecha añadida'
    } else if (dr < 1) {
      tone = 'pearl'
      txt = '0,4–1: mixta (con y sin brecha)'
    } else if (dr <= 2) {
      tone = 'mint'
      txt = '1–2: acidosis con brecha pura'
    } else {
      tone = 'steel'
      txt = '>2: + alcalosis metab. o ac. resp. crónica'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="AG" unit="mmol/L" value={ag} onChange={setAg} />
        <Field label="HCO₃⁻" unit="mmol/L" value={hco3} onChange={setHco3} />
      </div>
      <Result value={dr} unit="" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Δ-Δ = (AG − 12) / (24 − HCO₃).</p>
    </div>
  )
}

function WinterCalculator() {
  const [hco3, setHco3] = useState('')
  const [paco2, setPaco2] = useState('')
  const h = parseFloat(hco3)
  const p = parseFloat(paco2)
  const ok = !isNaN(h)
  const exp = ok ? Math.round(1.5 * h + 8) : null
  let tone = 'idle'
  let txt = 'Introduce HCO₃'
  if (ok) {
    tone = 'steel'
    txt = `Esperada ${exp - 2}–${exp + 2} mmHg`
    if (!isNaN(p)) {
      if (p > exp + 2) {
        tone = 'terra'
        txt = `Medida ${p} > esperada: acidosis respiratoria añadida`
      } else if (p < exp - 2) {
        tone = 'pearl'
        txt = `Medida ${p} < esperada: alcalosis respiratoria añadida`
      } else {
        tone = 'mint'
        txt = 'Compensación adecuada'
      }
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="HCO₃⁻" unit="mmol/L" value={hco3} onChange={setHco3} />
        <Field label="PaCO₂ medida" unit="mmHg" value={paco2} onChange={setPaco2} />
      </div>
      <Result value={exp} unit="mmHg" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">PaCO₂ esperada = 1,5·HCO₃ + 8 (±2) · acidosis metabólica.</p>
    </div>
  )
}

const COMP_TIPOS = [
  { id: 'am', label: 'Ac. metab.', input: 'HCO₃⁻', out: 'PaCO₂', fn: (x) => `${Math.round(1.5 * x + 8 - 2)}–${Math.round(1.5 * x + 8 + 2)}` },
  { id: 'alm', label: 'Alc. metab.', input: 'HCO₃⁻', out: 'PaCO₂', fn: (x) => `${Math.round(0.7 * x + 20 - 5)}–${Math.round(0.7 * x + 20 + 5)}` },
  { id: 'ara', label: 'Ac. resp. aguda', input: 'PaCO₂', out: 'HCO₃⁻', fn: (x) => `${(24 + 1 * ((x - 40) / 10)).toFixed(0)}` },
  { id: 'arc', label: 'Ac. resp. crónica', input: 'PaCO₂', out: 'HCO₃⁻', fn: (x) => `${(24 + 4 * ((x - 40) / 10)).toFixed(0)}` },
  { id: 'alra', label: 'Alc. resp. aguda', input: 'PaCO₂', out: 'HCO₃⁻', fn: (x) => `${(24 - 2 * ((40 - x) / 10)).toFixed(0)}` },
  { id: 'alrc', label: 'Alc. resp. crónica', input: 'PaCO₂', out: 'HCO₃⁻', fn: (x) => `${(24 - 5 * ((40 - x) / 10)).toFixed(0)}` },
]

function ExpectedCompensationCalculator() {
  const [tipo, setTipo] = useState('am')
  const [val, setVal] = useState('')
  const t = COMP_TIPOS.find((x) => x.id === tipo)
  const x = parseFloat(val)
  const ok = !isNaN(x)
  const exp = ok ? t.fn(x) : null
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {COMP_TIPOS.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => setTipo(o.id)}
            aria-pressed={tipo === o.id}
            className={[
              'rounded-lg border px-2 py-1.5 text-[11.5px] font-medium transition-colors',
              tipo === o.id ? 'border-steel-400/40 bg-steel-soft text-steel-300' : 'border-slate-700 bg-slate-900/50 text-ink-300 hover:border-slate-600',
            ].join(' ')}
          >
            {o.label}
          </button>
        ))}
      </div>
      <Field label={t.input} unit={t.input.includes('CO₂') ? 'mmHg' : 'mmol/L'} value={val} onChange={setVal} />
      <Result value={exp} unit={t.out.includes('CO₂') ? 'mmHg' : 'mmol/L'} tone={ok ? 'steel' : 'idle'} interpretacion={ok ? `${t.out} esperada` : 'Elige el trastorno e introduce el valor'} />
      <p className="text-[11px] text-ink-400">La compensación nunca normaliza del todo el pH.</p>
    </div>
  )
}

function OsmolarityCalculator() {
  const [na, setNa] = useState('')
  const [glu, setGlu] = useState('')
  const [bun, setBun] = useState('')
  const n = parseFloat(na)
  const g = parseFloat(glu)
  const b = parseFloat(bun)
  const ok = !isNaN(n) && !isNaN(g) && !isNaN(b)
  const osm = ok ? Math.round(2 * n + g / 18 + b / 2.8) : null
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Field label="Na⁺" unit="mmol/L" value={na} onChange={setNa} />
        <Field label="Glucosa" unit="mg/dL" value={glu} onChange={setGlu} />
        <Field label="BUN" unit="mg/dL" value={bun} onChange={setBun} />
      </div>
      <Result value={osm} unit="mOsm/L" tone={ok ? 'steel' : 'idle'} interpretacion={ok ? 'Osmolaridad calculada' : 'Introduce Na, glucosa y BUN'} />
      <p className="text-[11px] text-ink-400">Osm calc = 2·Na + glucosa/18 + BUN/2,8.</p>
    </div>
  )
}

function OsmolarGapCalculator() {
  const [med, setMed] = useState('')
  const [na, setNa] = useState('')
  const [glu, setGlu] = useState('')
  const [bun, setBun] = useState('')
  const m = parseFloat(med)
  const n = parseFloat(na)
  const g = parseFloat(glu)
  const b = parseFloat(bun)
  const ok = !isNaN(m) && !isNaN(n) && !isNaN(g) && !isNaN(b)
  const gap = ok ? Math.round(m - (2 * n + g / 18 + b / 2.8)) : null
  let tone = 'idle'
  let txt = 'Introduce osm medida, Na, glucosa y BUN'
  if (ok) {
    if (gap > 10) {
      tone = 'terra'
      txt = 'Elevada (>10): sospecha de tóxicos'
    } else {
      tone = 'mint'
      txt = 'Normal (≤10)'
    }
  }
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Osm medida" unit="mOsm/kg" value={med} onChange={setMed} />
        <Field label="Na⁺" unit="mmol/L" value={na} onChange={setNa} />
        <Field label="Glucosa" unit="mg/dL" value={glu} onChange={setGlu} />
        <Field label="BUN" unit="mg/dL" value={bun} onChange={setBun} />
      </div>
      <Result value={gap} unit="mOsm" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Brecha = medida − calculada · &gt;10 → alcoholes tóxicos.</p>
    </div>
  )
}

function BaseExcessCalculator() {
  const [be, setBe] = useState('')
  const x = parseFloat(be)
  const ok = !isNaN(x)
  let tone = 'idle'
  let txt = 'Introduce el exceso de base'
  if (ok) {
    if (x < -2) {
      tone = 'terra'
      txt = 'Componente de acidosis metabólica'
    } else if (x > 2) {
      tone = 'pearl'
      txt = 'Componente de alcalosis metabólica'
    } else {
      tone = 'mint'
      txt = 'Normal (−2 a +2)'
    }
  }
  return (
    <div className="grid gap-3">
      <Field label="Exceso de base" unit="mmol/L" value={be} onChange={setBe} />
      <Result value={ok ? x : null} unit="mmol/L" tone={tone} interpretacion={txt} />
      <p className="text-[11px] text-ink-400">Normal −2 a +2 · negativo = acidosis metabólica.</p>
    </div>
  )
}

function BicarbDeficitCalculator() {
  const [wt, setWt] = useState('')
  const [act, setAct] = useState('')
  const [obj, setObj] = useState('')
  const w = parseFloat(wt)
  const a = parseFloat(act)
  const o = parseFloat(obj)
  const ok = !isNaN(w) && !isNaN(a) && !isNaN(o)
  const def = ok ? Math.round(0.5 * w * (o - a)) : null
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Field label="Peso" unit="kg" value={wt} onChange={setWt} />
        <Field label="HCO₃ actual" unit="mmol/L" value={act} onChange={setAct} />
        <Field label="HCO₃ objetivo" unit="mmol/L" value={obj} onChange={setObj} />
      </div>
      <Result value={def} unit="mmol" tone={ok ? 'steel' : 'idle'} interpretacion={ok ? 'Déficit estimado de HCO₃' : 'Introduce peso, HCO₃ actual y objetivo'} />
      <p className="text-[11px] text-ink-400">Déficit ≈ 0,5 × peso × (objetivo − actual) · reponer parcial y con cautela.</p>
    </div>
  )
}

const CALCS = {
  ppc: CppCalculator,
  lindegaard: LindegaardCalculator,
  map: MapCalculator,
  shockindex: ShockIndexCalculator,
  qsofa: QsofaCalculator,
  pbw: PbwCalculator,
  tidalvolume: TidalVolumeCalculator,
  drivingpressure: DrivingPressureCalculator,
  compliance: ComplianceCalculator,
  pfratio: PfRatioCalculator,
  mechpower: MechPowerCalculator,
  rsbi: RsbiCalculator,
  nif: NifCalculator,
  vitalcapacity: VitalCapacityCalculator,
  p01: P01Calculator,
  cuffleak: CuffLeakCalculator,
  highriskextub: HighRiskExtubCalculator,
  lactateclearance: LactateClearanceCalculator,
  scvo2: Scvo2Calculator,
  cao2: Cao2Calculator,
  vtisv: VtiSvCalculator,
  cardiacoutput: CardiacOutputCalculator,
  svr: SvrCalculator,
  aniongap: AnionGapCalculator,
  correctedag: CorrectedAgCalculator,
  deltaratio: DeltaRatioCalculator,
  winter: WinterCalculator,
  expectedcompensation: ExpectedCompensationCalculator,
  osmolarity: OsmolarityCalculator,
  osmolargap: OsmolarGapCalculator,
  baseexcess: BaseExcessCalculator,
  bicarbdeficit: BicarbDeficitCalculator,
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
