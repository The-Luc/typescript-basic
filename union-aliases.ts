// union type
var unionType: string | number | boolean;
unionType = 1;
unionType = '1';
unionType = true;

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

combine(1, 2);
combine('Anna', 'Bob');

// literal type => state exactly what the value should be
const createUser = (name: string, gender: 1 | 2) => {
  //
};
createUser('Anna', 4); // TS help us to find the error
