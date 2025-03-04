// Write a for loop to print numbers from 1 to 10.
for(var i=1;i<=10;i++){
    console.log(i)
}
console.clear();

// Write a for loop to calculate the sum of all numbers from 1 to 100.
 sum=0;
for ( var i=1;i<=100;i=i+i){
sum=sum+i;
}
console.log("sum:",sum);

// Write a for loop to print the multiplication table of 7 (up to 10)
var table=7;
for(var i=1;i<=10;i++){
    console.log(`${table}*${i}=${table*i}`)
}

// Write a for loop to print all even numbers between 1 and 20.
for(var i=0;i<=20;i=i+2){
    if(i%2==0){
        console.log(i);
    }
}
       // or
for(var i=0;i<=20;i=i+2){
    console.log(i)
}

// Write a for loop to calculate the factorial of a number (e.g., 5!).
var num=5;
fact=1;
for(var i=1;i<=num;i=i+1){
    fact*=i;
}
console.log(`factorial of ${num} is:,${fact}`); //120


// Write a for loop to calculate the power of a number (e.g., 2^5)
var num = 2
var exponent = 5
var power = 1
for(var i = 0;i < exponent;i = i+1){
    power = power*num
}
console.log(power)

// Write a for loop to print all odd numbers between 20 and 1 in reverse order.
for(var i=19;i>=1;i=i-2){
    console.log(i)
}



