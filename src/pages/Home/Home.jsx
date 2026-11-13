import { Link } from 'react-router-dom'
import casa from '../../assets/casa.webp'
import vila from '../../assets/casa2.webp'
import './Home.css'

// "ratio" (largura / altura) serve para as duas fotos ficarem com a mesma altura no telemóvel
const fotos = [
  { src: casa, alt: 'Fachada das Casinhas da Vila', ratio: 576 / 768 },
  { src: vila, alt: 'Câmara Municipal de Monção', ratio: 530 / 353 },
]

function Home() {
  return (
    <main className="home">
      <section className="casas">
        <div className="casas__texto">
          <p className="casas__descricao">
            No coração do centro histórico de Monção, a poucos passos do Terreiro, das
            Muralhas e dos cafés e restaurantes da vila, as Casinhas da Vila convidam a
            viver de perto a verdadeira vida da nossa vila raiana.
          </p>
          <Link to="/comodidades" className="casas__link">
            Conheça as nossas comodidades <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="casas__fotos">
          {fotos.map((foto) => (
            <img
              key={foto.alt}
              src={foto.src}
              alt={foto.alt}
              style={{ '--ratio': foto.ratio }}
            />
          ))}
        </div>
      </section>

      <section className="hero">
        <h1>Casinhas da Vila</h1>
        <p>Onde o simples se torna especial</p>
      </section>
    </main>
  )
}

export default Home
