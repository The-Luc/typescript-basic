var num1 = document.querySelector('#input1');
var num2 = document.querySelector('#input2');
var addBtn = document.querySelector('#btn');
function add2Number(num1, num2) {
  return num1 + num2;
}
addBtn.addEventListener('click', function () {
  var res = add2Number(num1.value, num2.value);
  console.log(res);
});
