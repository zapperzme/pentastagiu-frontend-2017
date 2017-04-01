//10. Pentru valorile din array: [0,"text",9,undefined,"undefined",-5,null,"null"] afisati in consola valoarea si tipul ei. Ex: "9 is a number"
var arr = [0,"text",9,undefined,"undefined",-5,null,"null"];
for (index in arr){
	var type = typeof arr[index];
	console.log([arr[index],'is a', type].join(' '))
}