//4. Scrieti o functie pentru a afisa in consola data de astazi, in formatul dd-mm-yyyy
function printDate(){
	date = new Date();
	month = date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1;
	day = date.getDate()+1 < 10 ? '0'+(date.getDate()+1) : date.getDate()+1;
	console.log([day, month, date.getFullYear()].join('-'));
}

printDate()
