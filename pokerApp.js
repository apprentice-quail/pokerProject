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

startPrompt();