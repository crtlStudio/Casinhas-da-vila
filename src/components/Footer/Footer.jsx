import BookingBotao from '../BookingBotao/BookingBotao'
import './Footer.css'

const RNAL = '50886/AL'
const MORADA = 'Rua 1º de Dezembro 73, 4950-498 Monção, Portugal'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__info">
        <span>Para reservas</span>
        <BookingBotao />
        <div className="footer__pontuacao">
          <span>Pontuação do anfitrião</span>
          <strong>9,9</strong>
        </div>
      </div>

      <a
        className="footer__morada"
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MORADA)}`}
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
        </svg>
        {MORADA}
      </a>

      <div className="footer__legal">
        <span>RNAL n.º {RNAL}</span>
        <span>© {ano} Casinhas da Vila</span>
      </div>
    </footer>
  )
}

export default Footer
