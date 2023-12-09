function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
})

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    inputEl.value = "";
    divBoxes.innerHTML = "";
    let sizeBox = 30;
    let arrayBoxes = [];
        for (let i = 0; i < amount; i++) {
          const iBox = document.createElement("div");
          iBox.style.width = `${sizeBox}px`;
          iBox.style.height = `${sizeBox}px`;
          iBox.style.backgroundColor = getRandomHexColor();
          sizeBox += 10;
          arrayBoxes.push(iBox);
        }
        divBoxes.append(...arrayBoxes);
      }
};

function destroyBoxes() {
   divBoxes.innerHTML = ""; 
}