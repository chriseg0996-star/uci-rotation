import Icon from './Icon.jsx'

// Botón reutilizable con variantes semánticas y tamaños.
// Renderiza <button> por defecto; `as={Link}` o `as="a"` para navegación.
const VARIANTS = {
  primary:
    'bg-steel-400 text-slate-900 font-semibold shadow-[0_6px_20px_-8px_rgba(143,167,196,0.55)] hover:bg-steel-300 active:scale-[0.98]',
  secondary:
    'bg-slate-800 text-ink-200 ring-1 ring-slate-700 hover:bg-slate-750 hover:text-ink-100 hover:ring-slate-600',
  ghost: 'text-ink-300 hover:bg-slate-800 hover:text-ink-100',
  success:
    'bg-mint-soft text-mint-300 ring-1 ring-mint-400/30 hover:bg-mint-400/15 active:scale-[0.98]',
  danger:
    'bg-terra-soft text-terra-300 ring-1 ring-terra-400/30 hover:bg-terra-400/15 active:scale-[0.98]',
}

const SIZES = {
  sm: 'h-8 px-3 text-[13px] gap-1.5 rounded-lg',
  md: 'h-10 px-4 text-sm gap-2 rounded-xl',
  lg: 'h-12 px-5 text-[15px] gap-2.5 rounded-xl',
}

export default function Button({
  as: Tag = 'button',
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  className = '',
  children,
  ...rest
}) {
  const isBtn = Tag === 'button'
  return (
    <Tag
      {...(isBtn ? { type: rest.type || 'button' } : {})}
      className={[
        'group inline-flex select-none items-center justify-center whitespace-nowrap font-medium transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
        'disabled:pointer-events-none disabled:opacity-40',
        VARIANTS[variant],
        SIZES[size],
        className,
      ].join(' ')}
      {...rest}
    >
      {icon && <Icon name={icon} size={size === 'sm' ? 15 : 16} />}
      {children}
      {iconRight && (
        <Icon
          name={iconRight}
          size={size === 'sm' ? 15 : 16}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Tag>
  )
}
