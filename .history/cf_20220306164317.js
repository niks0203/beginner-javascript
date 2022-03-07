// console.log('it works');

// function calculateBill() {
//   console.log('Running the calculateBill function');
//   const total = 100 * 1.13;
//   return total;
// }

// console.log(`Your total bill is $${calculateBill()}`);

/** * function closures */
function outer() {
  const outVar = 'Hey! i  am outer var';
  function inner() {
    const innerVar = 'Hey! i am inner var';
    console.log(innerVar);
    console.log(outVar);
  }
  return inner;
}

const innerFn = outer();
innerFn();
