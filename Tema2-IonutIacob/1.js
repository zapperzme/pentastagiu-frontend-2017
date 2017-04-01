//1. Aranjati numerele din array in ordine crescatoare: [20, -11, 9, 0, -1, 34, -7]
var x = [9, -20, 0, -3, 12, 1]

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
	console.log(array);
}

sortV(x);