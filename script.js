function convertCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsiusInput").value;
    var fahrenheitResult = document.getElementById("fahrenheitResult");
  
    var fahrenheit = (celsiusInput * 9/5) + 32;
    fahrenheitResult.textContent = "Result: " + fahrenheit.toFixed(2) + " °F";
  }
  
  function convertFahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
    var celsiusResult = document.getElementById("celsiusResult");
  
    var celsius = (fahrenheitInput - 32) * 5/9;
    celsiusResult.textContent = "Result: " + celsius.toFixed(2) + " °C";
  }
  
  function convertCelsiusToKelvin() {
    var celsiusInput2 = document.getElementById("celsiusInput2").value;
    var kelvinResult = document.getElementById("kelvinResult");
  
    var kelvin = parseFloat(celsiusInput2) + 273.15;
    kelvinResult.textContent = "Result: " + kelvin.toFixed(2) + " K";
  }
  
  function convertKelvinToCelsius() {
    var kelvinInput = document.getElementById("kelvinInput").value;
    var celsiusResult2 = document.getElementById("celsiusResult2");
  
    var celsius = kelvinInput - 273.15;
    celsiusResult2.textContent = "Result: " + celsius.toFixed(2) + " °C";
  }
  