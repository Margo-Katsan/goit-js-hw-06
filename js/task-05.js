const inputEl = document.querySelector('#name-input');
const outputSpanEl = document.querySelector('#name-output');
const handleName = () => {
  if (inputEl.value === "") {
    return outputSpanEl.textContent = "Anonymous";
  }
  outputSpanEl.textContent = inputEl.value;
}
inputEl.addEventListener('input', handleName);