// 1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]
var a = [20, -11, 9, 0, -1, 34, -7];
a.sort(function(a, b) {
  return a-b;
});

// 2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] 
var arr = [1,2,3,4,2,5,7,2,2];
var remove2 = arr.filter(function(x) {
  return x != 2;
});

// 3. Afisati din array-ul ["a", "b", "c", "dd", "a"] doar valorile b si c.
var arr = ["a", "b", "c", "dd", "a"];
function displayarr() {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === "b" || arr[i] === "c") {
      console.log(arr[i]);
    } 
  }
}

// 4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy
function today(){
  var day = new Date();
  console.log(day.getDate() + "-"  + Number(day.getMonth()+1) + "-" + day.getFullYear());
}

// 5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou
a = { 0: 'a', 1: 'b', 2: 'c' };
function displayValues() {
  var arr = [];
  for(var p in a) {
    arr.push(a[p]);
  }
  return arr;
}

// 6. Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.
function returnSum (a, b) {
  if(a + b > 20) {
    return a+b;
  }
}

// 7. Afisati index pentru fiecare valoare 2 din array: [1,2,3,4,2,5,7,2,2]
function indexof2() {
  var a = [1,2,3,4,2,5,7,2,2];
  x = [];
  for (var i in a) {
  if (a[i] === 2) 
  x.push(i);
 }
  return x;
}

// 8. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] returnand array original
function remove2() {
  var a = [1,2,3,4,2,5,7,2,2];
  for(i = 0; i < a.length; i++) {
    if(a[i] == 2) {
    delete a[i];
    }
  
  }
  return a;
}

// 9. Scrieti o functie pentru a face split la un string si a-l trasnforma intr-un array de cuvinte - "This is some text"
function splitText(a){

  return a.split(" ");

}

// 10. Pentru valorile din array: [0,"text",9,undefined,"undefined",-5,null,"null"] afisati in consola valoarea si tipul ei. Ex: "9 is a number"
function typeofitem() {
  for(i = 0; i < a.length; i++) {
    console.log(a[i] + " is a " + typeof a[i]);
  }
}

// 11. Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza
function typeofitem() {
  for(i = 0; i < a.length; i++) {
    s = String(typeof a[i]);
    if((s[0] == "a") || (s[0] == "e") || (s[0] == "i") || (s[0] == "o") || (s[0] == "u") ) {
    console.log(a[i] + " is an " + typeof a[i]);
  } else  {
    console.log(a[i] + " is a " + typeof a[i]);
  }
}
}

// 12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}
function objsort(a) {
  arr = [];
  for(var p in a) {
    arr.push(a[p]);
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  
  console.log(arr);
}