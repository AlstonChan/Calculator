const standardBtn = document.getElementById("bmiStandard");
const metricBtn = document.getElementById("bmiMetric");

function checkBmiType(e) {
  console.log(e);
}
standardBtn.addEventListener("click", (e) => checkBmiType(e));
metricBtn.addEventListener("click", (e) => checkBmiType(e));
