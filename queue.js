// Playing with array
// ADDING VALUE TO AN ARRAY
 
let myArray = [10, "Mohaamd"];


// HOW WE CAN ADD VALUE TO THE END OF AN ARRAY
myArray.push(20)
console.log(myArray)
myArray.push("Jon")
console.log(myArray)

// HOW WE CAN ADD VALUE TO THE BEGGING OF AN ARRAY
myArray.unshift(30)
console.log(myArray)
myArray.unshift("Mike")
console.log(myArray)

// HOW WE CAN USE INDEXING TO ADD VALUE IN MIDDLE OR DEFERNT POSSITION OF THE ARRAY
const atWhichIndex = 3;
const valueAddToArray = "Mohammad";
myArray.splice(atWhichIndex, 0, valueAddToArray)
console.log(myArray)

