export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

//Object Destructuring
let { name: userName, email: userLogin }: User = { name: 'Rukshesh', id: 1, email: 'rukshesh.talwar12@gmail.com' }

//Array Destructuring
let [user1, user2, ...restUsers]: User[] = [
  { name: 'Rukshesh', id: 1, email: 'rukshesh.talwar12@gmail.com' },
  { name: 'John', id: 2, email: 'john.talwar@gmail.com' },
  { name: 'Himanshi', id: 3, email: 'himanshi.suri@gmail.com' }
]

console.log(user1);
console.log(user2);
console.log(restUsers);


// let result = restUsers.filter(user => user.id > 2);
// console.log(result);
