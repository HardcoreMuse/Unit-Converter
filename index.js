const inputEl = document.getElementById("value-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-div") 
const volumeEl = document.getElementById("volume-div") 
const massEl = document.getElementById("mass-div") 
const feetPerMeter = 3.281
const gallonsPerLiter = 0.264
const poundPerKilo = 2.204


convertBtn.addEventListener("click", unitConversion)

function unitConversion(){
    lengthEl.textContent = `${inputEl.value} meters = ${(inputEl.value * feetPerMeter).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / feetPerMeter).toFixed(3)} meters`
    
    volumeEl.textContent = `${inputEl.value} liters = ${(inputEl.value * gallonsPerLiter).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / gallonsPerLiter).toFixed(3)} liters`
    
    massEl.textContent = `${inputEl.value} kilos = ${(inputEl.value * poundPerKilo).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / poundPerKilo).toFixed(3)} kilos`
}