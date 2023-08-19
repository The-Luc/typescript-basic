// ### Interfaces
// Interface defines the structure of an object.
// It defines the properties, methods and events, which are the members of the interface.
interface IPerson {
  name?: string;
  firstName: string;
  lastName: string;
  sayHi: (text: string) => string;
  say(text: string): void;
}

const customer: IPerson = {
  // age: 12, // Error: age is not defined in IPerson
  firstName: 'Tom',
  lastName: 'Hanks',

  sayHi(text) {
    console.log(text);
    return text;
  },

  say(text) {
    console.log(text);
  },
};

// TODO: Question: What is the difference between interface and type?
// Type can be used to define a type alias for a union of two types.
// Interface can be used to define a structure of an object.

// ### Interfaces with Classes
class Employee implements IPerson {
  constructor(
    public firstName: string,
    public lastName: string,
    public name?: string,
  ) {}
  sayHi(text: string): string {
    // return this.name; // Error: name is not defined in IPerson because it is optional.
    return this.name ? this.name : text;
  }

  say(text: string): void {
    console.log(text);
    console.log(this.name);
  }
}

// Interface can use with the keyword:
// - readonly: to make the property as read-only
// - extends: to inherit from another interface
// - ? : to make the property as optional

// ### Interfaces with Function Types
interface IFunc {
  (text: string): string;
}
// !: I also can use type alias to define a function type.
// type IFunc = (text: string) => string;
// !: Difference between interface and type alias:
// - Interface can be implemented by a class.
// - Interface can be extended by another interface.
// - Interface can be used to define a function type.

// !: Find some examples of interfaces in the TypeScript source code:

// *: interface is not compiled to JavaScript code. It is only used to check the type of an object at compile time.
