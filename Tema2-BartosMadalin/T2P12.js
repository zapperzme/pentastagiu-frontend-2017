var obj = {
    first: 13,
    second: 6, 
    third: 0,
    tenth: 34,
    last: -2
};

var arr = [];

for(let value in obj)
{
    arr.push(obj[value]);
}

arr=arr.sort(function(a,b) {
    return a-b;
});

console.log(arr);