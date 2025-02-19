// Task-1
function processNumbers(x,y,callback)
{
    return callback(x,y)
}
processNumbers(3,4,function(x,y){
var result=x+y;
console.log('sum: ',result);
})
//  Task-2
function greet(callback){
    return callback("Alice")
}
greet(function(name){
    var result='Hello'+" "+name;
    console.log(result)
})
// Task-3
function caluculate(num1,num2,callback){
    return callback(num1,num2)
}
caluculate(10,5,function(num3,num4){
    var result2 =num3-num4;
    console.log('difference: ',result2);
})