const inputFontSizeRef = document.querySelector('input#font-size-control');
const outputTextRef = document.querySelector('#text');

inputFontSizeRef.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  const targetFontSize = event.currentTarget.value;
  outputTextRef.style.fontSize = `${targetFontSize}px`;
}
