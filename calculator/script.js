let firstNumber = null;
let secondNumber = null;
let operator = null;
let display = "0";
let result = "0";

let updateDisplay = () => {
  document.querySelector("#display").value = display;
};

updateDisplay();

let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  if (b == 0) {
    return "undefined";
  } else {
    return a / b;
  }
};

let operate = (op, num1, num2) => {
  let result;
  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  return result;
};

let buttons = document.querySelectorAll(".digit");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (display == "0") {
      display = e.target.value;
      updateDisplay();
    } else if (display != "0" && !firstNumber) {
      display = display.concat(e.target.value);
      updateDisplay();
    } else if (display == "0" && firstNumber) {
      display = display.concat(e.target.value);
      secondNumber = parseFloat(display);
      updateDisplay();
    } else if (display != "0" && firstNumber)
      display = display.concat(e.target.value);
    secondNumber = parseFloat(display);
    updateDisplay();
  });
});

let clear = () => {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  display = "0";
  result = null;
};
document.querySelector("#clear").addEventListener("click", () => {
  clear();
  updateDisplay();
});

let del = () => {
  display = display.slice(0, -1);
  updateDisplay();
};
document.querySelector("#del").addEventListener("click", () => del());

let operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (firstNumber && operator && secondNumber) {
      let result = operate(operator, firstNumber, secondNumber);
      display = result;
      updateDisplay();
      firstNumber = parseFloat(result);
    }
    firstNumber = parseFloat(display);
    operator = e.target.value;
    display = "0";
  });
});

let equal = () => {
  if (firstNumber && operator && secondNumber) {
    let result = operate(operator, firstNumber, secondNumber);
    display = result;
    updateDisplay();
    clear();
  }
};
document.querySelector(".equal").addEventListener("click", () => equal());

let dot = document.querySelector(".dot").addEventListener("click", (e) => {
  if (display.indexOf(".") == -1) {
    display = display.concat(".");
    updateDisplay();
  }
});
