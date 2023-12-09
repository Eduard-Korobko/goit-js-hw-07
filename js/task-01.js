const allCategories = document.querySelector("#categories");

const liItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItem.length}`);

const category = document.querySelectorAll("h2");

const elements = document.querySelector("ul").children;

for (let i = 0; i < liItem.length; i++) {
    console.log(`Category: ${category[i].textContent}`);
    console.log(elements.length);
}