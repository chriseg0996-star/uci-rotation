import Icon from './Icon.jsx'
import Badge from './Badge.jsx'

// Estado vacío con dirección clara (qué contendrá la sección), no un simple "próximamente".
// `action` opcional (botón/enlace). `tone` colorea el icono.
const TONES = {
  steel: 'bg-steel-soft text-steel-300 ring-steel-400/25',
  pearl: 'bg-pearl-soft text-pearl-300 ring-pearl-400/25',
  terra: 'bg-terra-soft text-terra-300 ring-terra-400/25',
  mint: 'bg-mint-soft text-mint-300 ring-mint-400/25',
}

export default function EmptyState({
  icon = 'spark',
  title,
  children,
  tone = 'steel',
  status = 'En construcción',
  action,
  preview,
}) {
  return (
    <div className="relative grid place-items-center overflow-hidden rounded-2xl border border-dashed border-slate-700/70 bg-slate-800/30 px-6 py-16 text-center">
      {/* Rejilla decorativa sutil al fondo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(143,167,196,0.12) 1px, transparent 0)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, #000, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 50% at 50% 40%, #000, transparent 75%)',
        }}
      />
      <div className="relative flex flex-col items-center">
        <div
          className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ring-1 ${TONES[tone]}`}
        >
          <Icon name={icon} size={24} />
        </div>
        {status && (
          <Badge tone="neutral" dot className="mb-3">
            {status}
          </Badge>
        )}
        <h3 className="text-[17px] font-semibold tracking-tight text-ink-100">{title}</h3>
        {children && (
          <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-ink-300">{children}</p>
        )}

        {preview?.length > 0 && (
          <div className="mt-6 w-full max-w-md text-left">
            <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-400">
              Incluirá
            </p>
            <ul className="grid gap-2">
              {preview.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-slate-700/50 bg-slate-800/50 px-3.5 py-2.5"
                >
                  <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-md ring-1 ${TONES[tone]}`}>
                    <Icon name={item.icon || 'dot'} size={13} />
                  </span>
                  <span className="text-[13px] text-ink-200">{item.text || item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {action && <div className="mt-5">{action}</div>}
      </div>
    </div>
  )
}
