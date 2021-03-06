const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescription);
}
function sub() {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, calcDescription);
}
function mul() {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult, calcDescription);
}
function div() {
  const enteredNumber = getUserInput();
  const calcDescription = `${currentResult} / ${enteredNumber}`;
  currentResult = currentResult / enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);
