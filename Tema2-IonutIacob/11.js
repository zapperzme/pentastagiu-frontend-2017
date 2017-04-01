//11. Pentru exercitiul anterior, afisati corect forma acordului "an" / "a" in functie de cuvantul ce urmeaza
var arr = [0,"text",9,undefined,"undefined",-5,null,"null"];
for (index in arr){
	var type = typeof arr[index];
	var suffix = '';
	if (['a','e','i','o','u'].indexOf(type[0]) > -1){
		suffix = 'n';
	}
	console.log([arr[index],'is a'+suffix, type].join(' '))
}