import Icon from '../Icon.jsx'

export default function CompleteButton({ completo, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={[
        'group inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 sm:w-auto',
        completo
          ? 'bg-vital-green/15 text-vital-green ring-1 ring-vital-green/30 hover:bg-vital-green/20'
          : 'bg-icu-500 text-white shadow-lg shadow-icu/25 hover:bg-icu-600 active:scale-[0.98]',
      ].join(' ')}
    >
      <Icon
        name={completo ? 'badge' : 'check'}
        size={17}
        className={completo ? '' : 'transition-transform group-hover:scale-110'}
      />
      {completo ? 'Día completado — deshacer' : 'Marcar día completado'}
    </button>
  )
}
