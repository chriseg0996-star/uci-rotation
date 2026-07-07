import Icon from '../Icon.jsx'

// Flowchart / árbol de decisión data-driven y responsivo.
// flow = [{ kind:'start'|'action'|'decision'|'end'|'warn', text, branches?: [{ label, text, kind? }] }]
const KIND = {
  start: 'border-steel-400/40 bg-steel-soft text-ink-100',
  action: 'border-slate-700 bg-slate-800 text-ink-100',
  decision: 'border-pearl-400/40 bg-pearl-soft text-ink-100',
  end: 'border-mint-400/40 bg-mint-soft text-ink-100',
  warn: 'border-terra-400/40 bg-terra-soft text-ink-100',
}

function Node({ kind = 'action', text }) {
  return (
    <div
      className={`w-full rounded-xl border px-4 py-2.5 text-center text-[13px] font-medium leading-snug ${KIND[kind] || KIND.action}`}
    >
      {text}
    </div>
  )
}

function Connector() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <span className="h-3.5 w-px bg-slate-600" />
      <Icon name="chevron" size={13} className="-mt-1 rotate-90 text-slate-600" />
    </div>
  )
}

export default function Flowchart({ flow = [] }) {
  return (
    <div className="mx-auto max-w-md py-2">
      {flow.map((node, i) => (
        <div key={i}>
          {i > 0 && <Connector />}
          <Node kind={node.kind} text={node.text} />
          {node.branches?.length > 0 && (
            <div className="mt-1 grid grid-cols-2 gap-3">
              {node.branches.map((b, j) => (
                <div key={j} className="flex flex-col items-center">
                  <span className="mt-1 rounded-full bg-slate-900 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wide text-ink-300 ring-1 ring-slate-700">
                    {b.label}
                  </span>
                  <Connector />
                  <Node kind={b.kind || 'action'} text={b.text} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
