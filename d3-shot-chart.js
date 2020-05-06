// d3-shot-chart.js

// college half-court is 50 x 47
// scale the height based on specified width
WIDTH = 600
HEIGHT = .94 * WIDTH

var courtDiv = d3.select(".shotchart");
var courtSVG = courtDiv.append("svg")
						.attr("width", WIDTH)
						.attr("height", HEIGHT)
						.style("border", "3px solid black");

// Large Halfcourt Arc
var lg_hc_arc = d3.arc()
	.innerRadius(.12 * WIDTH)
    .outerRadius(.12 * WIDTH + 3)
    .startAngle(0)
    .endAngle(2 * Math.PI);

// // Small Halfcourt Arc
var sm_hc_arc = d3.arc()
	.innerRadius(.04 * WIDTH)
    .outerRadius(.04 * WIDTH + 3)
    .startAngle(0)
    .endAngle(2 * Math.PI);

// Add Large Half-Court circle to SVG
courtSVG.append("path")
		.attr("d", lg_hc_arc)
		.attr("transform", "translate(" + WIDTH/2 + ", 0)");
courtSVG.append("path")
		.attr("d", sm_hc_arc)
		.attr("transform", "translate(" + WIDTH/2 + ", 0)");

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
