const num1 = document.querySelector('#input1') as HTMLInputElement;
const num2 = document.querySelector('#input2') as HTMLInputElement;

const addBtn = document.querySelector('#btn') as HTMLButtonElement;

function add2Number(num1: number, num2: number) {
  return num1 + num2;
}

addBtn.addEventListener('click', () => {
  const res = add2Number(+num1.value, +num2.value);
  console.log(res);
});

// OBJECTS
let school: object;
school = {
  name: 'ABC',
  location: 'XYZ',
};

console.log(school);

// TS infers the type of object
const person = {
  name: 'Max',
  age: 30,
};
console.log(person);

// define the type of object explicitly
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
  kids: {
    name: string;
    age: number;
  }[];
} = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  kids: [
    {
      name: 'Bob',
      age: 5,
    },
    {
      name: 'Anna',
      age: 7,
    },
  ],
};

// Tuple
person2.role.push('admin'); // TS doesn't catch this error
person2.role[1] = 10; // TS doesn't catch this error

// ENUMS
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // start with 5
// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200 }; define values explicitly
const person3 = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};
