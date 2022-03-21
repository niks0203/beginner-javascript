const result = document.querySelector('.result');
const textarea = document.querySelector('[name="text"]');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));
console.log(filterInputs);
/* eslint-disable */
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', 
    '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', 
    a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', 
    g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', 
    M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', 
    t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
  };
  /* eslint-enable */

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
    },
    funky:function(element){

    }
}