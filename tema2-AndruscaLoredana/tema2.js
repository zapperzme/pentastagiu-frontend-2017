//1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]
var array = [20, -11, 9, 0, -1, 34, -7];
array.sort(function(a, b) {
    return a - b
});

//2. Inlaturati valoarea 2 din array: [1, 2, 3, 4, 2, 5, 7, 2, 2]
var value = 2;

var array = [1, 2, 3, 4, 2, 5, 7, 2, 2];

array = array.filter(function(item) {
    return item !== value;
});

console.log(array);

//3. Afisati din array - ul["a", "b", "c", "dd", "a"] doar valorile b si c.
var array = ["a", "b", "c", "dd", "a"];

console.log(array[1], array[2]);

//4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd - mm - yyyy

var today = new Date();

var dd = today.getDate();

var mm = today.getMonth() + 1;

var yyyy = today.getFullYear();


if (dd < 10) {

    dd = '0' + dd
}



if (mm < 10) {

    mm = '0' + mm
}



today = dd + '-' + mm + '-' + yyyy;


console.log(today);

/*5. Afisati valorile obiectului {
    0: 'a',
    1: 'b',
    2: 'c'
}
intr - un array nou*/
var objj = {
    0: 'a',
    1: 'b',
    2: 'c'
};

var x = [];

for (i in objj) {
    x.push(objj[i]);
}

console.log(x);

//6. Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.


function getSum(item1, item2)

{
    var sum = item1 + item2;

    if (sum > 20)

        return (sum);
}

getSum(3, 45);



//7. Afisati index pentru fiecare valoare 2 din array: [1, 2, 3, 4, 2, 5, 7, 2, 2]

var arr = [1, 2, 3, 4, 2, 5, 7, 2, 2];
var start = 0;
var cont = 0;
var x;


while (start < arr.length) {
    x = arr.indexOf(2, start);

    start = x + 1;

    console.log(x);
}


//8. Inlaturati valoarea 2 din array: [1, 2, 3, 4, 2, 5, 7, 2, 2] returnand array original

var array = [1, 2, 3, 4, 2, 5, 7, 2, 2];

function remove(val) {
    return val != 2;
}
console.log(array.filter(remove));


//9. Scrieti o functie pentru a face split la un string si a - l trasnforma intr - un array de cuvinte - "This is some text"
var str = "This is some text";

var res = str.split(" ");

console.log(res);


//10. Pentru valorile din array: [0, "text", 9, undefined, "undefined", -5, null, "null"] afisati in consola valoarea si tipul ei.Ex: "9 is a number"
var array = [0, "text", 9, undefined, "undefined", -5, null, "null"];
for (var i in array)
    console.log(array[i] + " is a " + typeof array[i]);


//11. Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza
var array = [0, "text", 9, undefined, "undefined", -5, null, "null"];
for (var i in array) {
    var x = typeof array[i];

    if (x[0] == "a" || x[0] == "e" || x[0] == "i" || x[0] == "o" || x[0] == "u")
        console.log(array[i] + " is an " + typeof array[i]);
    else
        console.log(array[i] + " is a " + typeof array[i]);
}


/*12. Afisati in consola in mod crescator valorile din obiectul urmator {
    first: 13,
    second: 6,
    thrid: 0,
    tenth: 34,
    last: -2
}*/
var objj = {
    first: 13,
    second: 6,
    thrid: 0,
    tenth: 34,
    last: -2
};
var x = [];
for (i in objj) {
    x.push(objj[i]);
}
console.log(x.sort(function(a, b) {
    return a - b
}));