//6. Scrieti o functie care sa primeasca 2 argumente si sa returneze suma acestora doar daca numarul este mai mare ca 20.
function  conditional_sum(arg1, arg2){
	sum = arg1+arg2;
	if (sum > 20){
		return sum;
	}
}
console.log(conditional_sum(1,20));