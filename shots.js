// shots.js

function register_shots(court, width, height) {
	court.on("click", function() {
		var mouse = d3.mouse(this);
		made_shot(court, mouse);
	})

	court.on("dblclick", function() {
		console.log("double clicked")
		var mouse = d3.mouse(this);
		miss_shot(court, mouse);
	})
}

function made_shot(court, pos) {
	court.append("circle")
		.attr("cx", pos[0])
		.attr("cy", pos[1])
		.attr("r", "2")
		.attr("class", "made-shot");
}

function miss_shot(court, pos) {
	court.append("circle")
		.attr("cx", pos[0])
		.attr("cy", pos[1])
		.attr("r", "2")
		.attr("class", "miss-shot");
}