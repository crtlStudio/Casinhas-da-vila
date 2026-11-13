import { legendas } from './legendas'
import './Comodidades.css'

// todas as fotos que estiverem em src/assets/galeria aparecem aqui, por ordem do nome
const fotos = Object.entries(
  import.meta.glob('../../assets/galeria/*.{webp,jpg,jpeg,png}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([caminho, src]) => {
    const nome = caminho.split('/').pop().replace(/\.\w+$/, '')
    return { src, legenda: legendas[nome] ?? '' }
  })

function Comodidades() {
  return (
    <main className="comodidades-pagina">
      <h1>As nossas comodidades</h1>

      {fotos.length > 0 ? (
        <ul className="galeria">
          {fotos.map((foto, i) => (
            <li key={foto.src}>
              <figure>
                <img
                  src={foto.src}
                  alt={foto.legenda || `Casinhas da Vila — foto ${i + 1}`}
                  loading="lazy"
                />
                <figcaption>{foto.legenda}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <p className="galeria__vazia">Fotos em breve.</p>
      )}
    </main>
  )
}

export default Comodidades
