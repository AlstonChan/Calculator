const modeBtn = document.getElementById("toggleModeButton");
const moon = document.getElementById("toggleModeMoon");
const sun = document.getElementById("toggleModeSun");

const mainHeader = document.getElementsByClassName("main-headings");
const subHeader = document.getElementsByClassName("sub-headings");

const calculatorParagraph = document.getElementsByClassName("calculator-p");
const calculatorParagraphList =
  document.getElementsByClassName("calculator-p-list");

const sample = document.getElementsByTagName("samp");

const calcParaLink = document.getElementById("64bits-so-explain");

sun.style.visibility = "visible";
moon.style.visibility = "hidden";

console.log(sun);

const elementClassSun = (element) => {
  element.classList.add("sun");
  element.classList.remove("moon");
};

const elementClassMoon = (element) => {
  element.classList.add("moon");
  element.classList.remove("sun");
};

const toggleModeBtn = () => {
  if (moon.style.visibility == "visible") {
    //sun active
    sun.style.visibility = "visible";
    moon.style.visibility = "hidden";

    document.body.style.backgroundColor = "rgb(218, 218, 218)";

    calculatorParagraph.forEach((element) => elementClassSun(element));
    calculatorParagraphList.forEach((element) => elementClassSun(element));
    mainHeader.forEach((element) => elementClassSun(element));
    subHeader.forEach((element) => (element.style.color = "rgb(84, 84, 84)"));

    sample.forEach((element) => {
      element.style.backgroundColor = "rgb(200, 200, 200)";
    });

    calcParaLink.className = "calculator-p-link-sun";
  } else if (sun.style.visibility == "visible") {
    //moon active
    sun.style.visibility = "hidden";
    moon.style.visibility = "visible";

    document.body.style.backgroundColor = "#222";

    calculatorParagraph.forEach((element) => elementClassMoon(element));
    calculatorParagraphList.forEach((element) => elementClassMoon(element));
    mainHeader.forEach((element) => elementClassMoon(element));
    subHeader.forEach((element) => (element.style.color = ""));

    sample.forEach((element) => {
      element.style.backgroundColor = "rgb(78, 78, 78)";
    });

    calcParaLink.className = "calculator-p-link";
  }
};

modeBtn.addEventListener("click", toggleModeBtn);

toggleModeBtn();
