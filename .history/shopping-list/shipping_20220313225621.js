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
