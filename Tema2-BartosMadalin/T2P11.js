var arr = [0, "text", 9, undefined, "undefined", -5, null, "null"];

for(var i=0;i<arr.length;i++)
{
    var type=typeof(arr[i]);
    if(type[0]=="a"||type[0]=="e"||type[0]=="i"||type[0]=="o"||type[0]=="u")
        console.log(arr[i] + " is an " + typeof(arr[i]));
    else
        console.log(arr[i] + " is a " + typeof(arr[i]));
}