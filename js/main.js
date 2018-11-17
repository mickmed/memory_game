cards = ["queen", "queen", "king", "king"];

// cardOne = {
// 	rank: "queen",
// 	suit: "hearts",
// 	cardImage: "images/queen-of-hearts.png";
// }
// cardTwo = {
// 	rank: "queen",
// 	suit: "diamonds",
// 	cardImage: "images/queen-of-diamonds.png";
// }
// cardThree = {
// 	rank: "king",
// 	suit: "hearts",
// 	cardImage: "images/king-of-diamonds.png";
// }
cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) {
    console.log("user flipped " + cardId);
    cardsInPlay.push(cardId);
    if (cardsInPlay === 2) {
       checkForMatch();
    }
}

flipCard(cards[0]);
flipCard(cards[2]);

