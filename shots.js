// shots.js

var shots = [];

function register_shots(court) {
	var timer = 0;
	var delay = 200;
	var prevent = false;

	court
		.on("click", function() {
			var mouse = d3.mouse(this);
			timer = setTimeout(function() {
				if (!prevent) {
					made_shot(court, mouse);
				}
				prevent=false;
			}, delay);
		})

		.on("dblclick", function() {
			var mouse = d3.mouse(this);
			clearTimeout(timer);
			prevent = true;
			miss_shot(court, mouse);
		});
}

function made_shot(court, pos) {
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
