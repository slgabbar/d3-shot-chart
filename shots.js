// shots.js
var PLAYER_SELECTED = false;
var record_table = d3.select(".play-by-play");
var shots = [];
var plays = [];

function register_shots(court, width) {
	var timer = 0;
	var delay = 200;
	var prevent = false;


	court
		.on("click", function() {
			var mouse = d3.mouse(this);
			var shot_type = d3.event.target.id;
			timer = setTimeout(function() {
				if (!prevent) {
					made_shot(court, shot_type, mouse);
					unclick_player();
				}
				prevent=false;
			}, delay);
		})

		.on("dblclick", function() {
			var mouse = d3.mouse(this);
			var shot_type = d3.event.target.id;
			clearTimeout(timer);
			prevent = true;
			miss_shot(court, shot_type, mouse);
			unclick_player();
		});
	}

function made_shot(court, shot, pos) {
	var fg_type;
	if (shot=="inside-arc") {
		//inside three point arc
		fg_type = "2PT FG";
	} else { fg_type="3PT FG"; }

	try {

		var player = d3.select(".player-card-clicked").select(".name").text();
		var play = record_table.append("tr")
		play.append("th")
			.text(player)
			.style("color", "orange");
		play.append("th")
			.text(fg_type)
			.style("color", "brown");
		play.append("th")
			.text(shot)
			.style("color", "purple");
		play.append("th")
			.text("made")
			.style("color", "green");
		plays.push(play);

		var shot = court.append("circle")
			.attr("cx", pos[0])
			.attr("cy", pos[1])
			.attr("r", "3")
			.attr("class", "made-shot");
		shots.push(shot);
	} catch(err) {
		console.log("No player was selected for shot.");
	}
}

function miss_shot(court, shot, pos) {
	var fg_type;
	if (shot=="inside-arc") {
		//inside three point arc
		fg_type = "2PT FG";
	} else { fg_type="3PT FG"; }

	try {

		var player = d3.select(".player-card-clicked").select(".name").text();
		var play = record_table.append("tr")
		play.append("th")
			.text(player)
			.style("color", "orange");
		play.append("th")
			.text(fg_type)
			.style("color", "brown");
		play.append("th")
			.text(shot)
			.style("color", "purple");
		play.append("th")
			.text("miss")
			.style("color", "red");
		plays.push(play);

		var shot = court.append("circle")
			.attr("cx", pos[0])
			.attr("cy", pos[1])
			.attr("r", "3")
			.attr("class", "miss-shot");
		shots.push(shot);
	} catch(err) {
		console.log("No player was selected for shot.");
	}
}

function undo_shot() {
	var last_shot = shots.pop();
	var last_play = plays.pop();
	last_shot.remove();
	last_play.remove();
}

function clear_shots() {
	d3.selectAll(".made-shot").remove();
	d3.selectAll(".miss-shot").remove();
	d3.selectAll("tr").remove();
	shots = [];
	plays = [];
}

// when player card is cliced
function player_clicked(e) {
	var card = d3.select(e)
	// console.log(card);
	if (PLAYER_SELECTED) {
		// if clicked on selected player, unselect
		if (!card.classed("player-card-clicked")) {
			unclick_player();
			card.classed("player-card", false);
			card.classed("player-card-clicked", true);
			PLAYER_SELECTED = true;
		} else { 
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


