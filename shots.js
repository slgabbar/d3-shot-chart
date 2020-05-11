// shots.js

var shots = [];

function register_shots(court) {
	court
		.on("click", function() {
			var mouse = d3.mouse(this)
			made_shot(court, mouse);
		})
		.on("dblclick", function() {
			var mouse = d3.mouse(this);
			miss_shot(court, mouse);
		});
}

function made_shot(court, pos) {
	console.log("made_shot");
	var shot = court.append("circle")
		.attr("cx", pos[0])
		.attr("cy", pos[1])
		.attr("r", "2")
		.attr("class", "made-shot");
	shots.push(shot);
}

function miss_shot(court, pos) {
	var shot = court.append("circle")
		.attr("cx", pos[0])
		.attr("cy", pos[1])
		.attr("r", "2")
		.attr("class", "miss-shot");
	shots.push(shot);
}

function undo_shot() {
	var last_shot = shots.pop();
	last_shot.remove();
}

function clear_shots() {
	d3.selectAll(".made-shot").remove();
	d3.selectAll(".miss-shot").remove();
}
