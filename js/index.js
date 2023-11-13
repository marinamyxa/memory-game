const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let boardLoced = false;
let firstCard, secondCard;

const flipCard = e => {
    if (boardLoced) return;

const target = e.target.parentElement;

if (target === firstCard) return;

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
    const isEqual = firstCard.dataset.framework === secondCard.dataset.framework;

    isEqual ? disableCards() : unflipCards();
};

const disableCards = () => {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
};

const unflipCards = () => {
    boardLoced = true;

    setTimeout (() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        boardLoced = false;
    }, 1000 );
};

cards.forEach(card => {
    //Add Event Listener to every card
    card.addEventListener("click", flipCard);
})