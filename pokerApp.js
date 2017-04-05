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

var royalFlush = {c1: aceClub, c2: kingClub, c3: queenClub, c4: jackClub, c5: tenClub};

var shuffleDeck;

var twoClub = new Card(2, "2 ", "\u2663");
var threeClub = new Card(3, "3 ", "\u2663");
var fourClub = new Card(4, "4 ", "\u2663");
var fiveClub = new Card(5, "5 ", "\u2663");
var sixClub = new Card(6, "6 ", "\u2663");
var sevenClub = new Card(7, "7 ", "\u2663");
var eightClub = new Card(8, "8 ", "\u2663");
var nineClub = new Card(9, "9 ", "\u2663");
var tenClub = new Card(10, "10", "\u2663");
var jackClub = new Card(11, "J ", "\u2663");
var queenClub = new Card(12, "Q ", "\u2663");
var kingClub = new Card(13, "K ", "\u2663");
var aceClub = new Card(14, "A ", "\u2663");

var twoSpade = new Card(2, "2 ", "\u2660");
var threeSpade = new Card(3, "3 ", "\u2660");
var fourSpade = new Card(4, "4 ", "\u2660");
var fiveSpade = new Card(5, "5 ", "\u2660");
var sixSpade = new Card(6, "6 ", "\u2660");
var sevenSpade = new Card(7, "7 ", "\u2660");
var eightSpade = new Card(8, "8 ", "\u2660");
var nineSpade = new Card(9, "9 ", "\u2660");
var tenSpade = new Card(10, "10", "\u2660");
var jackSpade = new Card(11, "J ", "\u2660");
var queenSpade = new Card(12, "Q ", "\u2660");
var kingSpade = new Card(13, "K ", "\u2660");
var aceSpade = new Card(14, "A ", "\u2660");

var twoHeart = new Card(2, "2 ", "\u2665");
var threeHeart = new Card(3, "3 ", "\u2665");
var fourHeart = new Card(4, "4 ", "\u2665");
var fiveHeart = new Card(5, "5 ", "\u2665");
var sixHeart = new Card(6, "6 ", "\u2665");
var sevenHeart = new Card(7, "7 ", "\u2665");
var eightHeart = new Card(8, "8 ", "\u2665");
var nineHeart = new Card(9, "9 ", "\u2665");
var tenHeart = new Card(10, "10", "\u2665");
var jackHeart = new Card(11, "J ", "\u2665");
var queenHeart = new Card(12, "Q ","\u2665");
var kingHeart = new Card(13, "K ", "\u2665");
var aceHeart = new Card(14, "A ", "\u2665");

var twoDiamond = new Card(2, "2 ", "\u2666");
var threeDiamond = new Card(3, "3 ", "\u2666");
var fourDiamond = new Card(4, "4 ", "\u2666");
var fiveDiamond = new Card(5, "5 ", "\u2666");
var sixDiamond = new Card(6, "6 ", "\u2666");
var sevenDiamond = new Card(7, "7 ", "\u2666");
var eightDiamond = new Card(8, "8 ", "\u2666");
var nineDiamond = new Card(9, "9 ", "\u2666");
var tenDiamond = new Card(10, "10", "\u2666");
var jackDiamond = new Card(11, "J ", "\u2666");
var queenDiamond = new Card(12, "Q ","\u2666");
var kingDiamond = new Card(13, "K ", "\u2666");
var aceDiamond = new Card(14, "A ", "\u2666");

var allCards = [twoClub, threeClub, fourClub, fiveClub, sixClub, sevenClub, eightClub, nineClub, tenClub, jackClub, queenClub, kingClub, aceClub,
				twoSpade, threeSpade, fourSpade, fiveSpade, sixSpade, sevenSpade, eightSpade, nineSpade, tenSpade, jackSpade, queenSpade, kingSpade, aceSpade,
				twoHeart, threeHeart, fourHeart, fiveHeart, sixHeart, sevenHeart, eightHeart, nineHeart, tenHeart, jackHeart, queenHeart, kingHeart, aceHeart,
				twoDiamond, threeDiamond, fourDiamond, fiveDiamond, sixDiamond, sevenDiamond, eightDiamond, nineDiamond, tenDiamond, jackDiamond, queenDiamond, kingDiamond, aceDiamond
				];

