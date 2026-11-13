import './BookingBotao.css'

const BOOKING_URL =
  'https://www.booking.com/hotel/pt/casinhas-da-vila-casinhas-da-vila-i-e-casinhas-da-vila-ii.pt-pt.html'

function BookingBotao() {
  return (
    <a className="booking-botao" href={BOOKING_URL} target="_blank" rel="noreferrer">
      Booking
    </a>
  )
}

export default BookingBotao
