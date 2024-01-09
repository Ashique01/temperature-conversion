const textBox = document.getElementById("textBox");
const toFarenhite = document.getElementById("toFarenhite");
const ftoKelvin = document.getElementById("ftoKelvin");
const ktoFarenhite = document.getElementById("ktoFarenhite");
const toCelcius = document.getElementById("toCelcius");
const CtoKelvin = document.getElementById("CtoKelvin");
const ktoCelcius = document.getElementById("ktoCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFarenhite.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(2) + "°F";
  } else if (toCelcius.checked) {
    temp = Number(textBox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(2) + "°C";
  } else if (ftoKelvin.checked) {
    temp = Number(textBox.value);
    temp = ((temp - 32) * 5) / 9 + 273.15;
    result.textContent = temp.toFixed(2) + "K";
  } else if (ktoFarenhite.checked) {
    temp = Number(textBox.value);
    temp = ((temp - 273.15) * 9) / 5 + 32;
    result.textContent = temp.toFixed(2) + "°F";
  } else if (CtoKelvin.checked) {
    temp = Number(textBox.value);
    temp = temp + 273.15;
    result.textContent = temp.toFixed(2) + "K";
  } else if (ktoCelcius.checked) {
    temp = Number(textBox.value);
    temp = temp - 273.15;
    result.textContent = temp.toFixed(2) + "°C";
  } else {
    result.textContent = `Please Select a unit`;
  }
}
