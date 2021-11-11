const toCelsiusButton = document.querySelector(".to_celsius_button");
const toCelsiusInput = document.querySelector("#to_celsius_input");
const toFahreneitInput = document.querySelector("#to_farenheit_input");
const toFahreneitButton = document.querySelector(".to_farenheit_button");

const celsiusToFarenheit = (celsius) => celsius * 1.8 + 32;

const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

toCelsiusButton.addEventListener("click", () => {
  toCelsiusInput.value = fahrenheitToCelsius(toFahreneitInput.value);
});

toFahreneitButton.addEventListener("click", () => {
  toFahreneitInput.value = celsiusToFarenheit(toCelsiusInput.value);
});

toCelsiusInput.value = 0;
toFahreneitInput.value = 0;
