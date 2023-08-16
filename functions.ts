//Optional Parameter : num3
//1st way of writing functions - Named Function
function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));

//2nd way of writing functions - Arrow Function
//Required Parameter - num3
const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2;
console.log(sub(3, 2));
console.log(sub(3, 2, 5));

//3rd way of writing functions - Function Expression
const mul = function (num1: number, num2: number): number {
  return num1 * num2
}

//Reduce an array
function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((acc, curr) => acc + curr, 0)
}

let numbers: number[] = [3, 4, 5, 6];
console.log(add2(1, 2, ...numbers));

let stringList: Array<String> = ["Java", "Python", "JavaScript", "TypeScript"];
let anotherStrList: Array<String> = ["GoLang", "Kube", "AWS"];

stringList = stringList.concat(anotherStrList);
console.log(stringList);

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
  return val;

}

function identityTwo(val: any): any {
  return val;
}

//Usage of Generics
function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree(3);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  name: string,
  type: number
}

// identityFour<Bottle>({
//   name="Chivas",
//   type=4
// });

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4, 5]);

let concatString = getItems(['a', 'b', 'c', 'd', 'e', 'f']);

function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  const myIndex = 3;
  return products[myIndex];
}

//Using Arrow Functions with Generics
const getMoreSearchProducts = <T,>(products: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return products[myIndex];
}

// const p1 = Promise.resolve("Hello");
// const p2 = Promise.resolve(3.14);

