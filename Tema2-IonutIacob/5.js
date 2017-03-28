//5. Afisati valorile obiectului  { 0: 'a', 1: 'b', 2: 'c' } intr-un array nou
var obj = {
	0: 'a',
	1: 'b',
	2: 'c'
}

var arr = []
for (value in obj){
	arr.push(obj[value]);
}
console.log(arr);