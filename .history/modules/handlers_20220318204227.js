export async function handleClick(event) {
  console.log('clicked');
  console.log(currencies);
  const { default: currency, baseCurrency } = await import('./currencies.js');
  console.log(currency, baseCurrency);
}
