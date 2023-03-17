const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', changeName);

function changeName(event) {
  const inputtedValue = event.currentTarget.value;
  
  if (inputtedValue.length > 0) { 
  outputRef.textContent = inputtedValue;
  } else outputRef.textContent = 'Anonymous';
}
