$(document).ready(function(){

    //ex.1
    $input=$('#accept');
    $input.on('change', function(){
        if($input.is(":checked")){
            $('#submitbtn').prop("disabled", false);        
        }else{
            $('#submitbtn').prop("disabled", true);
        }
    
    });

    //EX.2
    $('#mesaj-scurt').attr("maxlength","15");
    $maxText=15;
    $('#caractere-ramase').html('Caractere ramase: '+ $maxText);
    $('#mesaj-scurt').keyup(function(){
        $mesajLength=$('#mesaj-scurt').val().length;
        $charactersRemaining=$maxText-$mesajLength;

        $('#caractere-ramase').html('Caractere ramase: '+ $charactersRemaining);
       
    });
    //EX.3
    var colors = { 
        "color1": "Red", 
        "color2": "Green", 
        'color3': "Blue" 
    }
    $('#dropdown').append("<select></select>")
    $.each(colors, function(key, value) {   
     $('select')
         .append($("<option></option>")
                    .attr("value",key)
                    .text(value)); 
    });

    //EX.4
    $('div.sub').each(function(){
        $(this).replaceWith("<h1>"+ $(this).html() +"</h1>");
    });

    //Ex.5
    $("#tinta").submit(function(e) {
        e.preventDefault();
        alert("Submit was called for "+$(this).prop('name') );
    });
    //Ex.6
    $('#alt-buton').click(function(){
        $('#tinta').submit();
    })
});