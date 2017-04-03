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
	var howManyPlayers = sget("How many people are playing?").trim();
		if (!howManyPlayers.match(/^[0-9]+$/)) {
				console.log("Please use a number.");
				startPrompt();
		} else {
			numberOfPlayers = parseInt(howManyPlayers);
			validatePlayerAmount(numberOfPlayers);

			if (numberOfPlayers >= 2 && numberOfPlayers <= 7) {
				console.log(numberOfPlayers + " players are playing.");
			}
		}
};

startPrompt();