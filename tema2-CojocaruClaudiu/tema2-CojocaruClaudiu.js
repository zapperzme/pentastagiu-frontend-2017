//1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7].
var x = [20, -11, 9, 0, -1, 34, -7];
function s(a,b) {
 return a-b;
}
console.log(x.sort(s));



//2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2].
var myArr = [1,2,3,4,2,5,7,2,2];
for(i=1;i<myArr.length;i++){
  if(myArr[i] === 2){
    myArr.splice(i,1);
    i--;
    myArr.length--;
	}
}
console.log(myArr);

var y=[1,2,3,4,2,5,7,2,2].filter(function(el){
  return el !== 2 ;
});
console.log(y);



//3. Afisati din array-ul ["a", "b", "c", "dd", "a"] doar valorile b si c.
var z=['a','b','c','dd','a'].filter(function(el){
  return el === 'c' || el === 'b';
  });
console.log(z);



//4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy.
function printDate(){
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = day + "-" + month + "-" + year;
  return newdate;
}
console.log(printDate());



//5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou.
var myObj = { 0: 'a', 1: 'b', 2: 'c' };
var myArr2 = Object.values(myObj);
console.log(myArr2);



//6. Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.
function sum(a,b){
if(a + b <= 20){
  return a + b ;
  } else {
   return;
  }
}
console.log(sum(15,5));
console.log(sum(15,6));



//7. Afisati index pentru fiecare valoare 2 din array: [1,2,3,4,2,5,7,2,2].
var myArr3 = [1,2,3,4,2,5,7,2,2].reduce(function(acc,el,index){
  if(el === 2){
    acc.push(index);
  }
    return acc;
  },[]);
console.log(myArr3);



//8. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2] returnand array original.
var myArr4=[1,2,3,4,2,5,7,2,2].filter(function(el){
 return el !== 2;
});
console.log(myArr4);



//9. Scrieti o functie pentru a face split la un string si a-l trasnforma intr-un array de cuvinte - "This is some text".
var text = "This is some string";
var myArr5 = text.split(" ");
console.log(myArr5);

//10. Pentru valorile din array: [0,"text",9,undefined,"undefined",-5,null,"null"] afisati in consola valoarea si tipul ei. Ex: "9 is a number".
var myArr6 = [0, "text", 9, undefined, "undefined", -5, null, "null"];
for (i in myArr6){
  console.log(myArr6[i] + " is a : " + typeof myArr6[i]);
};



//11. Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza.
var myArr7 = [0, "text", 9, undefined, "undefined", -5, null, "null"];
for (i in myArr7){
  var valueType = typeof myArr7[i];
  var firstLetter = valueType.charAt(0);
  if(firstLetter==="n" || firstLetter==="s" || firstLetter==="b"){
    console.log(myArr7[i] + " is a : " + valueType);
	}
	else if(firstLetter === "o" || firstLetter === "u"){
		console.log(myArr7[i] + " is an : " + valueType);
	}
};



//12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}.
var myObj2 = {first:13, second:6, thrid:0, tenth:34, last:-2};
var justValues = Object.values(myObj2);
function sorting(a,b){
 return a -b ;
}
console.log(justValues.sort(sorting));