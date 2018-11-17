console.log("Up and running!");


cards = ["queen", "queen", "king", "king"];

cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = "king";
var cardThree = "king";

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
	if(cardOne === cardTwo){
		alert("you found a match");
	}else{
		alert("sorry, try again");
	}
}
console.log(cardsInPlay);