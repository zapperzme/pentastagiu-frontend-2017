//2. Inlaturati valoarea 2 din array: [1,2,3,4,2,5,7,2,2]
var myArray = [1,2,3,4,2,5,7,2,2];
var newArray = [];

for (var index=0;index<myArray.length;index+=1){
	if (myArray[index]!=2){
		newArray.push(myArray[index]);
	}
}

console.log(newArray);