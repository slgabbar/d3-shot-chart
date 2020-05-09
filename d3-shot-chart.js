// d3-shot-chart.js

// college half-court is 50 x 47
// scale the height based on specified width
WIDTH = 400
HEIGHT = .94 * WIDTH
FEET = WIDTH/50
INCHES = FEET/12
CENTER_COURT = WIDTH/2

//******************** Helper functions to build court **********************//

// Draws half circle centeblack at top of chart with specified radius
function draw_hc_arc(court, r_feet) {
	radius = r_feet * FEET
	var hc_arc = d3.arc()
		.innerRadius(radius)
		.outerRadius(radius)
		.startAngle(0)
		.endAngle(Math.PI);

		court.append("path")
		.attr("d", hc_arc)
		.attr("transform", "translate(" + CENTER_COURT + ", 0) rotate(90)")
		.style("stroke", "black");
}

function draw_key(court, key_width_feet, key_height_feet, charge_circle=true) {
	start_point = [(WIDTH/2) - ((key_width_feet/2)*FEET), HEIGHT];
	arc_start = [(WIDTH/2) - ((key_width_feet/2)*FEET), (HEIGHT - (key_height_feet*FEET))];
	end_point = [(WIDTH/2) + ((key_width_feet/2)*FEET), HEIGHT];
	key_arc_center = [WIDTH/2, (HEIGHT - (key_height_feet*FEET))];
	arc_radius = (key_width_feet/2) * FEET;

	// Draw outline of key
	var path = d3.path();
	path.moveTo(start_point[0], start_point[1]);
	path.lineTo(arc_start[0], arc_start[1]);
	path.arc(key_arc_center[0], key_arc_center[1], arc_radius, Math.PI, 0);
	path.lineTo(end_point[0], end_point[1]);

	court.append("path")
		.attr("d", path)
		.style("stroke-width", "3px")
		.style("stroke", "black")
		.style("fill", "none");

	// draft free throw line
	court.append("line")
		.style("stroke-width", "3px")
		.style("stroke", "black")
		.attr("x1",arc_start[0])
		.attr("y1",arc_start[1])
		.attr("x2",arc_start[0] + (key_width_feet*FEET))
		.attr("y2",arc_start[1]);

	// draw key marks, hoop
	draw_key_marks(court, key_width_feet, key_height_feet);
	draw_hoop(court);

	// Draw charge circle
	if (charge_circle) {
		draw_charge_circle(court);
	}

}

function draw_key_marks(court, key_width, key_height) {
	
	// Left block
	court.append("rect")
		.style("x", CENTER_COURT - (((key_width/2)*(12*INCHES)) + (8*INCHES)))
		.style("y",HEIGHT-(8*FEET))
		.style("width",8*INCHES)
		.style("height",12*INCHES)
		.style("stroke", "black");

	// Right block
	court.append("rect")
		.style("x", CENTER_COURT + ((key_width/2)*(12*INCHES)))
		.style("y", HEIGHT-(8*FEET))
		.style("width",8*INCHES)
		.style("height",12*INCHES)
		.style("stroke", "black");

	// Left slashes
	court.append("rect")
		.style("x", CENTER_COURT - (((key_width/2)*(12*INCHES)) + (8*INCHES)))
		.style("y",HEIGHT-(11*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES)
		.style("stroke", "black");

	court.append("rect")
		.style("x", CENTER_COURT - (((key_width/2)*(12*INCHES)) + (8*INCHES)))
		.style("y",HEIGHT-(14*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES)
		.style("stroke", "black");

	court.append("rect")
		.style("x", CENTER_COURT - (((key_width/2)*(12*INCHES)) + (8*INCHES)))
		.style("y",HEIGHT-(17*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES)
		.style("stroke", "black");

	// Right slashes
	court.append("rect")
		.style("x", CENTER_COURT + ((key_width/2)*(12*INCHES)))
		.style("y", HEIGHT-(11*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES)
		.style("stroke", "black");

	court.append("rect")
		.style("x", CENTER_COURT + ((key_width/2)*(12*INCHES)))
		.style("y", HEIGHT-(14*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES)
		.style("stroke", "black");

	court.append("rect")
		.style("x", CENTER_COURT + ((key_width/2)*(12*INCHES)))
		.style("y", HEIGHT-(17*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES)
		.style("stroke", "black");
}

function draw_charge_circle(court) {
	var path = d3.path();
	path.moveTo((WIDTH/2)-(4*FEET), HEIGHT-(4*FEET));
	path.lineTo((WIDTH/2)-(4*FEET), HEIGHT-(4*FEET) - 15*INCHES);
	path.arc(WIDTH/2, HEIGHT-(63*INCHES), 4*FEET, Math.PI, 0);
	path.lineTo((WIDTH/2) + (4*FEET), HEIGHT-(4*FEET));

	court.append("path")
		.attr("d", path)
		.style("stroke-width", "3px")
		.style("stroke", "black")
		.style("fill", "none");
}

function draw_hoop(court) {
	court.append("circle")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.style("fill", "none")
		.attr("cx", CENTER_COURT)
		.attr("cy", HEIGHT - (63*INCHES))
		.attr("r", 9*INCHES);

	court.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", (CENTER_COURT) - (3*FEET))
		.attr("y1", HEIGHT - (48*INCHES))
		.attr("x2", (CENTER_COURT) + (3*FEET))
		.attr("y2", HEIGHT - (48*INCHES)); 

	court.append("rect")
		.style("x",CENTER_COURT - (8*INCHES))
		.style("y", HEIGHT - ((54*INCHES)+2))
		.style("width", 16*INCHES)
		.style("height", (6*INCHES)+2);
}

// calculates the start and end angles for our 3 point arc
function arc_angles(side_spacing, corner_len) {
	adj_len = WIDTH/2 - (side_spacing*INCHES);
	opp_len = (corner_len*INCHES) - (63*INCHES);
	angle = Math.atan(opp_len/adj_len);
	start_angle = Math.PI - angle;
	return [start_angle, angle];
}

function draw_three_arc(court, side_spacing, corner_len, out_edge) {
	angles = arc_angles(side_spacing, corner_len);
	var path = d3.path();
	path.moveTo(side_spacing*INCHES, HEIGHT);
	path.arc(WIDTH/2, HEIGHT-(63*INCHES), out_edge*INCHES, -angles[0], -angles[1]);
	path.lineTo(WIDTH-(side_spacing*INCHES), HEIGHT);


	court.append("path")
		.attr("d", path)
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.style("fill", "none");
}

// Draw the court.
function draw_court(court, flag=0, border) {
	// If border is true, add halfcourt circle
	if (border) {
		draw_hc_arc(court, 6);
		court.style("border", "3px solid black")
			.style("stroke", "black")
			.style("stroke-width", "3px");
	} else {
		court.style("border-bottom", "3px solid black");
	}

	// Key has same dimensions for all courts
	draw_key(court, 12, 19);

	// Draw three point arc depending on court
	if (flag==0) {
		draw_three_arc(court, 40.125, 118.375, 265.75)
	}
}

function draw_mens_ncaa(court, border=true) {
	draw_court(court, 0, border);
}









