// var fibo = [0,1];
// for(var i = 2;i <=10 ; i++){
//     fibo[i]= fibo[i-1] + fibo[i-2];
    
// }
// console.log(fibo);


function febonaci(n){
    var fibo = [0,1];
    for(var i = 2;i <=n ; i++){
    fibo[i]= fibo[i-1] + fibo[i-2];
    
}
return fibo;

} 
var result=febonaci(100);
console.log(result);