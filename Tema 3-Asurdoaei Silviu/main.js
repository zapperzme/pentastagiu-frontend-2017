    $( document ).ready(function() {
      var maxLength = 20;
      $('#mesaj-scurt').keyup(function() {
        var length = $(this).val().length;
        var length = maxLength-length;
        $('#caractere-ramase').text(length);
      });
    });

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


    $(document).ready(function() {
      $( ".sub" ).each(function(index,value) {
        $(value).replaceWith( "<h1>" + value.innerHTML + "</h1>");
      });
    });



    $(function() {
      $( '#tinta' ).submit(function( event ) {
        alert( 'Submit was called for \"'+$('#tinta').attr('name')+'\"');
      });
    });


    $(function() {
      $( '#tinta1' ).submit(function( event ) {
        alert( 'Submit was called for \"'+$('#tinta1').attr('name')+'\"');
        event.preventDefault();
      });
      $( "#alt-buton" ).click(function() {
        $( "#tinta1" ).submit();
      });
    });