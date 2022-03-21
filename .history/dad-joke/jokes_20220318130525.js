const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];
console.log('hi');
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

async function fetchJoke() {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  return data;
}
function randomItem(arr, not) {
  const item = [Math.floor(Math.random() * arr.length)];
}
async function handleClick() {
  const { joke } = await fetchJoke();
  console.log(joke);
  jokeHolder.textContent = joke;
}

jokeButton.addEventListener('click', handleClick);
