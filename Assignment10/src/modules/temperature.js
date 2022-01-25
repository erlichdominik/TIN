export class Celsius {
  static convertToKelvin(celsius) {
    return parseFloat(celsius) + 273.15;
  }

  static convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
}

export class Kelvin {
  static convertToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 1.8 + 32;
  }

  static convertToCelsius(kelvin) {
    return kelvin - 273.15;
  }
}

export class Fahrenheit {
  static convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 0.556;
  }

  static convertToKelvin(fahrenheit) {
    return ((parseFloat(fahrenheit) - 32) * 5) / 9 + 273.15;
  }
}
