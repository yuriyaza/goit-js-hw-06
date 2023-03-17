function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('div#boxes');

createButton.addEventListener('click', createBoxesCollection);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxesCollection() {
  createBoxes(inputRef.value);
  inputRef.value = '';
}

function createBoxes(amount) {
  const boxesCollection = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesCollection.push(box);
    boxSize += 10;
  }
  boxesRef.append(...boxesCollection);
}

function destroyBoxes(){ 
  boxesRef.innerHTML = '';
};
