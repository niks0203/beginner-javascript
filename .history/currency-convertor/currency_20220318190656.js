const currencies = {
  USD: 'United States Dollar',
  CAD: 'Canadian Dollar',
  AUD: 'Australian Dollar',
  PLN: 'Polish Zloty',
  MXN: 'Mexican Peso',
  EUR: 'Euro',
  INR: 'Indian Rupee',
};
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const endpoint =
  'http://api.exchangeratesapi.io/v1/latest?access_key=1220616d1fd76dc133aa3500d6fe43cb&symbols=USD,AUD,CAD,PLN,MXN,EUR,INR&format=1';
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
    console.log(data.rates);
    console.log(data.rates['USD']);
    return data.rates;

}
async function convert(amount,from,to){
    const rate = await fetchRates();
    const fromRate = rate[from];
    const toRate = rate[to];
    const convertedAmount = amount *rate[from]*rate[to];;
    console.log(fromRate,toRate);
}
const optionsHTML = generatrOptions(currencies);
//console.log(optionsHTML);
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

convert(100,'USD','CAD');