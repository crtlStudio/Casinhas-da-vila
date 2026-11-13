import { Route, Routes } from 'react-router-dom'
import Menu from './components/Menu/Menu.jsx'
import Footer from './components/Footer/Footer.jsx'
import CrtlStudio from './components/CrtlStudio/CrtlStudio.jsx'
import Home from './pages/Home/Home.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import Comodidades from './pages/Comodidades/Comodidades.jsx'
import PontosInteresse from './pages/PontosInteresse/PontosInteresse.jsx'

function App() {
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/comodidades" element={<Comodidades />} />
        <Route path="/pontos-de-interesse" element={<PontosInteresse />} />
      </Routes>
      <CrtlStudio />
      <Footer />
    </div>
  )
}

export default App
