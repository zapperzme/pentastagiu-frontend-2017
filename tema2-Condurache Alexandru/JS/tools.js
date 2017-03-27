//Funcție de afișare
function arataAscunde(butonId, parId) {
	var p = document.getElementById(parId);
    if (p.style.display === 'block') {
        p.style.display = 'none';
        document.getElementById(butonId).innerHTML = "Afișează rezultat";
    }
    else {
        p.style.display = 'block';
        document.getElementById(butonId).innerHTML = "Ascunde rezultat";
    }
}

//1. Aranjați numerele din array în ordine crescătoare: [20, -11, 9, 0, -1, 34, -7].
function exercitiul1() {
	var array = [20, -11, 9, 0, -1, 34, -7];
	var sorted = array.sort(function(a,b) {
		return a-b;
	});

    document.getElementById('e1').innerHTML = sorted;
}

//2. Înlăturați valoarea 2 din array: [1,2,3,4,2,5,7,2,2]. 
function exercitiul2() {
	var array = [1, 2, 3, 4, 2, 5, 7, 2, 2];
	var i;
	for (i = array.length; i >= 0; i--) {
		if (array[i] === 2) {
			array.splice(i, 1);
		}
	}

	document.getElementById('e2').innerHTML = array;
}

//3. Afișați din array-ul ["a", "b", "c", "dd", "a"] doar valorile b și c.
function exercitiul3() {
	var array = ["a", "b", "c", "dd", "a"];
	var final = [];
	var i;
	for (i = 0; i < array.length; i++) {
		if (array[i] === 'b' || array[i] === 'c') {
			final.push(array[i]);
		}
	}

	document.getElementById('e3').innerHTML = final;
}

//4. Scrieți o funcție pentru a afișa în consolă data de astăzi, în formatul dd-mm-yyyy.
function exercitiul4() {
	var data = new Date();
	var year = data.getFullYear();
	var month = data.getMonth() + 1;
	var day = data.getDate();
	if (month < 10) {
		month = "0" + month;
	}

	document.getElementById('e4').innerHTML = day + "-" + month + "-" + year;
}

//5. Afișați valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } într-un array nou.
function exercitiul5() {
	var ob = { 0: 'a', 1: 'b', 2: 'c'};
	var array = [];
	var i;
	for (i in ob) {
		array.push(ob[i]);
	}

	document.getElementById('e5').innerHTML = array;
}

//6. Scrieți o funcție care să primească 2 argumente și să returneze suma acestora doar dacă numărul este mai mare ca 20.
function exercitiul6(a, b) {
	var sum = a + b;
	if (sum > 20) {
		document.getElementById('e6').innerHTML = sum;
	}
	else {
		document.getElementById('e6').innerHTML = "not enough bby";
	}
}

//7. Afișați index-ul pentru fiecare valoare 2 din array: [1, 2, 3, 4, 2, 5, 7, 2, 2].
function exercitiul7() {
	var array = [1, 2, 3, 4, 2, 5, 7, 2, 2];
	var i;
	for (i = 0; i < array.length; i++) {
		if (array[i] === 2) {
			document.getElementById('e7').innerHTML += i + "<br>";
		}
	}
}

//8. Înlăturați valoarea 2 din array: [1, 2, 3, 4, 2, 5, 7, 2, 2] returnând array-ul original.
function exercitiul8() {
	var array = [1, 2, 3, 4, 2, 5, 7, 2, 2];
	var final = [];
	var i;
	for (i = 0; i < array.length; i++) {
		if (array[i] !== 2) {
			final.push(array[i]);
		}
	}

	document.getElementById('e8').innerHTML = "Array-ul cu valoarea 2 înlăturată: " + final + "<br>Array-ul original: " + array;
}

//9. Scrieți o funcție pentru a face split la un string și a-l transforma într-un array de cuvinte - "This is some text".
function exercitiul9() {
	var sir = "This is some text";
	var array;
	array = sir.split(" ");

	document.getElementById('e9').innerHTML = array;
}

//10. Pentru valorile din array: [0, "text", 9, undefined, "undefined", -5, null, "null"] afișați în consolă valoarea și tipul ei.
function exercitiul10() {
	var array = [0, "text", 9, undefined, "undefined", -5, null, "null"];
	var i;
	for (i = 0; i < array.length; i++) {
		document.getElementById('e10').innerHTML += array[i] + " is a " + typeof array[i] + "<br>";
	}
}

//Pentru exercițiul anterior, afișați corect forma acordului "an" / "a" în funcție de cuvântul ce urmează(Ex: "9 is a number").
function exercitiul11() {
	var array = [0, "text", 9, undefined, "undefined", -5, null, "null"];
	var i;
	for (i = 0; i < array.length; i++) {
		var tip = typeof array[i];
		if (tip.charAt(0) === 'a' || tip.charAt(0) === 'e' || tip.charAt(0) === 'i' || tip.charAt(0) === 'o' || tip.charAt(0) === 'u') {
			document.getElementById('e11').innerHTML += array[i] + " is an " + tip + "<br>";
		}
		else {
			document.getElementById('e11').innerHTML += array[i] + " is a " + tip + "<br>";
		}
	}
}

//12. Afișați în consolă în mod crescător valorile din obiectul următor { first:13, second:6, thrid:0, tenth:34, last:-2}.
function exercitiul12() {
	var ob = { first: 13, second: 6, thrid: 0, tenth: 34, last: -2};
	var array = [];
	var sorted;
	var i;
	for (i in ob) {
		array.push(ob[i]);
	}
	sorted = array.sort(function(a,b) {
		return a-b;
	});

	document.getElementById('e12').innerHTML = sorted;
}