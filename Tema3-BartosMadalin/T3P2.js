$(document).ready(function() {
	$('#mesaj-scurt').keypress(function(e) {
		var val = $('#mesaj-scurt').val(), length = val.length, max_chars = 15, remain = parseInt(max_chars - length);
		$('#caractere-ramase').text(remain);
		if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
			$('textarea').val((val).substring(0, length - 1))
		}
	});
});