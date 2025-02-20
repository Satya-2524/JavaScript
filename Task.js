// Task-1
function demo(){
    console.log("Hello World"); //Normal Function
}
demo();
// Arrow Function
var demo=()=>console.log("Hello World");
demo();

//Task-2
function add(a,b){
    return a+b;
}
// Arrow Function
var add=(a,b)=>a+b;


// Task-3
function square(n){
    return n*n;
}
// Arrow Function
var square=(n)=>n*n;

// Task-4
var demo=a=>console.log(a);
demo(10);

// Task-5

'implecit'
var cubeConcise = num => num ** 3;

'Explicit'
var blockbody=num=>{
    return num**3;
}
// Task-6
var diff=(a,b)=>a-b;
console.log(diff(3,2));

// Task-7
var demo=()=>"Hello World"
    console.log(demo());
