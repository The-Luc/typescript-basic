"use strict";
// union type
var unionType;
unionType = 1;
unionType = '1';
unionType = true;
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
combine(1, 2);
combine('Anna', 'Bob');
// literal type => state exactly what the value should be
const createUser = (name, gender) => {
    //
};
// createUser('Anna', 4); // TS help us to find the error
