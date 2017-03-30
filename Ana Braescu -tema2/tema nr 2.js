Ex nr.1


var array = [20,-11,9,0,-1,34,-7];
var arr_sorted = arr.sort(function(a,b){
	return -a-b;
})
arr_sorted;



Ex nr.2

var a [1,2,3,4,2,5,7,2,2]
var arr2 = arr.filter(function(x){
	if(number )
	return x;
  }
	console.log(arr2);
  
  
Ex nr.3 
var array = [ "a"," b","c","dd","a"];
var final = [];
var i;
for (i=0;i< array.length; i++){
	if (array[i] === "b" || array[i] === "c"){
		final.push(array[i]);
	}
}


Ex nr.4
 
var today = new Date();

function myDateFormat (Date) {

	var dd = date.getDate(); 
	var mm = date.getMounth() + 1;
	var yyyy = date.getFullYear();
		if (dd < 10 ){
		dd = "0" + dd
	}
	
		if (mm < 10) {
		mm = "0" + mm
	}
	return dd +" "+ mm + " " + yyyy;
	}
	
	console.log(myDateFormat(today));
	
	
	
Ex nr.5

var obj  = { 0:"a",1:"b",2:"c"}
	
function objectToArray(object) {
	var array = [];
	for (var i in object) {
	array.push(object[i]);
}
	return array
}
console.log ( objectToArray(obj));



Ex nr.6

var sum = function (a,b) {
	if (a+b > 20 ) 
	return a+b;
}
	else {
	return null;
}
sum(15,10);
sum(10,5);


 

Ex nr.9

var str = "this is some text";
var arr = [];
arr=str.split(" ");


