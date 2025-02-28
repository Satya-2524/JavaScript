// largest numbers
function findLargest(num1,num2,callback){
    return callback(num1,num2)+5;
}
var result=findLargest(12,20,(num1,num2)=>{
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
})
console.log(result)

// sum or difference with a callback
function calculate(a,b,callback){
    return callback(a,b)*3
}
var result=calculate(10,5,(a,b)=>{
    if(a>b){
        return a+b;
    }
    if(b>a){
        return b-a;
    }
    else{
        return 0;
    }
})
console.log(result);

// even or odd with a callback
function checkEvenOdd(num,callback){
    return callback(num);
}
var result=checkEvenOdd(8,(num)=>{
    if(num%2==0){
        return "even";
    }
    return "odd"
})
console.log(result)

// Positive,negitive or zero with a callback
function checkSign(num,callback){
    return callback(num)
}
var result=checkSign(-10,(num)=>{
    if(num>0){
        return "Positive"
    }
    if (num<0) {
        return "Negative"
    } else {
        return "Zero"
    }
})
console.log(result)

// Multiply by Condition with a callback
function multiplyconditionally(num1,num2,callback){
    return callback(num1,num2)*4;
}
var result=multiplyconditionally(4,6,(num1,num2)=>{
    if(num1>num2){
        return num1*num2;
    }
    if (num2>num1) {
        return num1+num2
        
    } else {
       return num1;
    }
})
console.log(result);