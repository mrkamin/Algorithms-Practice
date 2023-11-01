const myArray = new Array();
console.log(myArray)// output = []

const arrayOfStringNumbers = ["one", "two", "three"]
console.log(arrayOfStringNumbers); // output = [ 'one', 'two', 'three' ]
console.log(arrayOfStringNumbers[2]); // output = three

const myNewArray = Array.from(myArray);
console.log(myNewArray); // output = []
const my2NewArray = Array.from(arrayOfStringNumbers);
console.log(my2NewArray); // output = [ 'one', 'two', 'three' ]