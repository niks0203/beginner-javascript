const result = document.querySelector('.result');
const textarea = document.querySelector('[name="text"]');
const filterInputs = document.querySelectorAll('[name="filter"]');

console.log(textarea);
// textarea.addEventListener('input', (e) => {
//   result.textContent = e.target.value;
// });
/* eslint-disable */
function transform(text) {
  console.log(text);
  // converting all text into array of each letter
  const mod = Array.from(text);

  mod.map(filters.sarcastic);
 
    console.log(mod);
  
  result.textContent = text;
}

textarea.addEventListener('input', function(event) {
  transform(event.target.value);
});

const filters = {
    sarcastic: function(element,index){
        console.log(element,index);
        //if letter at even , lowercase the letter else uppercase it
        
        if(index%2){
            debugger;
            console.log("Uppercase: "+element.toUpperCase());
            return element.toUpperCase();
        }
        else{
            debugger;
            console.log("Lowecase: "+element.toLowerCase());
            return element.toLowerCase();
        }
       

       //return element;
    }
}