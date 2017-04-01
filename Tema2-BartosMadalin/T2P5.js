var obj = {
    0: 'a',
    1: 'b',
    2: 'c'
};

var arr = [];

for(let value in obj) {
    arr.push(obj[value]);
}

console.log(arr);