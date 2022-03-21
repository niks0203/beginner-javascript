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
  //adding dispatchEvent to add our custom event to list so it runs whenever the list is updated
  list.dispatchEvent(new CustomEvent('updatedItems'));
  
}
function displayItems(){
    console.log(items);
   const html = items.map(function(item){
      return `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button aria-label="Remove" value="${item.id}">&times;</button>
      </li>`;
    
   }).join('');
   list.innerHTML = html;
}


list.addEventListener('updatedItems',displayItems);
//adding items in localstorage now

function mirrorToLocalStorage(){
    console.log("saving to localstorage");
    localStorage.setItem('item',JSON.stringify(items));
}
list.addEventListener('updatedItems',mirrorToLocalStorage);

//restoring from localstorage. running it at load
function restoreFromLocalStorage(){
    console.log("restoring from localstorage");
   const lsItems = JSON.parse(localStorage.getItem('item'));
   //if found
   if(lsItems.length)
   {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('updatedItems'));
   }
}

restoreFromLocalStorage();

function deleteItem(id){
    console.log("DELETING element");
}
//event delegation to list to run on dynamically added elements as well
list.addEventListener('click',function(e){
    console.log(e.target,e.currentTarget);
    if(e.target.matches('button')){
        deleteItem(e.target.value)
    }
})