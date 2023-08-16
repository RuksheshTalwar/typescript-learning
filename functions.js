"use strict";
//Optional Parameter : num3
//1st way of writing functions - Named Function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
//2nd way of writing functions - Arrow Function
//Required Parameter - num3
const sub = (num1, num2, num3 = 10) => num1 - num2;
console.log(sub(3, 2));
console.log(sub(3, 2, 5));
//3rd way of writing functions - Function Expression
const mul = function (num1, num2) {
    return num1 * num2;
};
//Reduce an array
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, curr) => acc + curr, 0);
}
let numbers = [3, 4, 5, 6];
console.log(add2(1, 2, ...numbers));
let stringList = ["Java", "Python", "JavaScript", "TypeScript"];
let anotherStrList = ["GoLang", "Kube", "AWS"];
stringList = stringList.concat(anotherStrList);
console.log(stringList);
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//Usage of Generics
function identityThree(val) {
    return val;
}
identityThree(3);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({
//   name="Chivas",
//   type=4
// });
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c', 'd', 'e', 'f']);
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//Using Arrow Functions with Generics
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
// const p1 = Promise.resolve("Hello");
// const p2 = Promise.resolve(3.14);
