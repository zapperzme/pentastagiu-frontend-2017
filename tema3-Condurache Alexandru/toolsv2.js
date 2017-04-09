/*
1.

<form>
  <input id="accept" name="accept" type="checkbox" value="Accept"/>I accept<br>
  <input id="submitbtn" disabled="disabled" name="Submit" type="submit" value="Submit" />
</form>

Activeaza butonul momentan inactiv "#submitbtn" atunci cand checkbox "#accept" este bifat.
*/

$('#accept').click(function() {
        if ($(this).is(':checked')) {
            $('#submitbtn').removeAttr('disabled');
        } else {
            $('#submitbtn').attr('disabled', 'disabled');
        }
    });
//Verificare jsfiddle: https://jsfiddle.net/AlexCondur/8994gyfm/










/*
2. 

<textarea id="mesaj-scurt">
  De exemplu..
</textarea>
<span id="caractere-ramase"></span>

Limiteaza numarul de caractere care pot fi scrise in  textarea cu id "#mesaj-scurt"
afisand si numarul de caractere ramase (maxim 15 caractere) in elementul cu id "#caractere-ramase"
*/

$(document).ready(function()
{
    $("#mesaj-scurt").attr('maxlength','15');
});
var maxLength = 15;
$('#mesaj-scurt').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength - length;
  $('#caractere-ramase').text(length);
});
//Verificare jsfiddle: https://jsfiddle.net/AlexCondur/1r9xcp29/










/*

3. 
<div id="dropdown">

</div>

Adaugati valorile obiectului 
var colors = { 
    "color1": "Red", 
    "color2": "Green", 
    'color3': "Blue" 
}; 
ca si optiuni ale elementului de tip <select> care la randul sau sa se regaseasca intr-un
div cu id-ul "dropdown".

*/

var colors = { 
    "color1": "Red", 
    "color2": "Green", 
    'color3': "Blue" 
}; 

$( "<select id='select'>" ).appendTo( $( "#dropdown" ) );

$.each(colors, function(key, value) {   
     $('#select')
          .append($('<option>', { value : key })
          .text(value)); 
});
//Verificare jsfiddle: https://jsfiddle.net/AlexCondur/01gong6z/










/*

4. Se da continutul:

<div class="parinte">
  <div class="sub first">Buna</div>
  <div class="not-sub second">Vreau</div>
  <div class="sub third">Heading</div>
</div>

Se cere:

- inlocuiti toate elementele ce contin clasa css "sub" cu 
heading H1; atentie sa fie mentinut continutul elementelor

*/

$(document).ready(
function() {
	$(".sub").each(function(i, elem) {
		$(elem).replaceWith("<h1>" + $(elem).text() + "</h2>");
	})
});
//Verificare jsfiddle: https://jsfiddle.net/AlexCondur/pbaokko1/










/*

5. Se da formularul:

<form id="tinta" name="Al meu!">
  <input type="text" value="Primul camp">
  <input type="text" value="Al doilea camp">
 <button type="submit">Salveaza</button>
</form>

Se cere:

- Pentru formular de mai sus, la submit vrem sa primim o alerta ca formularul 
cu numele luat din valoarea atributului name a fost trimis. Ex: 'Submit was
 called for "Al meu"  !'

 */

$( "#tinta" ).submit(function( event ) {
  alert( "Submit was called for \"" + $('#tinta').attr('name') + "\" !" );
  event.preventDefault();
});
//Verificare jsfiddle: https://jsfiddle.net/AlexCondur/gebnqghd/










/*

6. Pentru formularul:

<form id="tinta" name="A' meu!">
  <input type="text" value="Primul camp">
  <input type="text" value="Al doilea camp">
 <button type="submit">Salveaza</button>
</form> 

<button id="alt-buton" type="button">Alt buton de salvare</button>

Se cere:

- Aceeasi cerinta ca si exercitiul anterior, insa se vrea sa putem face 
submit si cu ajutorul butonului din exteriorul formularului

*/

$( "#tinta" ).submit(function( event ) {
  alert( "Submit was called for \"" + $('#tinta').attr('name') + "\" !" );
  event.preventDefault();
});
$( "#alt-buton" ).click(function() {
  $( "button:first" ).trigger( "click" );
});
//Verificare jsfiddle: https://jsfiddle.net/AlexCondur/e11th1v2/