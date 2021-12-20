const standardBtn = document.getElementById("bmiStandard");
const metricBtn = document.getElementById("bmiMetric");

const bmiHeight = document.getElementById("bmiHeight");
const bmiHeightInches = document.getElementById("bmiHeightInches");
const bmiWeight = document.getElementById("bmiWeight");

const bmiForm = document.getElementById("bmiForm");
const bmiOutput = document.getElementById("bmiOutput");
const errorDisplay = document.querySelector(".error-bmi");

function checkBmiType(e) {
  const evt = e.target;
  if (evt.id === "bmiMetric") {
    evt.className = "activeBtn";
    evt.previousElementSibling.className = "";

    bmiHeight.placeholder = "cm";
    bmiHeightInches.removeAttribute("required");
    bmiHeightInches.className = "display-invi";
  } else {
    evt.className = "activeBtn";
    evt.nextElementSibling.className = "";

    bmiHeight.placeholder = "feet";
    bmiHeightInches.setAttribute("required", "");
    bmiHeightInches.className = "";
  }
}

standardBtn.addEventListener("click", (e) => checkBmiType(e));
metricBtn.addEventListener("click", (e) => checkBmiType(e));

function displayError() {
  errorDisplay.innerText = "Invalid Input";
  errorDisplay.className = "error-bmi display-show";
  setTimeout(() => {
    errorDisplay.className = "error-bmi";
  }, 4500);
}

function bmiFormSubmit(e) {
  e.preventDefault();
  const height = Number(bmiHeight.value);
  const heightInc = Number(bmiHeightInches.value);
  const weight = Number(bmiWeight.value);
  if (!Number.isNaN(height) && !Number.isNaN(weight)) {
    if (standardBtn.className === "activeBtn") {
      if (!Number.isNaN(heightInc)) {
        const bmiHeightInc = height * 12 + heightInc;
        const ans = ((weight / (bmiHeightInc * bmiHeightInc)) * 703).toFixed(2);
        bmiOutput.innerText = ans;
      } else {
        return displayError();
      }
    } else {
      const ans = (weight / (height * height)) * 10000;
      bmiOutput.innerText = ans.toFixed(2);
    }
  } else {
    return displayError();
  }
}

bmiForm.addEventListener("submit", (e) => bmiFormSubmit(e));
