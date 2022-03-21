const result = document.querySelector('.result');
const textarea = document.querySelector('[name="text"]');
const filterInputs = document.querySelectorAll('[name="filter"]');

console.log(textarea);
textarea.addEventListener('input', (e) => {
  result.textContent = e.target.value;
});
