$( document ).ready(function() {
    // Exercitiu 1
    $('#accept').change(function () {
        if($('#accept').prop('checked')) {
            console.log("check box enabled");
            $('#submitbtn').removeAttr('disabled');
        }
    });
    //Exercitiu 2
    $('#mesaj-scurt').keypress(function(e) {
        var tval = $('textarea').val(),
            tlength = tval.length,
            set = 15,
            remain = parseInt(set - tlength);
        $('#caractere-ramase').text(remain);
        if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
            $('#mesaj-scurt').val((tval).substring(0, tlength - 1))
        }
    });

    //Exercitiu 3
    var colors = { "color1": "Red","color2": "Green",'color3': "Blue"};
    $.each(colors, function(key, value) {
        $('#mySelect')
            .append($("<option></option>")
                .attr("value", key)
                .text(value));
    });

    //Exercitiu 4

    $('.sub').each(function(){
        var newElem = $('<h1>', {html: $(this).html()});
        $.each(this.attributes, function() {
            newElem.attr(this.name, this.value);
        });
        $(this).replaceWith(newElem);
    });

//Exercitiu 5

    $('#tinta').submit(function( event ) {
        alert( "Submit was called for \""+event.target.name+"\"" );
        event.preventDefault();
    });

    // Exercitiu 6
    $('#tinta2').submit(function( event ) {
        alert( "Submit was called for \""+event.target.name+"\"" );
        event.preventDefault();
    });

    $('#alt-buton').click(function () {
        alert( "Submit was called for \""+$('#tinta2').attr('name')+"\"" );
    });


    });