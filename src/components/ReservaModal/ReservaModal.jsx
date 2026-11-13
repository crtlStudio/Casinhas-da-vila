import { useEffect, useRef } from 'react'
import BookingBotao from '../BookingBotao/BookingBotao'
import './ReservaModal.css'

function ReservaModal({ aberto, onFechar }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (aberto && !dialog.open) dialog.showModal()
    if (!aberto && dialog.open) dialog.close()
  }, [aberto])

  return (
    <dialog
      ref={dialogRef}
      className="reserva-modal"
      aria-labelledby="reserva-modal-titulo"
      // o Escape fecha o <dialog> nativamente; aqui só sincronizamos o estado
      onClose={onFechar}
      // clicar fora do painel (no fundo) fecha o modal
      onClick={(e) => e.target === e.currentTarget && onFechar()}
    >
      <div className="reserva-modal__painel">
        <button
          type="button"
          className="reserva-modal__fechar"
          aria-label="Fechar"
          onClick={onFechar}
        >
          ×
        </button>

        <p id="reserva-modal-titulo" className="reserva-modal__texto">
          Para reservas entre na nossa página no Booking
        </p>

        <BookingBotao />
      </div>
    </dialog>
  )
}

export default ReservaModal
