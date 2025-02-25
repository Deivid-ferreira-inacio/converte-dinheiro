const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

async function data(){

  try{
    const data = await(await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')).json()
    console.log(data)

  }catch(err){
    console.error(err)
  }

}

data()

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert',
  )
  const currencyValueConverted = document.querySelector('.currency-value') // Outras moedas

  const dolarToday = 5.2
  const euroToday = 6.2

  if (currencySelect.value == 'dolar') {
   
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == 'euro') {
   
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue)
}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name')

  if (currencySelect.value == 'dolar') {}


 
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
