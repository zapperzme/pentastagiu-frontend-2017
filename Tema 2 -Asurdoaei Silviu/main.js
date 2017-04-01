//1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]
//2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] 
//3. Afisati din array-ul ["a", "b", "c", "dd", "a"] doar valorile b si c.
//4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy
//5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou
// Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.
//8. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] returnand array original
//9. Scrieti o functie pentru a face split la un string si a-l trasnforma intr-un array de cuvinte - "This is some text"
//10. Pentru valorile din array: [0,"text",9,undefined,"undefined",-5,null,"null"] afisati in consola valoarea si tipul ei. Ex: "9 is a number"
//11. Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza
//12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}
function increaseOrder() {
			var ex1= "1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]";
		    var numbers = [20, -11, 9, 0, -1, 34, -7];
			numbers.sort(function(a, b) {
			  return a - b;
			});
			document.write(ex1 + "<br />"+numbers + " ");
}

function removeNum() {
	var ex2= "2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] ";
		var numbers1 = [1,2,3,4,2,5,7,2,2];
		document.write("<br />"+ ex2+"<br />");
	for (var i = 0; i < numbers1.length-1; i++) {
		if (numbers1[i] !== 2) {
			document.write(numbers1[i] + " ");
		}
	}
}