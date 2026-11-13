import casa1 from '../../assets/images/casa1.webp'
import casa2 from '../../assets/images/casa2.webp'
import './Home.css'

const casas = [
  {
    nome: 'Casa I',
    img: casa1,
    href: '#casa-1',
    lado: 'esquerda',
    // TODO: substituir pela descrição real da casa
    descricao:
      'Uma casa acolhedora no coração da vila, com sala ampla, cozinha equipada e um pátio soalheiro para relaxar ao fim do dia.',
  },
  {
    nome: 'Casa II',
    img: casa2,
    href: '#casa-2',
    lado: 'direita',
    // TODO: substituir pela descrição real da casa
    descricao:
      'Um refúgio tranquilo, com quartos luminosos, decoração tradicional e todo o conforto para uma estadia a dois ou em família.',
  },
]

function Home() {
  return (
    <main className="home">
      <section className="casas">
        {casas.map((casa) => (
          <article key={casa.nome} className={`casa casa--${casa.lado}`}>
            <a href={casa.href} className="casa__foto">
              <img src={casa.img} alt={casa.nome} />
              <h2>{casa.nome}</h2>
            </a>
            <p className="casa__descricao">{casa.descricao}</p>
          </article>
        ))}
      </section>

      <section className="hero">
        <h1>Casinhas da Vila</h1>
        <p>Onde o simples se torna especial</p>
      </section>
    </main>
  )
}

export default Home
