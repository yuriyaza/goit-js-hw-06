const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementList = ingredients.map((element) => {
  const itemRef = document.createElement('li');
  itemRef.textContent = element;
  itemRef.classList.add('item');
  return itemRef;
});

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...elementList);

console.log(ingredientsListRef);

// Альтернативний спосіб

const elementListAlternate = ingredients
  .map((element) => `<li class="item">${element}</li>`)
  .join(' ');
  
const markupAlternate = `
  <ul id="ingredients-alternative" style="color:blue">
    ${elementListAlternate}
  </ul>`;

ingredientsListRef.insertAdjacentHTML('afterEnd', markupAlternate);
