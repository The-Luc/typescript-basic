"use strict";
// classes and interfaces
class Department {
    constructor(n) {
        this.name = n;
    } // this is a shortcut to create a property and assign the value to it
    describe() {
        console.log('Department: ' + this.name);
    }
}
const accounting = new Department('Accounting');
console.log(accounting.describe()); // Department: Accounting
// this keyword
const accountingCopy = { describe: accounting.describe };
// console.log(accountingCopy.describe()); // Error because this is not pointing to the right object
// ### Private and Public Access Modifiers
/*
Types:
- Public: default
- Private: only accessible from inside the class
- Protected: accessible from inside the class and classes that inherit from this class

Why do we need access modifiers?
- To prevent the code from breaking
- To prevent the code from being misused
- To prevent the code from being modified unexpectedly
*/
// ### Shorthand Initialization
// Instead of define the property in the class and assign the value to it in the constructor, we can use the shorthand initialization
class Department2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = []; // use protected instead of private to allow the child class to access this property
    }
}
// q: what is prototype in js?
// Prototype is a property of a function that is used to attach properties and methods to the function.
// ### Inheritance
class ITDepartment extends Department2 {
    constructor(id, admins) {
        super(id, 'IT'); // call the constructor of the base class
        this.admins = admins;
    }
    getEmployees() {
        return this.employees;
    }
}
const it = new ITDepartment('d1', ['Max']);
// ### Getters and Setters
class AccountingDepartment extends Department2 {
    get mostRecentReport() {
        // when we call this getter, we don't need to add () to it
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        // when we call this setter, just like we are assigning a value to a property mostRecentReport = 'some value'
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
// ### Static Methods and Properties
// Static methods and properties are attached to the class itself, not the object
class Department3 {
    static createEmployee(name) {
        return { name: name };
    }
}
// don't have to instantiate the class to use the static method
const newEmployee = Department3.createEmployee('Max');
// NOTE: we can't access static properties and methods from inside the class using this keyword
// because this keyword is used to access properties and methods of the object, not the class
// we have to use the class name to access static properties and methods
// ### Abstract Classes
// Abstract classes are classes that can't be instantiated directly
// They are only meant to be inherited from
// Abstract methods and properties must be implemented in the child class
// why do we need abstract classes?
// - to enforce the child class to implement certain methods
class Department4 {
}
class ITDepartment2 extends Department4 {
    constructor(n) {
        super();
        this.name = n;
    }
    describe() {
        console.log('IT Department...');
    }
}
// ### Singleton Classes & Private Constructors
// Singleton classes are classes that can only be instantiated once
// They are useful when we want to have only one instance of a certain class
// We can achieve this by making the constructor private
// and create a static method to create and return the instance of the class
class Department5 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Department5('d1', 'Accounting');
        return this.instance;
    }
}
// const accounting = new Department5('d1', 'Accounting'); // Error
const accounting2 = Department5.getInstance(); // this is how we instantiate the class by calling the static method
