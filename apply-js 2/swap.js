var a=5;
var b=9;
console.log("before swap : a=", a, "b =",b);
var temp = a;
a = b;
b = a;
b = temp;
console.log("after swap : a=", a, "b =",b);