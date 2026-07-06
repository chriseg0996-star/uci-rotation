import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Inicio from './pages/Inicio.jsx'
import Temario from './pages/Temario.jsx'
import DiaDetail from './pages/DiaDetail.jsx'
import Checklist from './pages/Checklist.jsx'
import Calculadoras from './pages/Calculadoras.jsx'
import Biblioteca from './pages/Biblioteca.jsx'
import CasosClinicos from './pages/CasosClinicos.jsx'
import Evaluacion from './pages/Evaluacion.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="temario" element={<Temario />} />
        <Route path="temario/:dia" element={<DiaDetail />} />
        <Route path="checklist" element={<Checklist />} />
        <Route path="calculadoras" element={<Calculadoras />} />
        <Route path="biblioteca" element={<Biblioteca />} />
        <Route path="casos" element={<CasosClinicos />} />
        <Route path="evaluacion" element={<Evaluacion />} />
      </Route>
    </Routes>
  )
}
