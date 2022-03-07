console.log('it works');

function calculateBill() {
  console.log('Running the calculateBill function');
  const total = 100 * 1.13;
  return total;
}

console.log(`Your total bill is $${calculateBill()}`);

/** * function closures */
