function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");
const bodyColor = document.body;
const btnClick = document.querySelector(".change-color");
btnClick.addEventListener("click", changeColor);

function changeColor(event) {
  spanColor.textContent = "- " + getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
}
