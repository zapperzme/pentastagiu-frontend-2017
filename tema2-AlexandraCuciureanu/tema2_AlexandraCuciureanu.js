// Tema2 - Javascript

//1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]
//2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] 
//3. Afisati din array-ul ["a", "b", "c", "dd", "a"] doar valorile b si c.
// 4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy
// 5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou
// 6. Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.
// 7. Afisati index pentru fiecare valoare 2 din array: [1,2,3,4,2,5,7,2,2] 
// 8. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] returnand array original
// 9. Scrieti o functie pentru a face split la un string si a-l trasnforma intr-un array de cuvinte - "This is some text"
// 10. Pentru valorile din array: [0,"text",9,undefined,"undefined",-5,null,"null"] afisati in consola valoarea si tipul ei. Ex: "9 is a number"
// 11. Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza
// 12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}


// 1. Sort an array
// using sort() method:
    var arr = [20, -11, 9, 0, -1, 34, -7];

    arr.sort(function(a, b){return a-b;});
    console.log(arr);  //[-11, -7, -1, 0, 9, 20, 34]


// 2. Remove item 2 from an array 
	var arr = [1,2,3,4,2,5,7,2,2];
	var arr2 = [];

	for (var i=0; i<arr.length; i++) {
	  if(arr[i] !== 2) {
		arr2.push(arr[i]);
	  }
	}
	console.log(arr2); //[1, 3, 4, 5, 7]

// 3. Display "b" and "c"
// a. Using original array:
    var arr = ['a','b','d','f','c'];

    arr = arr.splice(arr.indexOf('b'), 1).concat(arr.splice(arr.indexOf('c'), 1));
    console.log(arr);  //['b','c']

// b. Using a different array:
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === 'b' || arr[i] === 'c') {
        arr2.push(arr[i]);
      }
    }
	console.log(arr2);  //['b','c']

// 4. Display date
	function displayDate() {
		var date = new Date();
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
	};
	displayDate(); 
	console.log(day + '-' + month + '-' + year); //"29-2-2017"

// 5. Display the obj values in an array:
    var obj1 = { 0: 'a', 1: 'b', 2: 'c' };
    var arr = [];

    for(val in obj1) {
      arr.push(obj1[val]);
    }
	console.log(arr);  //['a','b','c']

// 6. Return sum of 2 values:
    function returnVal(val1, val2) {
      var sum = val1 + val2;
  
      if(sum > 20) {
        return sum;
        console.log('Sum is ' + sum + ' and it is bigger than 20!');
      }
    }
    returnVal(18, 15);

// 7. Display the index for each 2: 
    var arr = [1,2,3,4,2,5,7,2,2];
    var pos = [];

    for(var i=0; i<arr.length; i++) {
      if(arr[i] === 2) {
        pos.push(i);
      }
    }
    console.log('Number 2 appears on: ' + pos + ' position'); //"Number 2 appears on: 1,4,7,8 position"

// 8. Remove item 2 from an array - keep the original array
   var arr = [1,2,3,4,2,5,7,2,2];

    for(var i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === 2) {
        arr.splice(i, 1);
      }
    }
	console.log(arr);  //[1,3,4,5,7]
	
	// ------------------------------ //
	
	var arr2 = [1,2,3,4,2,5,7,2,2];

	for (var i=0; i<arr.length; i++) {
	  if(arr[i] === 2) {
		arr.splice(i, 1);
		
		if(arr[i] === arr[arr.length-1]) {
		  arr.pop();
		}
	  }
	}
	console.log(arr); //[1,3,4,5,7]
	
	
// 9. Split a string: 
    var string = 'This is some text';
    var arr = string.split(" ");
    console.log(arr); //["This", "is", "some", "text"]

    var arr1 = string.split("");
    console.log(arr1);  //["T", "h", "i", "s", " ", "i", "s", " ", "s", "o", "m", "e", " ", "t", "e", "x", "t"]

// 10. For each values from an array, display the value and it's type:
     var arr = [0,"text",9,undefined,"undefined",-5,null,"null"];

     for(i in arr) {
       console.log("The value is: " + arr[i] + " and the type is " + typeof(arr[i]));
     }

	//"The value is: 0 and the type is number"
	//"The value is: text and the type is string"
	//"The value is: 9 and the type is number"
	//"The value is: undefined and the type is undefined"
	//"The value is: undefined and the type is string"
	//"The value is: -5 and the type is number"
	//"The value is: null and the type is object"
	//"The value is: null and the type is string"

// 11. "an/a"
    var arr = [0,"text",9,undefined,"undefined",-5,null,"null"];

    for(i in arr) {
      if(typeof(arr[i]) == 'number' || typeof(arr[i]) == 'string') {
        console.log("The value is: " + arr[i] + " and it is a " + typeof(arr[i]));
      } else if(typeof(arr[i]) == 'object') {
        console.log("The value is: " + arr[i] + " and it is an " + typeof(arr[i]));
      } else {
        console.log("The value is: " + arr[i] + " and it is " + typeof(arr[i]));
      }
    }

	//"The value is: 0 and it is a number"
	//"The value is: text and it is a string"
	//"The value is: 9 and it is a number"
	//"The value is: undefined and it is undefined"
	//"The value is: undefined and it is a string"
	//"The value is: -5 and it is a number"
	//"The value is: null and it is an object"
	//"The value is: null and it is a string"

// 12. Order an obj: { first:13, second:6, thrid:0, tenth:34, last:-2}
    var obj = { first:13, second:6, thrid:0, tenth:34, last:-2};
    var arr = [];

    for(val in obj) {
      arr.push(obj[val]);
    } 

    console.log(arr); //[13, 6, 0, 34, -2]

    arr.sort(function(a,b) {
      return a[1]-b[1];
    });

    console.log(arr); //[-2, 0, 6, 13, 34]]
