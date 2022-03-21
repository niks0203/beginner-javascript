const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

const items = [];
/* eslint-disable */
shoppingForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log('form submitted');
 // const name = e.target.item.value;
  const name = shoppingForm.querySelector('input[name="item"]').value;
  console.log(name);
  if(!name) return;
  //create item to be added to the list

  const item ={
      name ,
      id: Date.now(),
      complete:false
  }
//push the item to items array
  items.push(item);
  console.log(`There are now ${items.length} items in the list`);

  //clear the form
  e.target.reset();
 
  
}
function displayItems(){
    console.log(items);
   const html = items.map(function(item){
      return `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove">&times;</button>
      </li>`;
    
   }).join('');
   list.innerHTML = html;
}
//addeing event delegation to list so it runs whenever the list is updated
shoppingForm.dispatchEvent(new CustomEvent('updatedItems'));
list.addEventListener('updatedItems',displayItems);