var arr = ["a", "b", "c", "dd", "a"];

var arr_filtered = arr.filter(function(s) {
    if(s=="b" || s=="c")
        return s;
});

console.log(arr_filtered);