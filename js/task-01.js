const list = document.querySelector('#categories');
const categories = list.children;

console.log(`Number of categories: ${categories.length}`);

for (let i = 0; i < categories.length; i += 1) {
  const item = categories[i];

  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
