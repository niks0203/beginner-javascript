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
  const item ={
      name ,
      id: Date.now(),
      complete:false
  }

  items.push(item);
  console.log(`There are now ${items.length} items in the list`);
  
}
