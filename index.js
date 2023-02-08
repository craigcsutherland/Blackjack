let firstCard = 3;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else if (sum > 21) {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
