// ! Why do we use generics?
// - To create reusable components
// - To create components that work with a variety of types

// ### Built-in Generics
const array: Array<string> = ['1', '2', '3'];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' '); // TS knows data is a string type
});

// ### Creating a Generic Function
// Generic function is a function that can work with a variety of types.
// so type is dynamic.
function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });
mergedObj.name; // TS knows mergedObj has name property

// in the case above, T and U can be any type
// if the 2nd is not an object, TS will not throw an error
merge(30, { age: 30 }); // TS will not throw an error, but the return is not what we want
// we can use constraints to solve this problem

// ### Working with Constraints
// we want T and U to be an object
// the extends keyword is used to add constraints
// it works for both primitive types and object types too. e.g: string, number, object, etc.
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

// example of using constraints with interfaces
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length) {
    descriptionText = 'Number of elements: ' + element.length;
  }
  return [element, descriptionText];
}

// ### The "keyof" Constraint
// keyof constraint is used to ensure that the type is a key of another type
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return obj[key];
}

// ### Generic Classes
// Generic classes are classes that work with generic types
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Mimi');
textStorage.removeItem('Max');

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
// numberStorage.removeItem('3'); // TS will throw an error

// ### Generic Utility Types
// Generic utility types are built-in generic types that help us to work with generics
// Partial: make all properties of an object optional
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date,
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // Partial type

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// Readonly: make all properties of an object readonly
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('MuMu'); // TS will throw an error
