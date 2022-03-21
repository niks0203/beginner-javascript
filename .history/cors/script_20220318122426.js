const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}
function displayResults(results) {
  console.log('Creating HTML');
  const html = results.map(
    (recipe) => `<div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${
          recipe.thumbnail &&
          `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
        }
        <a href="${recipe.href}">View Recipe →</a>
      </div>`
  );
  recipesGrid.innerHTML = html.join('');
}
function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(form.query.value);
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const results = await fetchRecipes(query);
  displayResults(results.results);
  form.submit.disabled = false;
}

form.addEventListener('submit', handleSubmit);
// on page load run it with pizza
fetchAndDisplay('pizza');
