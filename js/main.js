cards = [{
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

function flipCard() {
	var cardId = this.getAttribute("data-id");
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    // var img = document.getElementsByTagName('img');
    // img[cardId].setAttribute("src", cards[cardId].cardImage);
    this.setAttribute("src", cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
    	
        checkForMatch();
    }
}



function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener("click", flipCard);
        // console.log(cardElement);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();