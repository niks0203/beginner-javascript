export async function handleClick(event) {
  console.log('clicked');
  const currencies = await import('./currencies.js');
  console.log(currencies);
}