var pokerPlayer = function (c1, c2, c3, c4, c5, playerNum, pairCount) {
  this.c1 = c1;
  this.c2 = c2;
  this.c3 = c3;
  this.c4 = c4;
  this.c5 = c5;
  this.playerNum = playerNum;
  this.pairCount = pairCount;
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

  for (i = 0; i <= allPlayersInGame.length - 1; i++) {
    allPlayersInGame[i].c5 = shuffleDeck[i];
    shuffleDeck.splice(shuffleDeck.indexOf(shuffleDeck[i]), 1);
  }

  for (i = 0; i <= allPlayersInGame.length -1; i++) {
    allPlayersInGame[i].playerNum = "Player" + parseInt(i+1);
    allPlayersInGame[i].pairCount = 0;
  }

  // allPlayersInGame[0].c1 = aceClub;
  // allPlayersInGame[0].c2 = kingClub;
  // allPlayersInGame[0].c3 = queenClub;
  // allPlayersInGame[0].c4 = jackClub;
  // allPlayersInGame[0].c5 = tenClub;

  onePair();
};


var pairCount = 0;

var onePair = function() {
  for (i = 0; i <= allPlayersInGame.length -1; i++) {
      
    if (allPlayersInGame[i].c1.number == allPlayersInGame[i].c2.number) {
      allPlayersInGame[i].pairCount += 1;
    }  
      if (allPlayersInGame[i].c1.number == allPlayersInGame[i].c3.number) {
        allPlayersInGame[i].pairCount += 1;
      } 
     if  (allPlayersInGame[i].c1.number == allPlayersInGame[i].c4.number) {
      allPlayersInGame[i].pairCount += 1;
     }
      if (allPlayersInGame[i].c1.number == allPlayersInGame[i].c5.number) {
        allPlayersInGame[i].pairCount += 1;
      }
      if (allPlayersInGame[i].c2.number == allPlayersInGame[i].c3.number) {
        allPlayersInGame[i].pairCount += 1;
      }
      if (allPlayersInGame[i].c2.number == allPlayersInGame[i].c4.number) {
        allPlayersInGame[i].pairCount += 1;
      }
      if (allPlayersInGame[i].c2.number == allPlayersInGame[i].c5.number) {
        allPlayersInGame[i].pairCount += 1;
      }
      if (allPlayersInGame[i].c3.number == allPlayersInGame[i].c4.number) {
        allPlayersInGame[i].pairCount += 1;
      }
      if (allPlayersInGame[i].c3.number == allPlayersInGame[i].c5.number) {
        allPlayersInGame[i].pairCount += 1;
      }
      if (allPlayersInGame[i].c4.number == allPlayersInGame[i].c5.number) {
        allPlayersInGame[i].pairCount += 1;
      } 
      playerHand();
      console.log("\n" + allPlayersInGame[i].playerNum + " has " + allPlayersInGame[i].pairCount + " pair(s).\n");

    }
    replay();
};

var playerHand = function () {
  console.log(allPlayersInGame[i].playerNum + "\n--------\n" + allPlayersInGame[i].c1.name + " of " + allPlayersInGame[i].c1.suit + "\n" + allPlayersInGame[i].c2.name + " of " + allPlayersInGame[i].c2.suit + "\n" + allPlayersInGame[i].c3.name + " of " + allPlayersInGame[i].c3.suit + "\n" + allPlayersInGame[i].c4.name + " of " + allPlayersInGame[i].c4.suit + "\n" + allPlayersInGame[i].c5.name + " of " + allPlayersInGame[i].c5.suit);
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

var replay = function () {
  var choice = sget("Would you like play again?\n\n1. Yes\n2. No\n").trim();
    if (choice == "1") {
    allPlayersInGame = [];
    allPlayersOutGame = [player1, player2, player3, player4, player5, player6, player7];
    console.log("-----------------------------");
    console.log("\nYou have a serious problem.\n");
    console.log("-----------------------------");
    startPrompt(); 
    }
    else if (choice == "2") {
    console.log("-----------------------------");
    console.log("\nGlad to see you move on and get the help you need.\nProblem Gambling Helpline\n(855) 387-8523\n");
    console.log("-----------------------------");
    process.exit(); 
    }
    else {
    console.log("Invalid Selection..");
    replay();
    }
};


startPrompt();