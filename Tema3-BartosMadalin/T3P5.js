$(document).ready(function() {
	$("#tinta").submit(function() {
		alert("Submit was called for " + $("#tinta").attr("name"));
	});
});