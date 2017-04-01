////1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]
//var x = [9, -20, 0, -3, 12, -1];
//function sortNumber(a, b) {
//  return a > b;
//}
//x.sort(sortNumber);
//console.log(x.join(","));


////2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2]
//var myArray = [1, 2, 3, 4, 2, 5, 7, 2, 2];
//function x() {
//  var diffArray = [];
//  for (var i = 0; i < myArray.length; i++) {
//    if (myArray[i] != 2) {
//      diffArray.push(myArray[i]);
//    }
//  }
//  return (diffArray);
//};
//console.log(x());


////3. Afisati din array-ul ["a", "b", "c", "dd", "a"] doar valorile b si c.
//var myArray = ["a", "b", "c", "dd", "a"];
//
//console.log(myArray.filter(function (arr) {
//  return arr === "b" || arr === "c";
//}));


////4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy
//var today = new Date();
//
//var dd = today.getDate();
//var mm = today.getMonth();
//var yyyy = today.getFullYear();
//
//if (dd < 10) {
//  dd = "0" + dd;
//}
//
//if (mm < 10) {
//  mm = "0" + mm;
//}
//console.log(yyyy);
//var x = dd + "-" + mm + "-" + yyyy;
//console.log(x);


////5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou
//
////console.log(Object.values(a));
//
//var obj = {0: "a", 1: "b", 2: "c"};
//var arr = [];
//for (var key in obj) {
//  if (Object.prototype.hasOwnProperty.call(obj, key)) {
//    var val = obj[key];
//    arr.push(val);
//  }
//}
//console.log(arr);


////6. Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.
//function sum(a, b) {
//  var c = a + b;
//  if (c > 20) {
//    return c;
//  }
//}
//console.log(sum(5, 2));


////7. Afisati index pentru fiecare valoare 2 din array: [1,2,3,4,2,5,7,2,2];
//var arr = [1, 2, 3, 4, 2, 5, 7, 2, 2];
//var joinedArr = arr.join("");
//var str = joinedArr.toString();
//
//function indexesOf(string, letter) {
//  var indexes = new Array();
//  for (var i = 0; i < string.length; i++) {
//    if (string.charAt(i) == letter) {
//      indexes.push(i);
//    }
//  }
//  return indexes;
//}
//
//function indexOf(array, integer) {
//  for (var i = 0; i < array.length; i++){
//    if (array[i] === integer) {
//      console.log(i);
//    }
//  }
//}
//indexOf(arr, 2);
//console.log(indexesOf(str, "2"));


////8. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] returnand array original;
//var arr = [1,2,3,4,2,5,7,2,2];
//
//Array.prototype.remove = function() {
//  var what, a = arguments, L = a.length, ax;
//  while (L && this.length) {
//    what = a[--L];
//    while ((ax = this.indexOf(what)) !== -1) {
//      this.splice(ax, 1);
//    }
//  }
//  return this;
//};
//
//console.log(arr.remove(2));


//////9. Scrieti o functie pentru a face split la un string si a-l trasnforma intr-un array de cuvinte - "This is some text";
//var str = "This is some text";
////var arr = str.split(" ");
////console.log(arr);
//
//function splitString(str) {
//  var tempWord = "";
//  var words = [];
//  for (var i = 0; i < str.length; i++) {
//    tempWord = tempWord + str.charAt(i);
//
//    if (str.charAt(i) === " " || i === str.length-1) {
//      words.push(tempWord);
//      tempWord = "";
//    }
//  }
//  return words;
//}
//console.log(splitString(str));

//for (var i = 0; i < arr.length; i++) {
//  while(arr[i] != ' ') {
//    myArr.push(arr[i])
//  }
//}

//function splitFunction() {
//  var myArr = [];
//  for (var i = 0; i < arr.length; i++) {
//    myArr.push(arr[i]);
//  }
//}
//console.log(splitFunction());


////10. Pentru valorile din array: [0,"text",9,undefined,"undefined",-5,null,"null"] afisati in consola valoarea si tipul ei. Ex: "9 is a number"
////11. a/an
//var arr = [0, "text", 9, undefined, "undefined", -5, null, "null"];
//for (var i = 0; i < arr.length; i++) {
//  var vowelTest = (function() {
//    var re = /^[aeiou]$/i;
//    return function(s) {
//      return re.test(s);
//    }
//  })();
//
//  var a = typeof arr[i];
//  if (vowelTest(a.charAt(0))) {
//    console.log(arr[i] + " is an " + a);
//  } else {
//    console.log(arr[i] + " is a " + a);
//  }
//}


////12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}
//var list = {first: 13, second: 6, thrid: 0, tenth: 34, last: -2};
//var sortable = [];
//for (var val in list) {
//  sortable.push([val, list[val]]);
//}
//
//sortable.sort(function(a, b) {
//  return a[1] - b[1];
//});
//
//console.log(sortable);