//Ex. 1
$(document).ready(function(){
   $('#accept').click(function() {
        if ($(this).is(':checked')) {
            $('#submitbtn').removeAttr('disabled');
        } else {
            $('#submitbtn').attr('disabled', 'disabled');
        }
    });
});



//Ex. 2
$(document).ready(function() {
    $('#mesaj-scurt').attr('maxlength','16').keyup(function() {
      var totalCh = this.value.length;
      $('#caractere-ramase').text(16 - totalCh);
    });
});


//Ex. 3
$(function() {
  var colors = { 
    "color1": "Red", 
    "color2": "Green", 
    'color3': "Blue" 
  }; 
  var selectElm = $('<select></select>');
  $('#dropdown').append(selectElm);
  $.each( colors, function( key, value ) {
  selectElm.append('<option value='+value + '>' + value + '</option>');
});
});


//Ex. 4
$(document).ready(function() {
	$( ".sub" ).each(function(index,value) {
  $(value).replaceWith( "<h1>" + value.innerHTML + "</h1>");
});
});


//Ex. 5
$(function() {
$( '#tinta' ).submit(function( event ) {
  alert( 'Submit was called for \"'+$('#tinta').attr('name')+'\"');
});
});


//Ex. 6
$(function() {
$( '#tinta' ).submit(function( event ) {
  alert( 'Submit was called for \"'+$('#tinta').attr('name')+'\"');
  event.preventDefault();
});
$( "#alt-buton" ).click(function() {
  $( "#tinta" ).submit();
});
});