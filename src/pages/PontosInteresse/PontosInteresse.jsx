import castelo from '../../assets/castelo.webp'
import './PontosInteresse.css'

// distância a partir das Casinhas da Vila
const pontos = [
  { nome: 'Igreja Matriz de Monção', distancia: '50 m' },
  { nome: 'Hospital da Misericórdia de Monção', distancia: '100 m' },
  { nome: 'Casa do Curro', distancia: '100 m' },
  { nome: 'Castelo de Monção', distancia: '150 m' },
  { nome: 'Casa de Rodas', distancia: '1,6 km' },
  { nome: 'Parque a Canuda', distancia: '2,1 km' },
  { nome: 'Parque infantil Casal', distancia: '3,6 km' },
  { nome: 'Palácio da Brejoeira', distancia: '4,4 km' },
  { nome: 'Praia Fluvial de Pinheiros', distancia: '5 km' },
  { nome: 'Torre de Lapela', distancia: '6 km' },
]

const restaurantes = [
  { tipo: 'Restaurante', nome: 'Igreja da Misericórdia' },
  { tipo: 'Restaurante', nome: 'Restaurante Cabral' },
  { tipo: 'Restaurante', nome: 'Taberna da Travessa' },
]

// pesquisa o local no Google Maps, sempre em Monção
const mapa = (pesquisa) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${pesquisa}, Monção`)}`

const iconeLocal = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
)

const iconeTalheres = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3v6a2 2 0 0 0 4 0V3M8 3v18" />
    <path d="M17 21V3c-2 1-3 3.5-3 7v3h3" />
  </svg>
)

function PontosInteresse() {
  return (
    <main className="pontos">
      <div className="pontos__conteudo">
        <h1>Pontos de interesse</h1>

        <div className="pontos__tabelas">
          <section>
            <h2 className="pontos__seccao">
              <span aria-hidden="true">{iconeLocal}</span>
              Nas proximidades
            </h2>

            <ul className="pontos__lista">
              {pontos.map((ponto) => (
                <li key={ponto.nome}>
                  <a href={mapa(ponto.nome)} target="_blank" rel="noreferrer">
                    <span className="pontos__nome">{ponto.nome}</span>
                    <span className="pontos__detalhe">{ponto.distancia}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="pontos__seccao">
              <span aria-hidden="true">{iconeTalheres}</span>
              Restaurantes e cafés
            </h2>

            <ul className="pontos__lista">
              {restaurantes.map((restaurante) => (
                <li key={restaurante.nome}>
                  <a
                    href={mapa(`${restaurante.tipo} ${restaurante.nome}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <span className="pontos__detalhe">{restaurante.tipo} · </span>
                      <span className="pontos__nome">{restaurante.nome}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <article className="destaque">
          <figure className="destaque__foto">
            <img src={castelo} alt="Muralhas e jardins do Castelo de Monção" loading="lazy" />
            <figcaption className="destaque__fonte">
              Foto:{' '}
              <a
                href="https://commons.wikimedia.org/wiki/File:Mon%C3%A7ao.jpg"
                target="_blank"
                rel="noreferrer"
              >
                José Antonio Gil Martínez
              </a>
              , via Wikimedia Commons (
              <a
                href="https://creativecommons.org/licenses/by/2.0/deed.pt"
                target="_blank"
                rel="noreferrer"
              >
                CC BY 2.0
              </a>
              )
            </figcaption>
          </figure>

          <div className="destaque__texto">
            <h2>Castelo de Monção</h2>
            <p>
              O <strong>Castelo de Monção</strong>, ou <strong>Fortaleza de Monção</strong>, no
              Minho, localiza-se na freguesia de Monção e Troviscoso, vila e município de
              Monção, distrito de Viana do Castelo, em Portugal.
            </p>
            <p>
              Erguido na margem esquerda, a jusante de Melgaço, tinha como função primitiva
              defender neste trecho a passagem do rio Minho.
            </p>
            <p>
              O Castelo de Monção está classificado como Monumento Nacional desde 1910.
            </p>
            <p className="destaque__fonte">
              Fonte:{' '}
              <a
                href="https://pt.wikipedia.org/wiki/Castelo_de_Mon%C3%A7%C3%A3o"
                target="_blank"
                rel="noreferrer"
              >
                Wikipédia — Castelo de Monção
              </a>{' '}
              (
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt"
                target="_blank"
                rel="noreferrer"
              >
                CC BY-SA 4.0
              </a>
              )
            </p>
          </div>
        </article>

        <p className="roteiro">
          <a
            className="roteiro__link"
            href="https://www.vagamundos.pt/visitar-moncao-roteiro/"
            target="_blank"
            rel="noreferrer"
          >
            O que visitar? Siga o roteiro <span aria-hidden="true">→</span>
          </a>
          <span className="destaque__fonte">Roteiro do blogue Vagamundos (vagamundos.pt)</span>
        </p>
      </div>
    </main>
  )
}

export default PontosInteresse
