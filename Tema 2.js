//Exercitiul Nr. 1
var x = [20, -11, 9, 0, -1, 34, -7];
x.sort(function(a,b) {
	return a-b;})
console.log(x);


//Exercitiul Nr. 2
var valoare = 2;
var x = [1,2,3,4,2,5,7,2,2];
x = x.filter(function(item) { 
    return item !== valoare;
});

console.log(x);


//Exercitiul Nr.3
var x = ["a", "b", "c", "dd", "a"];
x = x.filter(function(item){
	return item == "b" || item =="c";
});
console.log(x);


//Exercitiul Nr.4
var dt = new Date();
var z = dt.getDate();
if(z<=9){
	 z="0"+dt.getDate();
}
var l = dt.getMonth()+1;
console.log(l);
if(l<=9){
    l = "0"+l;
}
var a=dt.getFullYear();
console.log(z+"-"+l+"-"+a);

//Exercitiul Nr.5
var obj={ 0: 'a', 1: 'b', 2: 'c' };
function introducere(obiect){
	var x=[];
	for(var i in obiect){
		x.push(obiect[i]);
	}
	return x;
}
console.log(introducere(obj));

//Exercitiul Nr.6
function suma(x,y){
	var z;
	if(x+y>20){
		z=x+y;
		return z;
	}
	else{
		return "Suma este mai mica decat 20";}
	}
console.log(suma(10,2));

//Exercitiul Nr.7















//Exercitiul Nr.8
var valoare = 2;
var x = [1,2,3,4,2,5,7,2,2];
x = x.filter(function(item) { 
    return item !== valoare;
});

console.log(x);

//Exerciutiul Nr.9













//Exercitiul Nr.10
	var x=[0,"text",9,undefined,"undefined",-5,null,"null"];
		for(i=0;i<x.length;i++){
			console.log(x[i] + " is a " + typeof x[i]);}


//Exercitiul Nr.11

var x=[0,"text",9,undefined,"undefined",-5,null,"null"];
for(i=0;i<x.length;i++){
		var y=typeof x[i];
	if (y.charAt(0) === 'a' || y.charAt(0) === 'e' || y.charAt(0) === 'i' || y.charAt(0) === 'o' || y.charAt(0) === 'u') {
		console.log(x[i] + " is an " + y);
	}
	else{
		console.log(x[i] + " is a " + y);
	}
}

//Exercitiul Nr.12
var y = { first: 13, second: 6, thrid: 0, tenth: 34, last: -2};
var q = [];
var i;
	for (i in y) {
		q.push(y[i]);
	}
	q.sort(function(a,b) {
	return a-b;})
console.log(q);

