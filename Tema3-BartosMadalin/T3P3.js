$(document).ready(function() {
	var colors = { 
		"color1": "Red", 
		"color2": "Green", 
		'color3': "Blue" 
	}; 
	$("#dropdown").html("<select>"+
		"<option>"+colors["color1"]+"</option>"+
		"<option>"+colors["color2"]+"</option>"+
		"<option>"+colors["color3"]+"</option>"+
		"</select>");
});