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
  mod.map(filters.sarcastic);
  result.textContent = text;
}
/* eslint-disable */
textarea.addEventListener('input', function(event) {
  transform(event.target.value);
});

const filters = {
    sarcastic: function(element,index){
        console.log(element);
        console.log(index);
    }
}