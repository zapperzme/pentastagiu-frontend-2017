console.log("1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]");
x = [20, -11, 9, 0, -1, 34, -7];
console.log("before: " + x);

function bubbleSort(items) {
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        for (var j = (length - i); j > 0; j--) {
            if (items[j] < items[j - 1]) {
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
}
bubbleSort(x);
console.log("after: " + x);


console.log("\n 2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2]");

var x = [1, 2, 3, 4, 2, 5, 7, 2, 2];
console.log("before: " + x);

function remove(items, toRemove) {
    for (var i in items) {
        while (items[i] === toRemove) {
            items.splice(i, 1);
        }
    }
}
remove(x, 2);
console.log("after: " + x);


console.log("\n 3. Afisati din array-ul [\"a\", \"b\", \"c\", \"dd\", \"a\"] doar valorile b si c.");

var x = ["a", "b", "c", "d", "a"];

function selectItemsIfExist(items, toSelect) {
    var myArray = [];
    for (var i in items) {
        for (var j in toSelect)
            if (items[i] === toSelect[j]) {
                myArray.push(items[i]);
            }
    }
    return myArray;
}
console.log(selectItemsIfExist(x, ["b", "c"]));


console.log("\n 4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy");

var today = new Date();

function myDateFormat(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    return dd + '-' + mm + '-' + yyyy;
}
console.log(myDateFormat(today));


console.log("\n 5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou");

var obj = {
    0: "a",
    1: "b",
    2: "c"
}

function objectToArray(object) {
    var array = [];
    for (var i in object) {
        array.push(object[i]);
    }
    return array;
}
console.log(objectToArray(obj));


console.log("\n 6. Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.");

var conditionalSum = function(a, b) {
    if (a + b > 20) {
        return a + b
    }
    return null;
}
console.log(conditionalSum(12, 14));
console.log(conditionalSum(12, 1));


console.log("\n 7. Afisati index pentru fiecare valoare 2 din array: [1,2,3,4,2,5,7,2,2]");

var obj = {
    array: [1, 2, 3, 4, 2, 5, 7, 2, 2],
    itemPosition: function(item) {
        var position = [];
        for (var i in this.array) {
            if (this.array[i] === item) {
                position.push(i);
            }
        }
        return position;
    }
};
console.log(obj.itemPosition(2));


console.log("\n 9. Scrieti o functie pentru a face split la un string si a-l trasnforma intr-un array de cuvinte - \"This is some text\"");

var obj = {
    string: "This is some text",
    array: function() {
        return this.string.split(" ");
    }
};
console.log(obj.array());


console.log("\n 10. Pentru valorile din array: [0,\"text\",9,undefined,\"undefined\",-5,null,\"null\"] afisati in consola valoarea si tipul ei.");

var array = [0, "text", 9, undefined, "undefined", -5, null, "null"];
for (var i in array) {
    console.log(array[i] + ' is a ' + typeof(array[i]));
}


console.log("\n 11. Pentru exercitiul anterior, afisati corect forma acordului \"an\" \/ \"a\" in functie de cuvantul ce urmeaza");

var array = [0, "text", 9, undefined, "undefined", -5, null, "null"];
for (var i in array) {
    if (typeof(array[i]) === 'object' || typeof(array[i]) === 'undefined')
        console.log(array[i] + ' is an ' + typeof(array[i]));
    else
        console.log(array[i] + ' is a ' + typeof(array[i]));
}


console.log("\n 12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}");

var obj = {
    first: 13,
    second: 6,
    thrid: 0,
    tenth: 34,
    last: -2
};
var array = objectToArray(obj);
bubbleSort(array);
console.log(array);