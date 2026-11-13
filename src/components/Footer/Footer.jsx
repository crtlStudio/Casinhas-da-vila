import './Footer.css'

// TODO: substituir pelos dados reais
const contactos = {
  morada: 'Rua da Vila, 00, 0000-000 Localidade',
  telefone: '+351 900 000 000',
  email: 'geral@casinhasdavila.pt',
  rnal: '000000/AL',
  instagram: 'https://instagram.com/',
  facebook: 'https://facebook.com/',
}

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__info">
        <span>{contactos.morada}</span>
        <a href={`tel:${contactos.telefone.replace(/\s/g, '')}`}>{contactos.telefone}</a>
        <a href={`mailto:${contactos.email}`}>{contactos.email}</a>
      </div>

      <div className="footer__links">
        <a href={contactos.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={contactos.facebook} target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer">
          Livro de Reclamações
        </a>
      </div>

      <div className="footer__legal">
        <span>RNAL n.º {contactos.rnal}</span>
        <span>© {ano} Casinhas da Vila</span>
      </div>
    </footer>
  )
}

export default Footer
