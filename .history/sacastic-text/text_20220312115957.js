const result = document.querySelector('.result');
const textarea = document.querySelector('[name="text"]');
const filterInputs = document.querySelectorAll('[name="filter"]');

textarea.addEventListener('input', (e) => {
  result.text = e.target.value;
});
