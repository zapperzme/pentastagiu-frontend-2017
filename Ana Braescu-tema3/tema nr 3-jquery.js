<h1> Exercitiul 1 </h1>

$(document).ready(function(){
	$('#accept').click(function() {
			$('#submitbtn').attr('disabled', !this.checked);
   });
});
 
 <h1> Exercitiul 2 </h1>

 $(document).ready(function(){
 $('#mesaj-scurt').click(function() {
	$('#caractere-ramase').text('15');
		$('#mesaj-scurt').val('');        
 });
 });
$('#mesaj-scurt').keyup(function() {
	var postLength = $(this).val().length;
		var charactersLeft = 15 - postLength;
$('#caractere-ramase').text(charactersLeft);
 });

<h1> Exercitiul 3 </h1>

	$(document).ready(function(){
		$('#dropdown').append('<select class="select"></select>');
			$().each(colors, function(key, value) {
				$(".select").append('<option class="' + key + '">' + value + '</option>');
});
	});
	  
 <h1> Exercitiul 4 </h1>

 $(document).ready(function(){
	$(".sub").each(function() {
       $(this).replaceWith("<h1>"+$(this).html()+"</h1>")
});
 });

 </h1> Exercitiul 5 </h1>

	$(document).ready(function(){
		$("#tinta").submit(function(event) {
             var name = $(this).attr('name');
             alert('Submit was called for \"'+ name + '\"');
             event.preventDefault();
 });
   });


 <h1> Exercitiul 6 </h1>
 
	$(document).ready(function(){
		$("#tinta2").submit(function(event) {
             var name = $(this).attr('name');
             alert('Submit was called for \"'+ name + '\"');
             event.preventDefault();
});
		$('#alt-buton').click(function() {
			$('#tinta2').submit();
});
 });



