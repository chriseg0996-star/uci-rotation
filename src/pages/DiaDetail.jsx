import { useEffect, useRef } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { getDia, DIAS } from '../data/dias.js'
import Icon from '../components/Icon.jsx'
import Button from '../components/Button.jsx'
import EmptyState from '../components/EmptyState.jsx'
import ModuleHero from '../components/module/ModuleHero.jsx'
import ModuleTabs from '../components/module/ModuleTabs.jsx'
import SectionEmpty from '../components/module/SectionEmpty.jsx'
import Overview from '../components/module/Overview.jsx'
import QuickCards from '../components/module/QuickCards.jsx'
import HighYield from '../components/module/HighYield.jsx'
import Pitfalls from '../components/module/Pitfalls.jsx'
import Evidence from '../components/module/Evidence.jsx'
import ClinicalTools from '../components/module/ClinicalTools.jsx'
import FurtherReading from '../components/module/FurtherReading.jsx'
import FigureGallery from '../components/figure/FigureGallery.jsx'
import InteractiveCase from '../components/learn/InteractiveCase.jsx'

const TABS = [
  { id: 'overview', label: 'Overview', icon: 'compass' },
  { id: 'cards', label: 'Quick Cards', icon: 'layers' },
  { id: 'figures', label: 'Figuras', icon: 'image' },
  { id: 'highyield', label: 'High-Yield', icon: 'gem' },
  { id: 'pitfalls', label: 'Pitfalls', icon: 'alert' },
  { id: 'evidence', label: 'Evidence', icon: 'book' },
  { id: 'tools', label: 'Tools', icon: 'sliders' },
  { id: 'case', label: 'Caso', icon: 'stethoscope' },
  { id: 'reading', label: '+ Lecturas', icon: 'library' },
]

function Section({ active, data }) {
  switch (active) {
    case 'overview':
      return data.overview ? <Overview overview={data.overview} /> : <SectionEmpty icon="compass" label="Overview" />
    case 'cards':
      return data.quickCards?.length ? <QuickCards cards={data.quickCards} /> : <SectionEmpty icon="layers" label="Quick Cards" />
    case 'figures':
      return data.figuras?.length ? <FigureGallery figuras={data.figuras} /> : <SectionEmpty icon="image" label="Figuras" />
    case 'highyield':
      return data.highYield?.length ? <HighYield items={data.highYield} /> : <SectionEmpty icon="gem" label="High-Yield" />
    case 'pitfalls':
      return data.pitfalls?.length ? <Pitfalls items={data.pitfalls} /> : <SectionEmpty icon="alert" label="Pitfalls" />
    case 'evidence':
      return data.evidence?.length ? <Evidence items={data.evidence} /> : <SectionEmpty icon="book" label="Evidence" />
    case 'tools':
      return data.tools?.length ? <ClinicalTools tools={data.tools} /> : <SectionEmpty icon="sliders" label="Clinical Tools" />
    case 'case':
      return data.caso ? <InteractiveCase caso={data.caso} /> : <SectionEmpty icon="stethoscope" label="Caso clínico" />
    case 'reading':
      return data.furtherReading?.length ? <FurtherReading items={data.furtherReading} /> : <SectionEmpty icon="library" label="Lecturas" />
    default:
      return null
  }
}

export default function DiaDetail() {
  const { dia } = useParams()
  const [params, setParams] = useSearchParams()
  const data = getDia(dia)
  const sectionRef = useRef(null)
  const mounted = useRef(false)

  const active = TABS.some((t) => t.id === params.get('s')) ? params.get('s') : 'overview'

  // Al cambiar de sección, desplaza el inicio de la sección bajo las pestañas (no en el montaje).
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    sectionRef.current?.scrollIntoView({ block: 'start' })
  }, [active, dia])

  if (!data) {
    return (
      <EmptyState
        icon="compass"
        tone="terra"
        status="Sin resultados"
        title="Ese módulo no existe"
        action={
          <Button as={Link} to="/temario" variant="secondary" icon="back">
            Volver a módulos clínicos
          </Button>
        }
      >
        El módulo que buscas no forma parte del currículo de 8 módulos clínicos de la rotación.
      </EmptyState>
    )
  }

  const prev = DIAS.find((d) => d.dia === data.dia - 1)
  const next = DIAS.find((d) => d.dia === data.dia + 1)

  const meta = [
    data.figuras?.length ? { icon: 'image', texto: `${data.figuras.length} figuras` } : null,
    data.evidence?.length ? { icon: 'book', texto: `${data.evidence.length} referencias` } : null,
    data.pendiente ? { icon: 'layers', texto: 'estructura base' } : null,
  ].filter(Boolean)

  return (
    <div className="space-y-5">
      <ModuleHero numero={data.dia} titulo={data.titulo} subtitulo={data.subtitulo} meta={meta} />

      <ModuleTabs tabs={TABS} active={active} onChange={(id) => setParams({ s: id }, { replace: true })} />

      <div ref={sectionRef} className="scroll-mt-16 pt-1">
        <Section active={active} data={data} />
      </div>

      {/* Navegación entre módulos */}
      <div className="flex items-center justify-between gap-2 border-t border-slate-700/50 pt-6">
        {prev ? (
          <Button as={Link} to={`/temario/${prev.dia}`} variant="secondary" size="sm" icon="back">
            {prev.titulo}
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button as={Link} to={`/temario/${next.dia}`} variant="secondary" size="sm" iconRight="arrow">
            {next.titulo}
          </Button>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}
