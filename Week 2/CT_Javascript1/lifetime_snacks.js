function lifetime() {
  var age = parseInt(prompt("How old are you?"));
  var amount = parseInt(prompt("How many snacks will you eat per day?"));
  alert("You will eat " + (((80 - age)*365)*amount) + " snacks from now until you die at 80 years old");
}

function celsiusToFahrenheit() {
  var celsius = parseInt(prompt("Input Temperature in Celsius:"));
  var fahr = (celsius * 1.8) + 32;
  var stringoutput = celsius + "Degrees Celsius = " + fahr + "Degrees Fahrenheit"
  alert(stringoutput);
  console.log(stringoutput);
}

function fahrenheitToCelsius() {
  var fahr = parseInt(prompt("Input Temperature in Fahrenheit:"));
  var celsius = (fahr - 32) / 1.8;
  var stringoutput = celsius + "\xB0 Fahrenheit = " + fahr + "\xB0 Celsius"
  alert(stringoutput);
  console.log(stringoutput);
}
