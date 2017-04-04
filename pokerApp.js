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

var Card = function(number, name, suit) {
	this.number = number;
	this.name = name;
	this.suit = suit;
};

var shuffleDeck;

var twoClub = new Card(2, "two", "club");
var threeClub = new Card(3, "three", "club");
var fourClub = new Card(4, "four", "club");
var fiveClub = new Card(5, "five", "club");
var sixClub = new Card(6, "six", "club");
var sevenClub = new Card(7, "seven", "club");
var eightClub = new Card(8, "eight", "club");
var nineClub = new Card(9, "nine", "club");
var tenClub = new Card(10, "ten", "club");
var jackClub = new Card(11, "jack", "club");
var queenClub = new Card(12, "queen", "club");
var kingClub = new Card(13, "king", "club");
var aceClub = new Card(14, "ace", "club");

var twoSpade = new Card(2, "two", "spade");
var threeSpade = new Card(3, "three", "spade");
var fourSpade = new Card(4, "four", "spade");
var fiveSpade = new Card(5, "five", "spade");
var sixSpade = new Card(6, "six", "spade");
var sevenSpade = new Card(7, "seven", "spade");
var eightSpade = new Card(8, "eight", "spade");
var nineSpade = new Card(9, "nine", "spade");
var tenSpade = new Card(10, "ten", "spade");
var jackSpade = new Card(11, "jack", "spade");
var queenSpade = new Card(12, "queen", "spade");
var kingSpade = new Card(13, "king", "spade");
var aceSpade = new Card(14, "ace", "spade");

var twoHeart = new Card(2, "two", "heart");
var threeHeart = new Card(3, "three", "heart");
var fourHeart = new Card(4, "four", "heart");
var fiveHeart = new Card(5, "five", "heart");
var sixHeart = new Card(6, "six", "heart");
var sevenHeart = new Card(7, "seven", "heart");
var eightHeart = new Card(8, "eight", "heart");
var nineHeart = new Card(9, "nine", "heart");
var tenHeart = new Card(10, "ten", "heart");
var jackHeart = new Card(11, "jack", "heart");
var queenHeart = new Card(12, "queen","heart");
var kingHeart = new Card(13, "king", "heart");
var aceHeart = new Card(14, "ace", "heart");

var twoDiamond = new Card(2, "two", "diamond");
var threeDiamond = new Card(3, "three", "diamond");
var fourDiamond = new Card(4, "four", "diamond");
var fiveDiamond = new Card(5, "five", "diamond");
var sixDiamond = new Card(6, "six", "diamond");
var sevenDiamond = new Card(7, "seven", "diamond");
var eightDiamond = new Card(8, "eight", "diamond");
var nineDiamond = new Card(9, "nine", "diamond");
var tenDiamond = new Card(10, "ten", "diamond");
var jackDiamond = new Card(11, "jack", "diamond");
var queenDiamond = new Card(12, "queen","diamond");
var kingDiamond = new Card(13, "king", "diamond");
var aceDiamond = new Card(14, "ace", "diamond");

var allCards = [twoClub, threeClub, fourClub, fiveClub, sixClub, sevenClub, eightClub, nineClub, tenClub, jackClub, queenClub, kingClub, aceClub,
				twoSpade, threeSpade, fourSpade, fiveSpade, sixSpade, sevenSpade, eightSpade, nineSpade, tenSpade, jackSpade, queenSpade, kingSpade, aceSpade,
				twoHeart, threeHeart, fourHeart, fiveHeart, sixHeart, sevenHeart, eightHeart, nineHeart, tenHeart, jackHeart, queenHeart, kingHeart, aceHeart,
				twoDiamond, threeDiamond, fourDiamond, fiveDiamond, sixDiamond, sevenDiamond, eightDiamond, nineDiamond, tenDiamond, jackDiamond, queenDiamond, kingDiamond, aceDiamond
				];

var pokerPlayer = function (c1, c2, c3, c4, c5) {
  this.c1 = c1;
  this.c2 = c2;
  this.c3 = c3;
  this.c4 = c4;
  this.c5 = c5;
};

var player1 = new pokerPlayer();
var player2 = new pokerPlayer(); 
var player3 = new pokerPlayer();
var player4 = new pokerPlayer();
var player5 = new pokerPlayer();
var player6 = new pokerPlayer();
var player7 = new pokerPlayer();

var allPlayersInGame = [];
var allPlayersOutGame = [player1, player2, player3, player4, player5, player6, player7];

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
    startShuffle();
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
  for (i = 0; i <= numberOfPlayers -1; i++) {
  	allPlayersInGame.push(allPlayersOutGame[i]);
  }

  for (i=0; i <= allPlayersInGame.length - 1; i++) {
    allPlayersInGame[i].c1 = shuffleDeck[i];
    shuffleDeck.splice(shuffleDeck.indexOf(shuffleDeck[i]), 1);
 }

 for (i=0; i <= allPlayersInGame.length - 1; i++) {
    allPlayersInGame[i].c2 = shuffleDeck[i];
    shuffleDeck.splice(shuffleDeck.indexOf(shuffleDeck[i]), 1);
 }

 for (i=0; i <= allPlayersInGame.length - 1; i++) {
    allPlayersInGame[i].c3 = shuffleDeck[i];
    shuffleDeck.splice(shuffleDeck.indexOf(shuffleDeck[i]), 1);
 }

 for (i=0; i <= allPlayersInGame.length - 1; i++) {
    allPlayersInGame[i].c4 = shuffleDeck[i];
    shuffleDeck.splice(shuffleDeck.indexOf(shuffleDeck[i]), 1);
 }

 for (i=0; i <= allPlayersInGame.length - 1; i++) {
    allPlayersInGame[i].c5 = shuffleDeck[i];
    shuffleDeck.splice(shuffleDeck.indexOf(shuffleDeck[i]), 1);
 }
 
 console.log(allPlayersInGame);
//for (i = 0; i <= allPlayersInGame.length -1; i++) {
  //allPlayersInGame[i].c2 = "no";
  //}
  
};

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
	while (0 !== currentIndex) {
    // Pick a remaining element...
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;
    // And swap it with the current element.
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
	}
  return array;
}

function startShuffle() {
  shuffleDeck = shuffle(allCards);
  poker();
}

var pokerGame = function () {
  
};

startPrompt();