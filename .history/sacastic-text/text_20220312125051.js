const result = document.querySelector('.result');
const textarea = document.querySelector('[name="text"]');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
console.log(filterInputs);

console.log(textarea);
// textarea.addEventListener('input', (e) => {
//   result.textContent = e.target.value;
// });
/* eslint-disable */
function transform(text) {
  console.log(text);
  // converting all text into array of each letter
  const filterValue = filterInputs.find(function(input){
        if(input.checked){
            console.log(input.value);
        }
  })
  const mod = Array.from(text).map(filters.sarcastic);
  
    console.log("Modified map: "+mod);
  
  result.textContent = mod.join("");
}

textarea.addEventListener('input', function(event) {
  transform(event.target.value);
});

const filters = {
    sarcastic: function(element,index){
      //  console.log(element,index);
        //if letter at even , lowercase the letter else uppercase it
        
        if(index%2){
            
         //   console.log("Uppercase: "+element.toUpperCase());
            return element.toUpperCase();
        }
        else{
            
           // console.log("Lowecase: "+element.toLowerCase());
            return element.toLowerCase();
        }
       

       //return element;
    }
}