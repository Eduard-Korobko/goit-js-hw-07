const allCategories = document.querySelector("#categories");

const liItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItem.length}`);

liItem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})