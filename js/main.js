cards = [
	{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
	},
	{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
	},
	{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
	},
	{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
	}

];


cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) {
    console.log("user flipped " + cardId.rank);
    console.log(cardId.cardImage);
    console.log(cardId.suit);
    cardsInPlay.push(cardId.rank);
    if (cardsInPlay === 2) {
       checkForMatch();
    }
}

flipCard(cards[0]);
flipCard(cards[2]);

