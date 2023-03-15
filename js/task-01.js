const categoriesListRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesListRef.length} \n\n`);

categoriesListRef.forEach((element) => {
  const categoryHeaderRef = element.querySelector('h2');
  console.log(`Category: ${categoryHeaderRef.textContent}`);

  const categoryElementsRef = element.querySelector('ul');
  console.log(`Elements: ${categoryElementsRef.children.length} \n\n`);
});
