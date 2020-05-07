// d3-shot-chart.js

// college half-court is 50 x 47
// scale the height based on specified width
WIDTH = 600
HEIGHT = .94 * WIDTH
FEET = WIDTH/50
INCHES = FEET/12
CENTER_COURT = WIDTH/2
CIRCLE_BORDER = 3

console.log("1inch: " + INCHES + " pixels.");
console.log("1 foot: "+ FEET + " pixels.");

var courtDiv = d3.select(".shotchart");
var courtSVG = courtDiv.append("svg")
						.attr("width", WIDTH)
						.attr("height", HEIGHT)
						.style("border", "3px solid black");

// Large Halfcourt Arc
var lg_hc_arc = d3.arc()
	.innerRadius(6*FEET)
    .outerRadius(6*FEET + CIRCLE_BORDER)
    .startAngle(0)
    .endAngle(2 * Math.PI);

// Small Halfcourt Arc
var sm_hc_arc = d3.arc()
	.innerRadius(2*FEET)
    .outerRadius(2*FEET + CIRCLE_BORDER)
    .startAngle(0)
    .endAngle(2 * Math.PI);

// Add Large Half-Court circle to SVG
courtSVG.append("path")
		.attr("d", lg_hc_arc)
		.attr("transform", "translate(" + CENTER_COURT + ", 0)");

courtSVG.append("path")
		.attr("d", sm_hc_arc)
		.attr("transform", "translate(" + CENTER_COURT + ", 0)");

courtSVG.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", .38*WIDTH)
		.attr("y1", HEIGHT)
		.attr("x2", .38*WIDTH)
		.attr("y2", HEIGHT - (.404*HEIGHT)); 

courtSVG.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", .62*WIDTH)
		.attr("y1", HEIGHT)
		.attr("x2", .62*WIDTH)
		.attr("y2", HEIGHT - (.404*HEIGHT)); 

courtSVG.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", .38 * WIDTH)
		.attr("y1", HEIGHT-(.404*HEIGHT) + 1.5)
		.attr("x2", .62*WIDTH)
		.attr("y2", HEIGHT-(.404*HEIGHT) + 1.5); 

courtSVG.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", 40.5*INCHES)
		.attr("y1", .7901* HEIGHT)
		.attr("x2", 40.5*INCHES)
		.attr("y2", HEIGHT); 

courtSVG.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", WIDTH-(40.5*INCHES))
		.attr("y1", .7901* HEIGHT)
		.attr("x2", WIDTH-(40.5*INCHES))
		.attr("y2", HEIGHT); 

courtSVG.append("circle")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.style("fill", "none")
		.attr("cx", CENTER_COURT)
		.attr("cy", HEIGHT - (63*INCHES))
		.attr("r", 9*INCHES);

courtSVG.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", (CENTER_COURT) - (3*FEET))
		.attr("y1", HEIGHT - (48*INCHES))
		.attr("x2", (CENTER_COURT) + (3*FEET))
		.attr("y2", HEIGHT - (48*INCHES)); 

courtSVG.append("rect")
		.style("x",CENTER_COURT - (8*INCHES))
		.style("y", HEIGHT - ((54*INCHES)+2))
		.style("width", 16*INCHES)
		.style("height", (6*INCHES)+2);


// Right block and left block
courtSVG.append("rect")
		.style("x", CENTER_COURT - (80*INCHES))
		.style("y",HEIGHT-(8*FEET))
		.style("width",8*INCHES)
		.style("height",12*INCHES);

courtSVG.append("rect")
		.style("x", CENTER_COURT + (72*INCHES))
		.style("y", HEIGHT-(8*FEET))
		.style("width",8*INCHES)
		.style("height",12*INCHES);

// Key slashes
courtSVG.append("rect")
		.style("x", CENTER_COURT - (80*INCHES))
		.style("y",HEIGHT-(11*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES);

courtSVG.append("rect")
		.style("x", CENTER_COURT - (80*INCHES))
		.style("y",HEIGHT-(14*FEET))
		.style("width",8*INCHES)
		.style("height", 2*INCHES);

courtSVG.append("rect")
		.style("x", CENTER_COURT - (80*INCHES))
		.style("y",HEIGHT-(17*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES);

courtSVG.append("rect")
		.style("x", CENTER_COURT + (72*INCHES))
		.style("y",HEIGHT-(11*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES);

courtSVG.append("rect")
		.style("x", CENTER_COURT + (72*INCHES))
		.style("y",HEIGHT-(14*FEET))
		.style("width",8*INCHES)
		.style("height", 2*INCHES);

courtSVG.append("rect")
		.style("x", CENTER_COURT + (72*INCHES))
		.style("y",HEIGHT-(17*FEET))
		.style("width",8*INCHES)
		.style("height",2*INCHES);

// Top of key half circle
// courtSVG.append("circle")
// 		.style("stroke", "black")
// 		.style("stroke-width", "3px")
// 		.style("fill", "none")
// 		.attr("cx", CENTER_COURT)
// 		.attr("cy", HEIGHT - (19*FEET))
// 		.attr("r", 6*FEET);

var key_arc = d3.arc()
	.innerRadius(6*FEET - CIRCLE_BORDER)
    .outerRadius(6*FEET)
    .startAngle(0)
    .endAngle(Math.PI);

var charge_circle = d3.arc()
	.innerRadius(4*FEET)
	.outerRadius(4*FEET + CIRCLE_BORDER)
	.startAngle(0)
	.endAngle(Math.PI);

courtSVG.append("path")
		.attr("d", key_arc)
		.attr("transform", "translate(" + CENTER_COURT + "," + (HEIGHT-(19*FEET)) + " ) rotate(270)");

courtSVG.append("path")
		.attr("d", charge_circle)
		.attr("transform", "translate(" + CENTER_COURT + "," + (HEIGHT-(63*INCHES)) + " ) rotate(270)");

// Charge Lines Etension
courtSVG.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", (CENTER_COURT) - ((4*FEET)))
		.attr("y1", HEIGHT - (63*INCHES))
		.attr("x2", (CENTER_COURT) - ((4*FEET)))
		.attr("y2", HEIGHT - (48*INCHES)); 

courtSVG.append("line")
		.style("stroke", "black")
		.style("stroke-width", "3px")
		.attr("x1", (CENTER_COURT) + ((4*FEET)))
		.attr("y1", HEIGHT - (63*INCHES))
		.attr("x2", (CENTER_COURT) + ((4*FEET)))
		.attr("y2", HEIGHT - (48*INCHES));

var three_arc = d3.arc()
	.innerRadius((265.75*INCHES) - 3)
	.outerRadius(265.75*INCHES)
	.startAngle(0)
	.endAngle(Math.PI) 

courtSVG.append("path")
		.attr("d", three_arc)
		.attr("transform", "translate(" + CENTER_COURT + "," + (HEIGHT-63*INCHES) + " ) rotate(270)");



























