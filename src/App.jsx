import Menu from './components/Menu/Menu.jsx'
import Footer from './components/Footer/Footer.jsx'
import CrtlStudio from './components/CrtlStudio/CrtlStudio.jsx'
import Home from './pages/Home/Home.jsx'

function App() {
  return (
    <div className="app">
      <Menu />
      <Home />
      <CrtlStudio />
      <Footer />
    </div>
  )
}

export default App
