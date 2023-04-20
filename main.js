// Get the HTML elements for the currency inputs and exchange rate display
const currencyOneEl = document.getElementById('currency-1');
const worthOneEl = document.getElementById('worth-first');
const currencySecondEl = document.getElementById('currency-2');
const worthSecondEl = document.getElementById('worth-second');
const exchangeRateEl = document.getElementById('exchange-rate');

// API key for the exchange rate API
const apiKey = '87606e8599fa2e24448eb2aa';

// Function to update the exchange rate and converted value
const updateRate = () => {
        // Fetch the exchange rates from the API based on the selected currency
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyOneEl.value}`)
        .then((res) => res.json())
        .then((data) => {
            // Get the conversion rate for the selected currency
            const rate = data.conversion_rates[currencySecondEl.value];

            // Update the exchange rate display
            exchangeRateEl.innerHTML = `1 ${currencyOneEl.value} = ${rate + ' ' + currencySecondEl.value}`;

            // Calculate and update the converted value based on the input value and conversion rate
            worthSecondEl.value = (worthOneEl.value * rate).toFixed(2);
        })
}
// Call the updateRate function to initialize the exchange rate and converted value
updateRate();

// Add event listeners for when the currency and input values change, triggering an update of the exchange rate and converted value
currencyOneEl.addEventListener('change', updateRate);
currencySecondEl.addEventListener('change', updateRate);
worthOneEl.addEventListener('input', updateRate);
