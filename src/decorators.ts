// * Why do we use decorators?
// * - To add metadata to a class
// * - To add metadata to a property
// * - To add metadata to a method
// * - To add metadata to a method parameter

// Arguments passed to decorators:
// - target: constructor function of the class
// - propertyName: prototype of the class and the name of the property
// - descriptor: property descriptor of the property
// - method: prototype of the class and the name of the method
// - parameterIndex: index of the parameter in the method

// When do decorators execute?
// - When the class is defined
// - When the property is defined
// - When the method is defined

/*
We can return value from a decorator function.
- class decorator: return a new constructor function
- method decorator: return a new property descriptor
- accessor decorator: return a new property descriptor

*/

// ### Creating a Class Decorator
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger // just provide the name of the decorator, not calling it
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// ### Decorator Factories
// Decorator factories are functions that return a decorator function.
function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// @Logger2('LOGGING - PERSON') // this is how we use decorator factories
