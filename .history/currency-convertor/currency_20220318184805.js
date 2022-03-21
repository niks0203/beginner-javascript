const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endpoint =
  'http://api.exchangeratesapi.io/v1/latest?access_key=1220616d1fd76dc133aa3500d6fe43cb&symbols=USD,AUD,CAD,PLN,MXN&format=1';
/* eslint-disable */
function generatrOptions(currencyArray) {
  const arr = Object.entries(currencyArray).map(function([currencyRate,currencyValue]){
     // console.log(currencyRate,currencyValue);
      return `<option value="${currencyRate}">${currencyRate} - ${currencyValue}</option>`;
  }).join('');
return arr;
 
}
async function fetchRates(symbols = 'USD'){
  //  const res = await fetch(`${endpoint}?base=${base}`);
    const res = await fetch(`${endpoint}`);
    const data = await res.json();
    console.log(data);

}
const optionsHTML = generatrOptions(currencies);
//console.log(optionsHTML);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
