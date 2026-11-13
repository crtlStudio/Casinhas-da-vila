import { useEffect, useState } from 'react'
import './Menu.css'

const reservar = { label: 'Reservar', href: '#reservar' }

// em mobile estes passam para dentro do menu hambúrguer
const links = [
  { label: 'Sobre', href: '#sobre' },
  // TODO: ligar à página/secção dos pontos de interesse
  { label: 'Pontos de interesse', href: '#pontos-de-interesse' },
]

function Menu() {
  const [aberto, setAberto] = useState(false)

  // fecha o menu com a tecla Escape
  useEffect(() => {
    if (!aberto) return
    const fechar = (e) => e.key === 'Escape' && setAberto(false)
    window.addEventListener('keydown', fechar)
    return () => window.removeEventListener('keydown', fechar)
  }, [aberto])

  return (
    <header className="menu">
      <a href="/" className="menu__logo">Casinhas da Vila</a>

      <div className="menu__acoes">
        <a href={reservar.href} className="menu__destaque">
          {reservar.label}
        </a>

        <nav
          id="menu-nav"
          className={`menu__nav${aberto ? ' menu__nav--aberto' : ''}`}
        >
          <ul className="menu__links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setAberto(false)}>
                  {link.label}
                </a>
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
    </header>
  )
}

export default Menu
