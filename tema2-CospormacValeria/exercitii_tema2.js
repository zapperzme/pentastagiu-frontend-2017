// 1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]
var myArray = [20, -11, 9, 0, -1, 34, -7];
function sortArray(array) {
	array.sort(function(a, b) {return a-b});
}
sortArray(myArray);


// 2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2]
var myArray = [1, 2, 3, 4, 2, 5, 7, 2, 2];
var remove = function(myArray, element) {
	var newArray = [];
	var i = myArray.length;
	while (i--){
		if(myArray[i] != element){
			newArray.push(myArray[i]);
		} 
	} 
	return newArray;
}
remove(myArray, 2);


// 3. Afisati din array-ul ["a", "b", "c", "dd", "a"] doar valorile b si c.
var myArray = ["a", "b", "c", "dd", "a"];
function sliceArray(array) {
	return array.slice(1, 3);
}
sliceArray(myArray);


// 4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy
function showTime() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; 
	var yyyy = today.getFullYear();
	if(dd < 10) {
		dd = '0' + dd;
	} 
	if(mm < 10) {
		mm = '0' + mm;
	} 
	today = dd + '/' + mm + '/' + yyyy;
	return today;
}
showTime();


// 5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou
var object = { 0: 'a', 1: 'b', 2: 'c' };
function toArray(obj) {
	var arr = Object.values(obj);
	return arr;
}
toArray(object);


// 6. Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.
function sum(a, b) {
	if(a + b > 20){
		return a + b ;
	} else {
		return "suma e prea mica";
	}
}
sum (20,30);


// 7. Afisati index pentru fiecare valoare 2 din array: [1,2,3,4,2,5,7,2,2]
var myArray = [1,2,3,4,2,5,7,2,2];
function showIndex(array, element) {
	var position = [];
	var index = array.indexOf(element);
	while (index != -1) {
		position.push(index);
		index = array.indexOf(element, index + 1);
	}
	console.log(position);
}
showIndex(myArray, 2);


// 8. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] returnand array original
var myArray = [1, 2, 3, 4, 2, 5, 7, 2, 2];
function revove(myArray ,element) {
	var i = myArray.length;
	while (i--){
		if(myArray[i] === element){
			myArray.splice(i, 1);
		} 
	} 
	return myArray;
}
remove(myArray, 2);


// 9. Scrieti o functie pentru a face split la un string si a-l trasnforma intr-un array de cuvinte - "This is some text"
function splitString() {
	var str = "This is some text";
	var res = str.split(" ");
	return res;
}
splitString();


// 10. Pentru valorile din array: [0,"text",9,undefined,"undefined",-5,null,"null"] afisati in consola valoarea si tipul ei. Ex: "9 is a number"
var myArray =  [0, "text", 9, undefined, "undefined", -5, null, "null"];
function showArray(array) {
	for(var i = 0; i < array.length; i++) {
		console.log( array[i]+ " is a " + typeof array[i]); 
	}
}
showArray(myArray);


// 11. Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza
var myArray =  [0, "text", 9, undefined, "undefined", -5, null, "null"];
function showArray(array) {
	var vowels = ["a", "e" , "i", "o", "u"];
	for(var i = 0; i < array.length; i++) {
		var type = typeof array[i];
		if(vowels.indexOf(type.charAt(0)) != -1){
			console.log( array[i] + " is an " + type);
		} else {
			console.log(array[i] + " is a " + type);
		}
	}
}
showArray(myArray);


// 12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}
var object = { first:13, second:6, thrid:0, tenth:34, last:-2};
function toArray(obj) {
	var arr = Object.values(obj);
	return arr.sort(function(a, b) {return a - b});
}
toArray(object);
