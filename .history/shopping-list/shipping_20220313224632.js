const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

const items = [];

shoppingForm.addEventListener('submit', () => {
  handleSubmit(e.currentTarget);
});
