export async function handleClick(event) {
  console.log('clicked');

  const { default: currency, baseCurrency } = await import('./currencies.js');
  console.log(currency, baseCurrency);
}
