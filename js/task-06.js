const inputRef = document.querySelector('input');
inputRef.addEventListener('blur', checkSymbolCount);

function checkSymbolCount(event) {
  const enteredSymbolsCount = event.currentTarget.value.length;
  const targetSymbolsCount = Number(inputRef.dataset.length);

  if (enteredSymbolsCount !== targetSymbolsCount) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
}
