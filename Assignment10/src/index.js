// import particullar classes from modules
const { Celsius, Kelvin, Fahrenheit } = require("./modules/temperature");
const { Kilometers, Miles } = require("./modules/distance");
// get query selectors
const celsiusValue = document.querySelector("#celsius");
const fahrenheitValue = document.querySelector("#fahrenheit");
const kelvinValue = document.querySelector("#kelvin");

const kmValue = document.querySelector("#km");
const mileValue = document.querySelector("#miles");

const temparateForm = document.querySelector("#temp_form");
const distanceForm = document.querySelector("#distance_form");
// add event listeners on values
celsiusValue.addEventListener("change", (ev) => {
  ev.preventDefault();
  const fahrenheit = Celsius.convertToFahrenheit(celsiusValue.value);
  const kelvin = Celsius.convertToKelvin(celsiusValue.value);

  fahrenheitValue.value = fahrenheit;
  kelvinValue.value = kelvin;
});

kelvinValue.addEventListener("change", (ev) => {
  ev.preventDefault();
  const celcius = Kelvin.convertToCelsius(kelvinValue.value);
  const fahrenheit = Kelvin.convertToFahrenheit(kelvinValue.value);

  celsiusValue.value = celcius;
  fahrenheitValue.value = fahrenheit;
});

fahrenheitValue.addEventListener("change", (ev) => {
  ev.preventDefault();
  const celsius = Fahrenheit.convertToCelsius(fahrenheitValue.value);
  const kelvin = Fahrenheit.convertToKelvin(fahrenheitValue.value);

  celsiusValue.value = celsius;
  kelvinValue.value = kelvin;
});

kmValue.addEventListener("change", (ev) => {
  ev.preventDefault();
  const miles = Kilometers.convertToMiles(kmValue.value);

  mileValue.value = miles;
});

mileValue.addEventListener("change", (ev) => {
  ev.preventDefault();
  const km = Miles.convertToKilometers(mileValue.value);

  kmValue.value = km;
});
