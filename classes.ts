//Both Default Constructor and Parameterized Constructor are not allowed in the class 
class Employee {
  #id: number; //# is private access modifier for properties. Here, id is private, hence can't be accessed outside of class
  protected name: string;
  address: string;

  //Getters and Setters
  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  get empName(): string {
    return this.name;
  }

  set empName(name: string) {
    this.name = name;
  }

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

//For protected access modifier, these properties and methods are available in the class and inherited classes but not when we create an instance of a class. Because instances are created publicly
class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`
  }
}


let john = new Employee(1, "John", "Highway 71");
let address = john.getNameWithAddress();
john.empId = 100;
console.log(john.empId);


// john.id = 1;
// john.name = "John";
// john.address = "Highway 71"

console.log(john);
console.log(address);

Employee.getEmployeeCount();

let mike = new Manager(2, "Mike", "Cherise Drive");
console.log(mike.getNameWithAddress());



