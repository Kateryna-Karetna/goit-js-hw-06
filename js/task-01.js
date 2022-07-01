// // Number of categories, 3
const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);

// // Category: Animals, 4
const item = document.querySelector('.item');
console.log(`Category: ${item.firstElementChild.textContent}`);
console.log(`Elements: ${item.lastElementChild.children.length}`);

// Category: Products, 3
console.log(`Category: ${item.nextElementSibling.firstElementChild.textContent}`);
console.log(`Elements: ${item.nextElementSibling.lastElementChild.children.length}`);

// Category: Technologies, 5
console.log(
  `Category: ${item.nextElementSibling.nextElementSibling.firstElementChild.textContent}`,
);
console.log(
  `Elements: ${item.nextElementSibling.nextElementSibling.lastElementChild.children.length}`,
);
