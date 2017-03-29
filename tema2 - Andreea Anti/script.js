//ex. 1
var arr=[20, -11, 9, 0, -1, 34, -7];
    
    //with sort()
var sortarr=arr.sort(function(a, b){return a-b});
console.log("Ex.1 with sort()")
console.log(sortarr);
    
    //with for loop
var arrLen=arr.length;
for (var i = arrLen-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
}
console.log("Ex.1 with for loop")
console.log(arr);



//ex. 2
var arr2=[1,2,3,4,2,5,7,2,2];
var arrLen2=arr2.length;
var newArr2=[];
for(var i=0; i<arrLen2; i++){
    if(arr2[i]!==2){
        newArr2.push(arr2[i]);
    }
}
console.log("Ex.2")
console.log(newArr2);


//ex. 3
var arr3=["a", "b", "c", "dd", "a"];
var arrLen3=arr3.length;
var newArr3=[];
for(var i=0; i<arrLen3; i++){
    if(arr3[i]==="b" || arr3[i]==="c"){
        newArr3.push(arr3[i]);
    }
}
console.log("Ex.3")
console.log(newArr3);

//ex. 4
var todayDate=function(){
    var date=new Date();
    var day=date.getDate();
    var month=date.getMonth()+1;//+1 because month index are 0 based (January=0, February=1, and so on...)
    var year=date.getFullYear();

    if(date<10){
        date='0'+date;
    }
    if(month<10){
        month='0'+month;
    }
    return day+"-"+month+"-"+year;
}
console.log("Ex. 4");
console.log(todayDate());

//ex. 5
var obj={ 0: 'a', 1: 'b', 2: 'c' };
var newArr4=[];
for(var key in obj){
    newArr4.push(obj[key]);
}
console.log("Ex.5")
console.log(newArr4);

//Ex. 6
var sum=function(a, b){
    var mySum=a+b;
    if(mySum>20){
        return mySum;
    }
    else{
        return "It is less than or equal to 20";
    }
}
console.log("Ex.6");
console.log(sum(6, 9));
console.log(sum(36, 89));

//Ex. 7
console.log("Ex.7");
var arr5=[1,2,3,4,2,5,7,2,2];
var arrLen5=arr5.length;
for(var i=0; i<arrLen5; i++){
    if(arr5[i]==2){
        console.log(i);
    }
}

//EX. 8
var arr6=[1,2,3,4,2,5,7,2,2];
var arrLen6=arr6.length;
for(var i=arrLen6-1;i>=0; i--){
    if(arr6[i]==2){
        arr6.splice(i,1);
    }
}
console.log("Ex.8");
console.log(arr6);


//Ex. 9
var myString="This is some text";
var transformString=function(arg_string){
    var arr7 = arg_string.split(" ");
    return arr7;
}
console.log("Ex.9");
console.log(transformString(myString));

//Ex. 10
console.log("Ex.10");
var arr8=[0,"text",9,undefined,"undefined",-5,null,"null"];
var arrLen8=arr8.length;
for(var i=0; i<arrLen8; i++){
    var type_of=arr8[i]+" is a "+typeof(arr8[i]);
    console.log(type_of);
}


//Ex. 11
console.log("Ex.11");
var arr9=[0,"text",9,undefined,"undefined",-5,null,"null"];
var arrLen9=arr8.length;
var a;
for(var i=0; i<arrLen9; i++){
    if(typeof(arr9[i])=="undefined" || typeof(arr9[i])=="object"){
        a='an';
    }
    else{
        a='a';
    }
    var type_of=arr9[i]+" is "+a+" "+typeof(arr9[i]);
    console.log(type_of);
}


//Ex.12
var obj2={ first:13, second:6, thrid:0, tenth:34, last:-2};
var newArr5=[];
for(var key2 in obj2){
    newArr5.push({
        'key':key2,
        'value':obj2[key2]
    });
}
var sortArray=newArr5.sort(function(a, b){ return a.value-b.value;});
console.log("Ex. 12");
console.log(sortArray);
