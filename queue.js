let arrOfNumbers = [1,2,3,4,5];
// let arrOfStrings = ["a", "b", "c"];
// let arrOfObjects = [{name: "Mohammad", age: 33}, {name: "Rafi", age: 35}, ["a","b","c"]];
// let arrOfArrays = [[1,2,3,4,5], ["a","b","c"],{name: "Rafi", age: 35}]
// for (let i = 0 ; i < arrOfNumbers.length-2; i++) {
//     console.log(arrOfNumbers[i])
// }

let newArrOfNumbers = Array.from(arrOfNumbers)
console.log("this is New array of numbers", newArrOfNumbers)
console.log("this is old array of numbers", arrOfNumbers)