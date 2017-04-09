$(document).ready(function() {
	$(".sub").each(function(i, elem) {
		$(elem).replaceWith("<h1>" + $(elem).text() + "</h1>");
	});
});