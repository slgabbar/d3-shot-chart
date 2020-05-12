var PLAYER_SELECTED = false;

// when player card is cliced
function player_clicked(e) {
	var card = d3.select(e)
	// console.log(card);
	if (PLAYER_SELECTED) {
		// if clicked on selected player, unselect
		if (card.classed("player-card-clicked")) {
			unclick_player();
		}
	} else {
		card.classed("player-card", false);
		card.classed("player-card-clicked", true);
		PLAYER_SELECTED = true;
	}
}

function unclick_player() {
	var player = d3.select(".player-card-clicked");
	player.classed("player-card-clicked", false);
	player.classed("player-card", true);
	PLAYER_SELECTED = false;
}