var exNo = 0;

function display(ex, exNo, title) {

    var wrapper = document.getElementById('wrapper');
    var div = document.createElement('div');
    var h = document.createElement('h3');
    var p = document.createElement('p');

    h.innerHTML = "Exercise " + exNo + ": " + title;
    p.innerHTML = ex;
    div.appendChild(h);
    div.appendChild(p);
    div.style.marginBottom = '50px';
    div.style.marginLeft = '30px';

    wrapper.appendChild(div);
}

// exercise 1
exNo++;
var title = "Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]"

var arr = [20, -11, 9, 0, -1, 34, -7];

arr.sort(function (a, b) {
    return a - b
});
//Call to display result
display(arr, exNo, title);


//exercise 2

exNo++;
var title = "Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2]"

var arr = [1, 2, 3, 4, 2, 5, 7, 2, 2];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 2) {
        arr2.push(arr[i]);
    }
}
display(arr2, exNo, title);


//exercise 3

exNo++;
var title = 'Afisati din array-ul ["a", "b", "c", "dd", "a"] doar valorile b si c.';

var array1 = ["a", "b", "c", "dd", "a"];
var array2 = [];
for (var i = 0; i < array1.length; i++) {
    if (array1[i] == 'b') {
        array2.push(array1[i]);
    } else if (array1[i] == 'c') {
        array2.push(array1[i]);
    }

}
display(array2, exNo, title);

//exercise 4

exNo++;
var title = 'Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy';

function tDate() {

    var format = null;
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) {
        return format = day + '-0' + month + '-' + year;
    } else {
        return format = day + '-' + month + '-' + year;
    }
}
display(tDate(), exNo, title);

//exercise 5

exNo++;
var title = "Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou";

var obj = {
    0: 'a',
    1: 'b',
    2: 'c'
};
var vals = Object.values(obj);

display(vals, exNo, title);


//exercise 6

exNo++;
var title = "Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.";

display(null, exNo, title);

var t = document.getElementById('wrapper');
var inputWrapper = document.createElement('div');
inputWrapper.style = 'margin-bottom:50px; margin-left:30px'

var textButton = document.createTextNode('Submit');

var result = document.createElement('p');
result.innerHTML = 'Give me 2 numbers!!! (^_^)';

var inputA = document.createElement('input');
var inputB = document.createElement('input');
var submit = document.createElement('button');


inputA.type = 'number';
inputB.type = 'number';
submit.type = 'submit';
submit.appendChild(textButton);

inputWrapper.appendChild(result);
inputWrapper.appendChild(inputB);
inputWrapper.appendChild(inputA);
inputWrapper.appendChild(submit);

t.appendChild(inputWrapper);

submit.onclick = function banana(a, b) {

    a = parseInt(inputA.value);
    b = parseInt(inputB.value);

    var sumAB = a + b;

    if (sumAB >= 20) {
        return result.innerHTML = sumAB;
    } else {
        return result.innerHTML = 'sory';

    }
};

/*
function banana(a, b) {

    var sumAB = a + b;
    if (sumAB >= 20) {
        return sumAB;
    } else {
        return 'sory';
    }
}
*/

//exercise 7

exNo++;
var title = "Afisati index pentru fiecare valoare 2 din array: [1,2,3,4,2,5,7,2,2]";

var arr = [1, 2, 3, 4, 2, 5, 7, 2, 2];

var index = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 2) {
        index.push(i);
    }
}

display(index, exNo, title);


//exercise 8

exNo++;
var title = "Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] returnand array original";

var arr = [1, 2, 3, 4, 2, 5, 7, 2, 2];

for (var i = arr.length; i >= 0; i--) {
    if (arr[i] == 2) {
        arr.splice([i], 1);
    }
}

display(arr, exNo, title);


//exercise 9

exNo++;
var title = 'Scrieti o functie pentru a face split la un string si a-l trasnforma intr-un array de cuvinte - "This is some text"';


var str = "This is some text";
var splitText = str.split(" ");

display(splitText, exNo, title);


//exercise 10

exNo++;
var title = 'Pentru valorile din array: [0,"text",9,undefined,"undefined",-5,null,"null"] afisati in consola valoarea si tipul ei. Ex: "9 is a number"';

var str = [0, "text", 9, undefined, "undefined", -5, null, "null"];

display(null, exNo, title);

var text = document.getElementsByTagName('p').item(10);

for (var i = 0; i < str.length; i++) {
    var paragraph = document.createElement('p');
    text.appendChild(paragraph);
    paragraph.innerHTML = str[i] + ' is a ' + typeof (str[i]);

}


//exercise 11

exNo++;
var title = 'Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza';

var str = [0, "text", 9, undefined, "undefined", -5, null, "null"];

display(null, exNo, title);

var text1 = document.getElementsByTagName('p').item(19);
for (var i = 0; i < str.length; i++) {
    var paragraph = document.createElement('p');
    text1.appendChild(paragraph);
    var c = (typeof (str[i])).indexOf();

    if (c != -1) {
        paragraph.innerHTML = str[i] + ' is an ' + typeof (str[i]);
    } else {
        paragraph.innerHTML = str[i] + ' is a ' + typeof (str[i]);
    }

}



//exercise 12

exNo++;
var title = 'Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}';


var obj2 = {
    first: 13,
    second: 6,
    thrid: 0,
    tenth: 34,
    last: -2
}


var vals2 = Object.values(obj2);


function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return a;
    //var temp = null;
    //    for (var i = 0; i < a.length; i++) {
    //        if (a[i] > a[i + 1]) {
    //            temp = a[i];
    //            a[i] = a[i + 1];
    //            a[i + 1] = temp;
    //        }
    //    }
}

display(bubbleSort(vals2), exNo, title);
