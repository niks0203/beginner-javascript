const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

const items = [];
/* eslint-disable */
shoppingForm.addEventListener('submit', function(){
    handleSubmit(e.currentTarget);
});

function handleSubmit(e) {
  e.preventDefault();
  console.log('form submitted');
}
