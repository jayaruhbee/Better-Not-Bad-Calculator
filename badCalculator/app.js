let total = 0
let stringNums = ""; 

document.querySelector('#clear').addEventListener('click', clearInput)
document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#subtract').addEventListener('click', subtract)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)
document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)


function clearInput() {
  stringNums = "";
  document.querySelector('#placeToPutResult').innerText = total
}


function plus() {
  stringNums += '+';
  document.querySelector('#placeToPutResult').innerText = stringNums
}
function subtract() {
  stringNums += '-';
  document.querySelector('#placeToPutResult').innerText = stringNums
}
function multiply() {
  stringNums += '*';
  document.querySelector('#placeToPutResult').innerText = stringNums
}
function divide() {
  stringNums += '/';
  document.querySelector('#placeToPutResult').innerText = stringNums
}
function zero() {
  stringNums += ' 0 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function one() {
  stringNums += ' 1 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function two() {
  stringNums += ' 2 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function three() {
  stringNums += ' 3 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function four() {
  stringNums += ' 4 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function five() {
  stringNums += ' 5 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function six() {
  stringNums += ' 6 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function seven() {
  stringNums += ' 7 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function eight() {
  stringNums += ' 8 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}
function nine() {
  stringNums += ' 9 ';

  document.querySelector('#placeToPutResult').innerText = stringNums
}

function equals() {
 let total = eval(stringNums)

  document.querySelector('#placeToPutResult').innerText = `${total}`
}

