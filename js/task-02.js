const ingredientsRef = document.querySelector('ul#ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementsList = ingredients.map((element) => {
  const elementRef = document.createElement('li');
  elementRef.textContent = element;
  elementRef.classList.add('item');
  return elementRef;
});

ingredientsRef.append(...elementsList);
