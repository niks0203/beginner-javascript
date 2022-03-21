export async function handleClick(event) {
  const currencies = await import('./currencies.js');
  console.log(currencies);
}
