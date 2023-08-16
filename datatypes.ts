let lname: string; //Type Inference

lname = 'Rukshesh';
let newName = lname.toUpperCase();

console.log(newName);

let age: number;
age = 25;

let dob = "25";
let result = parseInt(dob);

let isValid: boolean = false;

console.log(isValid);

let empList: string[];

empList = ["Rukshesh", "Himanshi", "Rukshesh2"];

let numList: Array<number>; //Syntax of Generics

numList = [1, 2, 3, 4, 5];

let results = numList.filter((num) => num > 2);

// let num = numList.find((num) => num === 2);

// console.log(num);
console.log(results);

let sum = numList.reduce((acc, num) => acc + num);

let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);

swapNumbs[0];
swapNumbs[1];

let departMent: any;
departMent = "10";


