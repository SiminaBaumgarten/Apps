const seatsContainer = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const playSelect = document.getElementById('tplay');
let ticketPrice = Number(playSelect.value);

seatsContainer.addEventListener('click', selectSeat);

function selectSeat(e) {

    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
    }
    updateCountAndTotalPrice();
}

function updateCountAndTotalPrice() {
    const selectedSeats = document.querySelectorAll('.row .selected');
    count.innerHTML = selectedSeats.length;
    total.innerHTML = selectedSeats.length * ticketPrice;
}

playSelect.addEventListener('change', updateTicketPrice);

function updateTicketPrice() {
    ticketPrice = playSelect.value;
    updateCountAndTotalPrice();
}