const baseEndpoint = 'http://www.recipepuppy.com/api';

async function fetchRecipe(query) {
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
  console.log(data);
}
