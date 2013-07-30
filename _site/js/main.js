// VARIABLES
var blue = "#58b7f0";
var chartBlue = "#346f8f";
var chartGreen = "#74db95";
var chartOrange = "#c7511a";

var programmingData = [
	{
		value: 30,
		color: blue
	},
	{
		value: 25,
		color: chartBlue
	},
	{
		value: 25,
		color: chartGreen
	},
	{
		value: 20,
		color: chartOrange
	}
]

var designData = {
	labels: ["Balsamiq", "Photoshop", "Illustrator", "Omnigraffle"],
	datasets: [
		{
			fillColor: blue,
			strokeColor: chartBlue,
			data: [2.5,5,4,3]
		}
	]
}

var librariesData = {
	labels: ["D3.js", "Rails", "Backbone.js", "jQuery"],
	datasets: [
		{
			fillColor: chartGreen,
			strokeColor: chartBlue,
			data: [2.5,5,4,3]
		}
	]
}

var programmingOptions = {
	segmentStrokeColor: "#e4e3e3"
}

var designOptions = {
	barValueSpacing : 7,
	scaleFontSize : 10
}

var librariesOptions = {
	barValueSpacing : 7,
	scaleFontSize : 10
}

window.onload = function() {

	// Get the context of the canvas element we want to select
	var ctx = document.getElementById("programming").getContext("2d");
	var programmingChart = new Chart(ctx).Doughnut(programmingData, programmingOptions);

	var ctx2 = document.getElementById("design").getContext("2d");
	var designChart = new Chart(ctx2).Bar(designData, designOptions);

	var ctx3 = document.getElementById("libraries").getContext("2d");
	var librariesChart = new Chart(ctx3).Bar(librariesData, librariesOptions);

};





