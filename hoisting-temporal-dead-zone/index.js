//HOiSTING
//Function hoisting

// console.log(greet())
// function greet()
// {
//     console.log("hello world")
// }

//function expression no hoisting
// console.log(data)
// let data=function()
// {
//     console.log("data is fetched")
// }
//function expression using var only allows for variable hoisting not function
// console.log(hello) //returns undefined
// var hello=function()
// {
//     console.log("hello world one")
// }

//VARIABLE HOISTING
//only var allows for variable hoisting but only variable declaration not initailization
 console.log(age) //returns undefined because  only variable declaration is shifted to  the top of the scope
var age=25

//CLASS ,LET ,CONST DO NOT ALLOW FOR HOSITING

//TEMPORAL DEAD ZONE
console.log(marks)  // TEMPORAL DEAD ZONE
console.log("hello") //TEMPORAL DEAD ZONE
console.log("world") //TEMPORAL DEAD ZONE
const marks=65      //TEMPORAL DEAD ZONE
console.log(marks)