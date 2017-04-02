/* Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]*/

var array1=[20, -11, 9, 0, -1, 34, -7];
array1.sort( function(a,b) { return a - b; } );

/*Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] */
var array2 = [1,2,3,4,2,5,7,2,2];
for (var i =0;i < array2.length; i++) {
	if( array2[i] == 2){
		array2.splice(i, 1);
	}
}
console.log(array2);

/*3. Afișați din array-ul ["a", "b", "c", "dd", "a"] doar valorile b și c.*/

var array3 = ["a", "b", "c", "dd", "a"];
 function showOnlyXY(array,x,y){
 	var arrayAfter = [];
 	for (i = 0; i < array.length; i++) {
		if (array3[i] === x || array3[i] === y) {
 			arrayAfter.push(array3[i]);
 		}
 	}
 	return arrayAfter;
 }
console.log(showOnlyXY(array3,'b','c'));

 /*4. Scrieți o funcție pentru a afișa în consolă data de astăzi, în formatul dd-mm-yyyy.*/
 function todayDate() {
 	var data = new Date();
 	var day = data.getDate();
 	var month = data.getMonth() + 1;
 	var year = data.getFullYear();
 	if (day < 10){
 		day = "0" + day;
	}
 	if (month < 10) {
 		month = "0" + month;
 	}
 
 	return day + "-" + month + "-" + year;
 }
 console.log(todayDate());

 /*5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou*/

var object1 = { 0: 'a', 
					1: 'b', 
					2: 'c' 
					};
function objectValor(x){	
	var finalObject =[];
	for (var i in x) {
	finalObject.push(x[i]);
	}
	return finalObject;
}
objectValor(object1);

/*6. Scrieti o functie care sa primeasca 2 argumente 
si sa returneze suma acestora doar daca numarul este mai mare ca 20.*/
function sumAB(a,b){
	if(a + b > 20){
		return (a+b);
	} else {
		console.log("(" + a + " + " + b + ") "  + " < 20 ");
	}
}
console.log(sumAB(3,60));
console.log(sumAB(3,6));

/*7. Afisati index pentru fiecare valoare 2 din array: [1,2,3,4,2,5,7,2,2]*/
var nrList = [1,2,3,4,2,5,7,2,2];
function showPosition(list, nr){
	var nrPosition = [];
	for (var i = 0; i < list.length; i++) {
		if(list[i] == nr){
			nrPosition.push(i);
		}
	}
	return nrPosition;
}
console.log(showPosition(nrList,2));

/*8. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] returnand array original*/
var outValue = [1,2,3,4,2,5,7,2,2];
outValue.filter(function(x) {
	return x != 2
});

/*9. Scrieti o functie pentru a face split la un string
 si a-l trasnforma intr-un array de cuvinte - "This is some text"*/
var text = "This is some text" ;
var res = text.split(" ");/*.join(<br>)*/
console.log(res);

 /*10. Pentru valorile din array: 
[0,"text",9,undefined,"undefined",-5,null,"null"]
 afisati in consola valoarea si tipul ei. Ex: "9 is a number"*/
var arrayValues = [0,"text",9,undefined,"undefined",-5,null,"null"];

for (var i = 0; i < arrayValues.length; i++) {
	var arrayValues1 = typeof arrayValues[i];
	console.log('[' + arrayValues[i] + ']' + " is a " + arrayValues1);
}

//11. Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza
var arrayValues = [0,"text",9,undefined,"undefined",-5,null,"null"];
for (var i = 0; i < arrayValues.length; i++) {
	var arrayValues1 = typeof arrayValues[i];
	if(arrayValues1.charAt(0) === 'a' || arrayValues1.charAt(0) === 'e' || arrayValues1.charAt(0) === 'i' || arrayValues1.charAt(0) === 'o' || arrayValues1.charAt(0) === 'u'){
		console.log('[' + arrayValues[i] + ']' + " is an " + arrayValues1);
	} else {
		console.log('[' + arrayValues[i] + ']' + " is a " + arrayValues1);
	}	
}

/*12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}*/
var object =  { 
	first:13, 
	second:6, 
	thrid:0, 
	tenth:34,
	last:-2
	}
var newObject = objectValor(object);
newObject.sort( function(a,b) { return a - b; } );