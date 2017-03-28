//12. Afisati in consola in mod crescator valorile din obiectul urmator { first:13, second:6, thrid:0, tenth:34, last:-2}
var object = { first:13, second:6, thrid:0, tenth:34, last:-2}

function getLength(param){
	count = 0
	for (item in param){
		count += 1
	}
	return count
}

while (getLength(object)){
	var min = {
		value: undefined,
		key: undefined
	}
	for (var key in object){
		if (min.value===undefined){
			min.value = object[key]
			min.key = key
		}
		if (object[key]<min.value){
			min.value = object[key]
			min.key = key
		}
	};
	console.log(min.value);
	delete object[min.key];
}
