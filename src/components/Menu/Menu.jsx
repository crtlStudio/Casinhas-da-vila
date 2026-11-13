import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import ReservaModal from '../ReservaModal/ReservaModal'
import './Menu.css'

// em mobile estes passam para dentro do menu hambúrguer
const links = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Pontos de interesse', to: '/pontos-de-interesse' },
]

function Menu() {
  const [aberto, setAberto] = useState(false)
  const [reservaAberta, setReservaAberta] = useState(false)

  // fecha o menu com a tecla Escape
  useEffect(() => {
    if (!aberto) return
    const fechar = (e) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', fechar)
    return () => window.removeEventListener('keydown', fechar)
  }, [aberto])

  return (
    <header className="menu">
      <Link to="/" className="menu__logo">
        <img src={logo} alt="Casinhas da Vila" />
      </Link>

      <div className="menu__acoes">
        <button
          type="button"
          className="menu__destaque"
          onClick={() => setReservaAberta(true)}
        >
          Reservar
        </button>

        <nav
          id="menu-nav"
          className={`menu__nav${aberto ? ' menu__nav--aberto' : ''}`}
        >
          <ul className="menu__links">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} onClick={() => setAberto(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`menu__hamburger${aberto ? ' menu__hamburger--aberto' : ''}`}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="menu-nav"
          onClick={() => setAberto((a) => !a)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <ReservaModal aberto={reservaAberta} onFechar={() => setReservaAberta(false)} />
    </header>
  )
}

export default Menu
