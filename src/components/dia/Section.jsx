import SectionHeader from '../SectionHeader.jsx'

// Sección de la página del día. Envuelve SectionHeader (encabezado canónico) + contenido.
export default function Section({ icon, title, count, tone = 'steel', children, className = '' }) {
  return (
    <section className={`scroll-mt-24 ${className}`}>
      <SectionHeader icon={icon} title={title} count={count} tone={tone} />
      {children}
    </section>
  )
}
