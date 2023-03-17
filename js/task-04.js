let counterValue = 0;

const buttonDecrementRef = document.querySelector('[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('[data-action="increment"]');
const valueOutputRef = document.querySelector('#value');

buttonDecrementRef.addEventListener('click', changeCounterValue);
buttonIncrementRef.addEventListener('click', changeCounterValue);

function changeCounterValue(event) {
  if (event.currentTarget.dataset.action === 'decrement') {
    counterValue -= 1;
  }
  if (event.currentTarget.dataset.action === 'increment') {
    counterValue += 1;
  }
  valueOutputRef.textContent = counterValue;
}
