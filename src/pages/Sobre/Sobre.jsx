import BookingBotao from '../../components/BookingBotao/BookingBotao'
import { comodidades, principais } from './comodidades'
import './Sobre.css'

const iconeCheckIn = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h11M10 8l4 4-4 4" />
    <path d="M17 4h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2" />
  </svg>
)

const iconeCheckOut = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2" />
    <path d="M10 12h11M17 8l4 4-4 4" />
  </svg>
)

const iconeCriancas = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6.5" cy="5" r="2" />
    <circle cx="17.5" cy="5" r="2" />
    <circle cx="12" cy="11" r="1.5" />
    <path d="M4 20v-7.5a2.5 2.5 0 0 1 5 0V20M15 20v-7.5a2.5 2.5 0 0 1 5 0V20M10 20v-3.5a2 2 0 0 1 4 0V20" />
  </svg>
)

const iconeBerco = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 5v15M21 5v15M3 9h18M3 16h18M7 9v7M11 9v7M15 9v7M19 9v7" />
  </svg>
)

const horarios = [
  {
    icone: iconeCheckIn,
    titulo: 'Check-in',
    hora: 'Das 17:00 às 21:00',
    nota: 'Terá de informar a sua hora de chegada com antecedência ao alojamento.',
  },
  {
    icone: iconeCheckOut,
    titulo: 'Check-out',
    hora: 'Às 12:00',
  },
]

const iconeWifi = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <path d="M3 9.5a13 13 0 0 1 18 0" />
    <path d="M6 12.8a8.5 8.5 0 0 1 12 0" />
    <path d="M9 16a4 4 0 0 1 6 0" />
    <circle cx="12" cy="19" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

const iconeCozinha = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="1.5" />
    <path d="M4 8h16" />
    <rect x="7" y="11" width="10" height="7" rx="0.5" />
    <path d="M7.5 5.5h1M11.5 5.5h1M15.5 5.5h1" strokeLinecap="round" />
  </svg>
)

const pontosFortes = [
  {
    icone: iconeWifi,
    titulo: 'Wi-Fi gratuito excecional',
    descricao: 'Classificação de 10.0 dada pelos hóspedes',
  },
  {
    icone: iconeCozinha,
    titulo: 'Cozinha privativa',
    descricao: 'Máquina de café, Chaleira elétrica, Mesa de jantar, Frigorífico',
  },
]

function Sobre() {
  return (
    <main className="sobre">
      <div className="sobre__texto">
        <p>
          Localizadas no coração do centro histórico de Monção, as Casinhas da Vila
          oferecem uma oportunidade única aos seus visitantes para apreciarem de perto a
          verdadeira vida da nossa vila raiana. A menos de 50 metros terão acesso a vários
          pontos de referência da vila de Monção: o Terreiro, as Muralhas, a Câmara
          Municipal, o Museu do Alvarinho, o Posto de Turismo, a Igreja Matriz, a Igreja da
          Misericórdia e poderão aproveitar os vários cafés e restaurantes que se
          encontram ao virar de cada esquina. Aproveitem!
        </p>

        <p>
          Idiomas falados:
          <br />
          Inglês, Espanhol, Francês, <strong>Português</strong>
        </p>

        <section className="pontos-fortes">
          <h2>Pontos fortes do alojamento</h2>

          <ul className="pontos-fortes__lista">
            {pontosFortes.map((ponto) => (
              <li key={ponto.titulo} className="ponto-forte">
                <span className="ponto-forte__icone" aria-hidden="true">
                  {ponto.icone}
                </span>
                <div>
                  <p className="ponto-forte__titulo">{ponto.titulo}</p>
                  <p className="ponto-forte__descricao">{ponto.descricao}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="comodidades">
          <h2>Principais comodidades</h2>

          <ul className="comodidades__principais">
            {principais.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="comodidades__grupos">
            {comodidades.map((grupo) => (
              <div key={grupo.titulo} className="comodidades__grupo">
                <h3>{grupo.titulo}</h3>
                {grupo.nota && <p className="comodidades__nota">{grupo.nota}</p>}
                {grupo.itens && (
                  <ul className="comodidades__itens">
                    {grupo.itens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="horarios">
          {horarios.map((horario) => (
            <div key={horario.titulo} className="horario">
              <h3 className="horario__titulo">
                <span aria-hidden="true">{horario.icone}</span>
                {horario.titulo}
              </h3>
              <div>
                <p>{horario.hora}</p>
                {horario.nota && <p className="horario__nota">{horario.nota}</p>}
              </div>
            </div>
          ))}

          <div className="horario">
            <h3 className="horario__titulo">
              <span aria-hidden="true">{iconeCriancas}</span>
              Crianças e camas
            </h3>
            <div className="criancas">
              <h4>Condições de crianças</h4>
              <p>Todas as crianças são bem-vindas.</p>
              <p>
                Para ver os preços corretos e a informação sobre a ocupação, por favor,
                adicione à sua pesquisa o número de crianças no seu grupo e as respetivas
                idades.
              </p>

              <h4>Condições de berços e camas extra</h4>
              <div className="criancas__tabela">
                <p className="criancas__idade">0 - 5 anos</p>
                <p className="criancas__linha">
                  <span>
                    <span aria-hidden="true">{iconeBerco}</span>
                    Berço mediante pedido
                  </span>
                  <strong>Gratuito</strong>
                </p>
              </div>
              <p>
                O número permitido de berços está dependente da opção que escolher. Por
                favor, verifique a sua opção selecionada para mais informações.
              </p>
              <p>Não existem camas extra disponíveis nesta propriedade.</p>
              <p>Todos os berços estão sujeitos a disponibilidade.</p>
            </div>
          </div>
        </section>

        <div className="sobre__booking">
          <p>Consulte todas as condições na nossa página no Booking.com</p>
          <BookingBotao />
        </div>
      </div>
    </main>
  )
}

export default Sobre
