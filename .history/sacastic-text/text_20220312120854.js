const result = document.querySelector('.result');
const textarea = document.querySelector('[name="text"]');
const filterInputs = document.querySelectorAll('[name="filter"]');

console.log(textarea);
// textarea.addEventListener('input', (e) => {
//   result.textContent = e.target.value;
// });

function transform(text) {
  console.log(text);
  // converting all text into array of each letter
  const mod = Array.from(text);
  console.log(mod);
  result.textContent = text;
}
/* eslint-disable */
textarea.addEventListener('input', function(event) {
  transform(event.target.value);
});
