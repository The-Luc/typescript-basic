// Return type of a function
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Void
function printResult(num: number): void {
  console.log('Result: ' + num);
}

// Function type => describes a function with parameters and return type
type AddFn = (a: number, b: number) => number;
let combineValues: AddFn;

// combineValues = printResult; // Error
combineValues = add; // Works

// Callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, result => {
  console.log(result);
});

// Unknown type: Better than any because it forces you to check the type before using it
// I don't know the type of the variable yet, but I will check it later
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

// Never type: Function that never returns anything
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
