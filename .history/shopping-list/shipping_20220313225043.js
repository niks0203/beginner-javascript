const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

const items = [];
/* eslint-disable */
shoppingForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  console.log('form submitted');
  const name = e.target.item.value;
}
