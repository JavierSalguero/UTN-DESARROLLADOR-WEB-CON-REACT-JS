let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = 0;

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function calculateSqrt() {
  if (currentInput >= 0) {
    currentInput = Math.sqrt(currentInput);
    updateDisplay();
  } else {
    currentInput = 'Error: Valor negativo';
    updateDisplay();
  }
}

function clear() {
  currentInput = '0';
  operator = '';
  firstOperand = '';
  secondOperand = '';
  result = 0;
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  operator = op;
  firstOperand = currentInput;
  currentInput = '';
  updateDisplay();
}

function calculate() {
  secondOperand = currentInput;
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      result = currentInput;
  }
  currentInput = result.toString();
  updateDisplay();
}