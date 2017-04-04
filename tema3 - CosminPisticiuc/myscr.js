/////////////////////////////////////////////////////////////
////       EX 1         /////////////////////////////////////
/////////////////////////////////////////////////////////////

var chk = $('#accept');
var btn = $('#submitbtn');

chk.on('click', function () {
    if (chk.is(':checked')) {
        btn.prop('disabled', false);
    } else {
        btn.prop('disabled', true);


    }
})


/////////////////////////////////////////////////////////////
////       EX 2         /////////////////////////////////////
/////////////////////////////////////////////////////////////

var texta = $('#mesaj-scurt');
var chaR = $('#caractere-ramase');

var maxChar = 15;
chaR.text(maxChar);

texta.keyup(function () {
    var len = $(this).val().length;
    console.log(len);
    if (len >= maxChar) {
        console.log('max reached')
        chaR.text('max reached');
        texta.prop('disabled', true);
    } else {
        chaR.text(maxChar - len);
    }
})


/////////////////////////////////////////////////////////////
////       EX 3         /////////////////////////////////////
/////////////////////////////////////////////////////////////

var dropDown = $('#dropdown');
var select = $('<select>');

dropDown.append(select);

var colors = {
    "color1": "Red",
    "color2": "Green",
    'color3': "Blue"
};

$.each(colors, function (key, value) {
    $('<option>').val(key).text(value).appendTo(select);
});



/////////////////////////////////////////////////////////////
////       EX 4         /////////////////////////////////////
/////////////////////////////////////////////////////////////

$(".sub").each(function (i, elem) {
    $(elem).replaceWith("<h1>" + elem.innerHTML + "</h1>")
})



/////////////////////////////////////////////////////////////
////       EX 5         /////////////////////////////////////
/////////////////////////////////////////////////////////////

$('#tinta').on('submit', function (e) {
    alert('Submit was called for "' + this.name + '"\n with values:\n ' + $('#camp1').val() + '\n' + $('#camp2').val());
    e.preventDefault();
})


/////////////////////////////////////////////////////////////
////       EX 6         /////////////////////////////////////
/////////////////////////////////////////////////////////////

$('#alt-buton').on('click', function (e) {
    alert('Submit was called for "' + $('#tinta').attr('name') + '"\n with values:\n ' + $('#camp1').val() + '\n' + $('#camp2').val());
    e.preventDefault();
})
