ex1();
ex2();
ex3();
ex4();
ex5();
ex7();
ex8();
ex9();
ex10();
ex11();
ex12();


function ex1() {
    var array=[20, -11, 9, 0, -1, 34, -7];
    for (var i = 0; i < array.length; i++) {
        var target = array[i];
        for (var j = i - 1; j >= 0 && (array[j] > target); j--) {
            array[j+1] = array[j];
        }
        array[j+1] = target
    }
    document.getElementById('ex1').innerHTML=array;
}

function ex2() {
    var array=[1,2,3,4,2,5,7,2,2];
    for(var i = array.length - 1; i >= 0; i--) {
        if(array[i] === 2) {
            array.splice(i, 1);
        }
    }
    document.getElementById('ex2').innerHTML=array;
}

function ex3() {
    var array=["a","b","c","dd","a"];
    var newArray=[];

        for(var i=0;i<array.length;i++){
            if(array[i]=="b"||array[i]=="c"){
                newArray.push(array[i]);
            }
    }
    document.getElementById('ex3').innerHTML=newArray;
}
function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}
function ex4() {
        var now = new Date();
        document.getElementById("ex4").innerHTML = AddZero(now.getDate()) + "-" + AddZero(now.getMonth() + 1) + "-" + now.getFullYear();

}

function ex5() {
        var array={0:"a",1:"b",2:"c"};
        var newArray=[];

        for(value in array){

            newArray.push(array[value]);

        }
    document.getElementById("ex5").innerHTML=newArray;

}

function ex6() {
    var nr1=document.getElementById("nr1").value;
    var nr2=document.getElementById("nr2").value;
    var sum = parseInt(nr1)+parseInt(nr2);
    if(sum > 20){
        document.getElementById("ex6").innerHTML="Suma acestor 2 numere este "+sum;
    }
    else {
        document.getElementById("ex6").innerHTML="Suma este mai mica de 20";

    }
}

function ex7() {
        var array=[1,2,3,4,2,5,7,2,2];
        var newArray=[];
        for(var i=0;i<array.length;i++) {
            if (array[i] == 2) {
                newArray.push(i);
            }
        }
        document.getElementById('ex7').innerHTML=newArray;
}

function ex8() {
    var array=[1,2,3,4,2,5,7,2,2];
    for(var i = array.length - 1; i >= 0; i--) {
        if(array[i] === 2) {
            array.splice(i, 1);
        }
    }
    document.getElementById('ex8').innerHTML=array;
}

function ex9() {
    var string="This is some text";
    var arrayString=string.split(" ");//taie stringul la fiecare spatiu
    document.getElementById('ex9').innerHTML=arrayString;
}


function ex10() {
    var newArray=[];
    var array=[0,"text",9,undefined,"undefined",-5,null,"null"];
    var stringToShow="";
    for(var i=0;i<array.length;i++) {
        newArray.push(typeof array[i]);//introdce in newarray tipul de data
        stringToShow += array[i]+" is a "+newArray[i]+"</br>";//la fiecare pas din for introduce in string vloarea din array ,tipul aceasteia si un rand nou
    }
    document.getElementById('ex10').innerHTML=stringToShow;// afiseaza stringul
}

function ex11() {
    var newArray=[];
    var array=[0,"text",9,undefined,"undefined",-5,null,"null"];
    var stringToShow="";
    for(var i=0;i<array.length;i++) {
        newArray.push(typeof array[i]);
        console.log(newArray);
        if(typeof array[i] === "undefined" || typeof array[i] === "object"){
            stringToShow += array[i] + " is an " + newArray[i] + "</br>";
        }
        else {
            stringToShow += array[i] + " is a " + newArray[i] + "</br>";
        }
    }
    document.getElementById('ex11').innerHTML=stringToShow;
}

function ex12() {
    var object={ first:13, second:6, thrid:0, tenth:34, last:-2};
    var array=[];
    for(value in object) {  //selecteaza fiecare valoare din obiect
            array.push(parseInt(object[value])); // face push in array nou
        for (var i = 0; i < array.length; i++) {//ca la ex 1 le rearangeaza in ordine crescatoare
            var target = array[i];
            for (var j = i - 1; j >= 0 && (array[j] > target); j--) {
                array[j+1] = array[j];
            }
            array[j+1] = target
        }

    }
    document.getElementById('ex12').innerHTML=array;
}