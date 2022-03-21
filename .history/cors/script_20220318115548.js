const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cryptic-headland-94862.herokuapp.com/`;

async function fetchRecipe(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
}

fetchRecipe('pizza');
