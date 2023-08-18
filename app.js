// Return type of a function
function add(n1, n2) {
    return n1 + n2;
}
// Void
function printResult(num) {
    console.log('Result: ' + num);
}
var combineValues;
// combineValues = printResult; // Error
combineValues = add; // Works
// Callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// Unknown type: Better than any because it forces you to check the type before using it
// I don't know the type of the variable yet, but I will check it later
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Never type: Function that never returns anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
