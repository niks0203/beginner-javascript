/** String demo with backtext */

const name = 'Neekee';
const hello = `hello my name is ${name}.
 Nice to meet you. I am ${100 + 1} years old`;

const output = `
<h2>${name}</h2>
<p>${hello}</p>
`;
document.body.innerHTML = output;

/** object definition */
