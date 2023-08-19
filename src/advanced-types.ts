// ### Intersection types
// Intersection types can be used to combine multiple types.
// in case of object types, the resulting object will have all properties of all types.
// in case of union types, the resulting type will have all members of all types.
// in case of function types, the resulting function will have all parameters and return types of all types.
// in case of primitive types, the resulting type will be a union of all types.
// in case of type parameters, the resulting type will be an intersection of all types.
// in case of class types, the resulting class will have all properties and methods of all types.
// in case of enum types, the resulting enum will have all members of all types.
// in case of namespace types, the resulting namespace will have all members of all types.
// in case of tuple types, the resulting tuple will have all elements of all types.
// in case of conditional types, the resulting type will be an intersection of all types.

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

// Intersection types can be used with interfaces as well.
interface IAdmin {
  name: string;
  privileges: string[];
}

interface IEmployee {
  name: string;
  startDate: Date;
}

interface IElevatedEmployee extends IAdmin, IEmployee {}

// union types example
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; // type Universal = number

// ### Type Guards
// Type guards are used to narrow down the type of an object within a conditional block.
// Type guards can be used with:
// - typeof
// - instanceof
// - in

// * check the type of primitive types
const add1 = (a: Combinable, b: Combinable) => {
  if (typeof a === 'string' || typeof b === 'string') {
    // type guard
    return a.toString() + b.toString();
  }
  return a + b;
};

type UnknownEmployee = Employee | Admin;
// * check properties of an object
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    // type guard: check if the property exists in the object
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    // type guard
    console.log('Start Date: ' + emp.startDate);
  }
}

// ### Discriminated Unions
// Discriminated unions are used to narrow down the type of an object within a conditional block.
// by defining a common property in all types of the union.
// This property is called a discriminant property.
interface IBird {
  type: 'bird'; // discriminant property
  flyingSpeed: number;
}

interface IHorse {
  type: 'horse'; // discriminant property
  runningSpeed: number;
}

type Animal = IBird | IHorse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

// moveAnimal({type: 'cat', runningSpeed: 10}); // Error: type cat is not assignable to type bird or horse
moveAnimal({ type: 'bird', flyingSpeed: 10 }); // OK

// ### Type Casting
// Type casting is used to tell the compiler that a certain variable is of a specific type.
// ! Not to be confused with type conversion. Type casting doesn't change the type of the variable at runtime.
// Type casting can be done in two ways:
// - angle-bracket syntax
// - as syntax
// * angle-bracket syntax
const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')
);
// the above syntax is not allowed in JSX

// * as syntax
const userInputElement2 = document.getElementById(
  'user-input',
) as HTMLInputElement;

// ### Index Properties
// Index properties are used to define a type that can have any number of properties with the same type.

// use case: we know type of the value of the property but we don't know the name of the property or the number of properties
interface IErrorContainer {
  // {email: 'Not a valid email', username: 'Must start with a character'}
  [prop: string]: string; // index property
}

const errorBag: IErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a character',
};

// ### Function Overloads
// Function overloads are used to define multiple function signatures for the same function.
// Function overloads are used to define different return types for the same function.
// Function overloads are used to define different parameters for the same function.

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    // type guard
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add2('Max', ' Schwa');
// without function overloads, the result type will be Combinable (string | number) => so we can't use string methods on it.
