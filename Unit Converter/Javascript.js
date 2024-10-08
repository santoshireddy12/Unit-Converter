function kgToPounds(kg) {
    return kg * 2.20462;
}

function poundsToKg(pounds) {
    return pounds / 2.20462;
}

function kmToMiles(km) {
    return km * 0.621371;
}

function milesToKm(miles) {
    return miles / 0.621371;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

function updateKgPounds() {
    let kg = parseFloat(document.getElementById("kg").value);
    if (!isNaN(kg)) {
        document.getElementById("pounds").value = kgToPounds(kg).toFixed(2);
    }
}

function updatePoundsKg() {
    let pounds = parseFloat(document.getElementById("pounds").value);
    if (!isNaN(pounds)) {
        document.getElementById("kg").value = poundsToKg(pounds).toFixed(2);
    }
}

function updateKmMiles() {
    let km = parseFloat(document.getElementById("km").value);
    if (!isNaN(km)) {
        document.getElementById("miles").value = kmToMiles(km).toFixed(2);
    }
}

function updateMilesKm() {
    let miles = parseFloat(document.getElementById("miles").value);
    if (!isNaN(miles)) {
        document.getElementById("km").value = milesToKm(miles).toFixed(2);
    }
}

function updateFahrenheitCelsius() {
    let f = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(f)) {
        document.getElementById("celsius").value = fahrenheitToCelsius(f).toFixed(2);
    }
}

function updateCelsiusFahrenheit() {
    let c = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(c)) {
        document.getElementById("fahrenheit").value = celsiusToFahrenheit(c).toFixed(2);
    }
}