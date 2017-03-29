//12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}

function sortV(array){
	var isModified = true;
	while (isModified){
		isModified = false;
		for (var index=0;index<array.length-1;index+=1){
			if (array[index]>array[index+1]){
				temp = array[index]
				array[index] = array[index+1]
				array[index+1] = temp
				isModified = true;
			}
		}
	}
	return array;
}

var object = { first:13, second:6, thrid:0, tenth:34, last:-2}
var arrValues = []

for (key in object){
	arrValues.push(object[key]);
}
sortV(arrValues).map(function(value){console.log(value)});

