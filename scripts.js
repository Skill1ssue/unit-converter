// Variables
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

// Event Listener
inputBtn.addEventListener("click", () => renderResults(Number(inputEl.value)))

// Fucntions
function getLength(input) {
  let lengthArr = []
  lengthArr.push((input * meterToFeet).toFixed(3))
  lengthArr.push((input / meterToFeet).toFixed(3))
  return lengthArr
}

function getVolume(input) {
  let volumeArr = []
  volumeArr.push((input * literToGallon).toFixed(3))
  volumeArr.push((input / literToGallon).toFixed(3))
  return volumeArr
}

function getMass(input) {
  let massArr = []
  massArr.push((input * kilogramToPound).toFixed(3))
  massArr.push((input / kilogramToPound).toFixed(3))
  return massArr
}

function renderResults(input) {
  length.innerText = `${input} meters = ${getLength(input)[0]} feet | ${input} feet = ${getLength(input)[1]} meters`
  volume.innerText = `${input} liters = ${getVolume(input)[0]} gallons | ${input} gallons = ${getVolume(input)[1]} liters`
  mass.innerText = `${input} kilos = ${getMass(input)[0]} pounds | ${input} pounds = ${getMass(input)[1]} kilos`
}
