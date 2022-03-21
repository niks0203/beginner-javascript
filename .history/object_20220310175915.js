const person1 = {
  name: 'wes',
  age: 10,
};
const person2 = {
  name: 'wes',
  age: 10,
};
const person3 = person1;

const person4 = { ...person1 };

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers3 = { ...numbers };
// const numbers2 = numbers;
console.log(numbers3.reverse());
console.log(numbers);
console.log(numbers3);
