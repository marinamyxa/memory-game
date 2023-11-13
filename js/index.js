const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

const flipCard = e => {
const target = e.target.parentElement;

target.classList.add("flip");

console.log("FRAMEWORK OF CURRENT CARD", target.dataset.framework);
if (!hasFlippedCard) {
    // First click

    hasFlippedCard = true;
    firstCard = target;
}  else {
    // Second click

    hasFlippedCard = false;
    secondCard = target;

    // Check for match
    checkForMatch();
}
};

const checkForMatch = () => {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    } else {
        setTimeout (() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
        }, 1000 )
    }
}

cards.forEach(card => {
    //Add Event Listener to every card
    card.addEventListener("click", flipCard);
})