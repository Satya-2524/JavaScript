// Create an array with five numbers and print it
var arr=[1,2,3,4,5]
console.log(arr);

// Given an array, print the third element
var arr=[1,2,3,4,5]
console.log(arr[2]);

// Modify the second element of an array to a new value
var arr=[1,2,3,4,5]
arr[1]=6
console.log(arr);

// Write a function that returns the length of an array
function demo(){
    var arr=[1,2,'hello',4,5]
    return arr.length
}
console.log(demo());

// Add a new element to the end of an array
var newelement=['mang0','banana','apple']
newelement.push('orange')
console.log(newelement)

// Remove the last element from an array and print the updated array
var lastlement=['mang0','banana','apple']
lastlement.pop()
console.log(lastlement)

// Use a loop to print each element of an array
var eachelement = [1 , 2 , 3 , 4 , 5]
console.log(eachelement )
for (var elements of eachelement )
console.log(eachelement)

// Create a copy of an array and print it
originalarray=[1,2,3,4]
copyarray=originalarray
console.log(copyarray)

// Convert an array to a string using .join() and print the result
arr=['Hi',' I am',' Satya']
var result=arr.join('')
console.log(result)