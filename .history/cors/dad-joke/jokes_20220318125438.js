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
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('joke p');

async function fetchJoke() {
  const res = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });
}
