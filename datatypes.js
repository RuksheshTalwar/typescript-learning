"use strict";
let lname; //Type Inference
lname = 'Rukshesh';
let newName = lname.toUpperCase();
console.log(newName);
let age;
age = 25;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Rukshesh", "Himanshi", "Rukshesh2"];
let numList; //Syntax of Generics
numList = [1, 2, 3, 4, 5];
let results = numList.filter((num) => num > 2);
// let num = numList.find((num) => num === 2);
// console.log(num);
console.log(results);
let sum = numList.reduce((acc, num) => acc + num);
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
swapNumbs[0];
swapNumbs[1];
let departMent;
departMent = "10";
