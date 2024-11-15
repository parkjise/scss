let windowWidth = window.innerWidth;
let vw100 = document.querySelector(".vw100");
let vw10 = document.querySelector(".vw10");
let vw1 = document.querySelector(".vw1");

const calc = () => {
  windowWidth = window.innerWidth;
  vw100.innerHTML = windowWidth + "px";
  vw10.innerHTML = (windowWidth * 10) / 10 / 10 + "px";
  vw1.innerHTML = (windowWidth * 100) / 100 / 100 + "px";
};

window.addEventListener("resize", calc);
window.addEventListener("load", calc);
