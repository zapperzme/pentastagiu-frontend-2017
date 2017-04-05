$(document).ready(function() {
var colors = {
    "color1": "Red",
    "color2": "Green",
    "color3": "Blue"
};
// 1.
    $('#accept').click(function() {
        $('#submitbtn').attr('disabled', !this.checked);
    });
// 2.
      $('#mesaj-scurt').click(function() {
        $('#caractere-ramase').text('15');
        $('#mesaj-scurt').val('');        
      });
      $('#mesaj-scurt').keyup(function() {
        var postLength = $(this).val().length;
        var charactersLeft = 15 - postLength;
        $('#caractere-ramase').text(charactersLeft);
      });
// 3.
      $('#dropdown').append('<select class="select"></select>');
      $.each(colors, function(key, value) {
             $(".select").append('<option class="' + key + '">' + value + '</option>');
      });
// 4.
    $(".sub").each(function() {
        $(this).replaceWith("<h1>"+$(this).html()+"</h1>")
    });
// 5.
    $("#tinta").submit(function(event) {
            var name = $(this).attr('name');
            alert('Submit was called for \"'+ name + '\"');
            event.preventDefault();
    });
// 6.
    $("#tinta2").submit(function(event) {
            var name = $(this).attr('name');
            alert('Submit was called for \"'+ name + '\"');
            event.preventDefault();
    });
    $('#alt-buton').click(function() {
      $('#tinta2').submit();
    });
});
