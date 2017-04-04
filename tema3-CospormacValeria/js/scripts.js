$( document ).ready(function() {

//1. Activeaza butonul momentan inactiv "#submitbtn" atunci cand checkbox "#accept" este bifat.
$('#accept').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
        // the checkbox is now checked
        $("#submitbtn").prop('disabled', false);
    } else {
        // the checkbox is now no longer checked
        $("#submitbtn").prop('disabled', true);
    }
});


//2. Limiteaza numarul de caractere care pot fi scrise in  textarea cu id "#mesaj-scurt"
//afisand si numarul de caractere ramase (maxim 15 caractere) in elementul cu id "#caractere-ramase"
var maxLength = 15;
$("#mesaj-scurt").attr('maxlength', maxLength);
$('#mesaj-scurt').keyup(function() {
	var length = $(this).val().length;
	length = maxLength - length;
	$('#caractere-ramase').text(length);
});


//3. Adaugati valorile obiectului
//ca si optiuni ale elementului de tip <select> care la randul sau sa se regaseasca intr-un
//div cu id-ul "dropdown".
var colors = { 
    "color1": "Red", 
    "color2": "Green", 
    'color3': "Blue" 
}; 
var sel = $('<select>').appendTo('#dropdown');
$.each(colors, function(name, value) {
    sel.append($("<option>").attr('value',name).text(value));
});


//4. inlocuiti toate elementele ce contin clasa css "sub" cu 
// heading H1; atentie sa fie mentinut continutul elementelor
$(".sub").each(function( index ) {
    $(this).replaceWith( "<h1>" + $(this).text() +"</h1>" );
});


//5. Pentru formular de mai sus, la submit vrem sa primim o alerta ca formularul 
//cu numele luat din valoarea atributului name a fost trimis. Ex: 'Submit was
//called for "Al meu"  !'
$( "#tinta" ).submit(function(event) {
  alert("Submit was called for " + $(this).attr("name"));
});


//6. Aceeasi cerinta ca si exercitiul anterior, insa se vrea sa putem face 
//submit si cu ajutorul butonului din exteriorul formularului
$("#alt-buton").click(function(event){
    $( "#tinta" ).submit();
});

});