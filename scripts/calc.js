const allBtn = document.querySelectorAll("button");

const allClearBtn = document.querySelector("[data-all-clear]");
const deleteBtn = document.querySelector("[data-delete]");
const equalBtn = document.querySelector("[data-equal]");
const operationBtn = document.querySelectorAll("[data-operation]");
const numberBtn = document.querySelectorAll("[data-number]");

const outputProc = document.getElementById("display-proc");
const outputAns = document.getElementById("display-ans");

allClearBtn.addEventListener("click", () => {
  allClearBtn.classList.add("clicked-clear");
  setTimeout(() => allClearBtn.classList.remove("clicked-clear"), 80);

  outputProc.innerText = "";
  outputAns.innerText = "";
});

deleteBtn.addEventListener("click", () => {
  deleteBtn.classList.add("clicked-del");
  setTimeout(() => deleteBtn.classList.remove("clicked-del"), 80);

  if (outputProc.innerText) {
    outputProc.innerText = outputProc.innerText.slice(
      0,
      outputProc.innerText.length - 1
    );
  }
});

function checkNumber(arg) {
  arg.classList.add("clicked-reg");
  setTimeout(() => arg.classList.remove("clicked-reg"), 80);

  switch (arg.textContent) {
    case "1":
      outputProc.innerText = outputProc.innerText + 1;
      break;
    case "2":
      outputProc.innerText = outputProc.innerText + 2;
      break;
    case "3":
      outputProc.innerText = outputProc.innerText + 3;
      break;
    case "4":
      outputProc.innerText = outputProc.innerText + 4;
      break;
    case "5":
      outputProc.innerText = outputProc.innerText + 5;
      break;
    case "6":
      outputProc.innerText = outputProc.innerText + 6;
      break;
    case "7":
      outputProc.innerText = outputProc.innerText + 7;
      break;
    case "8":
      outputProc.innerText = outputProc.innerText + 8;
      break;
    case "9":
      outputProc.innerText = outputProc.innerText + 9;
      break;
    case "0":
      outputProc.innerText = outputProc.innerText + 0;
      break;
  }
}

numberBtn.forEach((num) => {
  num.addEventListener("click", () => checkNumber(num));
});

function checkOperation(arg) {
  arg.classList.add("clicked-operation");
  setTimeout(() => arg.classList.remove("clicked-operation"), 80);

  switch (arg.textContent) {
    case "+":
      outputProc.innerText = outputProc.innerText + "+";
      break;
    case "-":
      outputProc.innerText = outputProc.innerText + "-";
      break;
    case "x":
      outputProc.innerText = outputProc.innerText + "x";
      break;
    case "÷":
      outputProc.innerText = outputProc.innerText + "÷";
      break;
    case "%":
      outputProc.innerText = outputProc.innerText + "%";
      break;
    case "( )":
      const firstOccur = outputProc.innerText.lastIndexOf("(");
      const lastOccur = outputProc.innerText.lastIndexOf(")");
      if (firstOccur === -1) {
        outputProc.innerText = outputProc.innerText + "(";
      } else if (firstOccur !== -1 && lastOccur > firstOccur) {
        outputProc.innerText = outputProc.innerText + "(";
      } else {
        outputProc.innerText = outputProc.innerText + ")";
      }
      break;
  }
}

operationBtn.forEach((opr) => {
  opr.addEventListener("click", () => checkOperation(opr));
});

equalBtn.addEventListener("click", () => {
  equalBtn.classList.add("clicked-equal");
  setTimeout(() => equalBtn.classList.remove("clicked-equal"), 80);

  outputAns.innerText = outputProc.innerText;
});
