function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.body;
const buttonRef = document.querySelector('button.change-color');
const outputColorRef = document.querySelector('span.color');

buttonRef.addEventListener('click', changeBodyColor);

function changeBodyColor(event) { 
  const newColor = getRandomHexColor();
  bodyRef.style.backgroundColor = newColor;
  outputColorRef.textContent = newColor
}
