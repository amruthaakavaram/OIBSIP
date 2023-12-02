function validateInput() {
    var input = document.getElementById("temperature").value;
    if (isNaN(input)) {
        alert("Please enter a valid number.");
        document.getElementById("temperature").value = "";
    }
}

function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultArea = document.getElementById("result");

    if (isNaN(temperature)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    var convertedTemperature;
    var convertedUnit;

    if (unit === "celsius") {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
    }

    resultArea.textContent = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + convertedUnit;
}