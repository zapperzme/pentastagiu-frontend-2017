var arr = [1,2,3,4,2,5,7,2,2];

arr = arr.filter(function(s) {
    if(s!=2)
        return s;
});

console.log(arr);