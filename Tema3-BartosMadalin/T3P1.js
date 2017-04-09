$(document).ready(function() {
	$("#accept").click(function() {
		if(document.getElementById('accept').checked) {
			$("#submitbtn").prop("disabled", false);
		}
		else
			$("#submitbtn").prop("disabled", true);
	});
});