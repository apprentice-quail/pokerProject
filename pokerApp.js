//2-7 players
//straight flush (same suit) e.g. 5,6,7,8,9
//four of a kind
//full house (3 of a kind + 2 of a kind)
//flush e.g. 5 cards of the same suit
//straight (suit insensitive)
//3 of a kind
//2 pair
//1 pair
//high card

var sget = require('sget');
maxPlayersAllowed = 7;

var twoClub = new Card(2, "club");
var threeClub = new Card(3, "club");
var fourClub = new Card(4, "club");
var fiveClub = new Card(5, "club");
var sixClub = new Card(6, "club");
var sevenClub = new Card(7, "club");
var eightClub = new Card(8, "club");
var nineClub = new Card(9, "club");
var tenClub = new Card(10, "club");
var jackClub = new Card(11, "club");
var queenClub = new Card(12, "club");
var kingClub = new Card(13, "club");
var aceClub = new Card(14, "club");

var twoSpade = new Card(2, "spade");
var threeSpade = new Card(3, "spade");
var fourSpade = new Card(4, "spade");
var fiveSpade = new Card(5, "spade");
var sixSpade = new Card(6, "spade");
var sevenSpade = new Card(7, "spade");
var eightSpade = new Card(8, "spade");
var nineSpade = new Card(9, "spade");
var tenSpade = new Card(10, "spade");
var jackSpade = new Card(11, "spade");
var queenSpade = new Card(12, "spade");
var kingSpade = new Card(13, "spade");
var aceSpade = new Card(14, "spade");

var twoHeart = new Card(2, "heart");
var threeHeart = new Card(3, "heart");
var fourHeart = new Card(4, "heart");
var fiveHeart = new Card(5, "heart");
var sixHeart = new Card(6, "heart");
var sevenHeart = new Card(7, "heart");
var eightHeart = new Card(8, "heart");
var nineHeart = new Card(9, "heart");
var tenHeart = new Card(10, "heart");
var jackHeart = new Card(11, "heart");
var queenHeart = new Card(12, "heart");
var kingHeart = new Card(13, "heart");
var aceHeart = new Card(14, "heart");

var twoDiamond = new Card(2, "diamond");
var threeDiamond = new Card(3, "diamond");
var fourDiamond = new Card(4, "diamond");
var fiveDiamond = new Card(5, "diamond");
var sixDiamond = new Card(6, "diamond");
var sevenDiamond = new Card(7, "diamond");
var eightDiamond = new Card(8, "diamond");
var nineDiamond = new Card(9, "diamond");
var tenDiamond = new Card(10, "diamond");
var jackDiamond = new Card(11, "diamond");
var queenDiamond = new Card(12, "diamond");
var kingDiamond = new Card(13, "diamond");
var aceDiamond = new Card(14, "diamond");

var allCards = [twoClub, threeClub, fourClub, fiveClub, sixClub, sevenClub, eightClub, nineClub, tenClub, jackClub, queenClub, kingClub, aceClub,
				twoSpade, threeSpade, fourSpade, fiveSpade, sixSpade, sevenSpade, eightSpade, nineSpade, tenSpade, jackSpade, queenSpade, kingSpade, aceSpade,
				twoHeart, threeHeart, fourHeart, fiveHeart, sixHeart, sevenHeart, eightHeart, nineHeart, tenHeart, jackHeart, queenHeart, kingHeart, aceHeart,
				twoDiamond, threeDiamond, fourDiamond, fiveDiamond, sixDiamond, sevenDiamond, eightDiamond, nineDiamond, tenDiamond, jackDiamond, queenDiamond, kingDiamond, aceDiamond
				];

var validatePlayerAmount = function(isThisManyPlayersOK) {
	if(isThisManyPlayersOK > maxPlayersAllowed) {
		console.log("Sorry, only " + maxPlayersAllowed + " people may play at a time.");
		startPrompt();
	} else if (isThisManyPlayersOK < 2) {
		console.log("You'll need at least 2 players.");
		startPrompt();
	}  else if (isThisManyPlayersOK) {
		return isThisManyPlayersOK;
	}
};

var startPrompt = function() {
	var howManyPlayers = sget("\nHow many people are playing?\n").trim();
	numberOfPlayers = parseInt(howManyPlayers);
	validatePlayerAmount(numberOfPlayers);
	if (!howManyPlayers.match(/^[0-9]+$/)) {
		console.log("Please use a number.");
		startPrompt();
	} else if (numberOfPlayers >= 2 && numberOfPlayers <= 7) {
		console.log("\n" + numberOfPlayers + " players are playing.\n");
		gameType();
	}
};

var gameType = function () {
  var game = sget("\nWhat game would you like to play?\n\n1. Poker\n2. Blackjack\n3. Go Fish\n").trim();

  if (game == "1") {
  	console.log("\nYou chose poker\n");
  	console.log(allCards);
    poker();
  }
  else if (game == "2") {
  	console.log("\nBlackjack is currently unavailable...Please choose a different game..\n");
    gameType();
  }
  else if (game == "3") {
  	console.log("\nGo Fish is currently unavailable...Please choose a different game..\n");
    gameType();
  }
  else {
  	console.log("Invalid selection..");
    gameType();
  }
};

var poker = function () {

};

var Card = function(number, suit) {
	this.number = number;
	this.suit = suit;
};


startPrompt();