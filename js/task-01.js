const categoriesListRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesListRef.length} \n\n`);

categoriesListRef.forEach((item) => {
  const categoryHeaderRef = item.querySelector('h2');
  console.log(`Category: ${categoryHeaderRef.textContent}`);

  const categoryElementsRef = item.querySelector('ul');
  console.log(`Elements: ${categoryElementsRef.children.length} \n\n`);
});
