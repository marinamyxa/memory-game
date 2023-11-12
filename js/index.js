const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard,secondCard;

const flipCard = e => {
const target = e.target.parentElement;

target.classList.add("flip");
if (!hasFlippedCard) {
    // First click

    hasFlippedCard = true;
    firstCard = target;
}  else {
    // Second click

    hasFlippedCard = false;
    secondCard =target;

    // Check for match
}
};

cards.forEach(card => {
    //Add Event Listener to every card
    card.addEventListener("click", flipCard);
})