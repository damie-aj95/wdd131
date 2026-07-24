// Static values matching what's displayed in the Weather section
const temperature = 5; // °C
const windSpeed = 15; // km/h

// One-line formula (Environment Canada metric wind chill formula)
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Only calculate if conditions are viable, otherwise show N/A
let windChillResult;
if (temperature <= 10 && windSpeed > 4.8) {
  windChillResult = calculateWindChill(temperature, windSpeed) + " °C";
} else {
  windChillResult = "N/A";
}
document.getElementById("windchill").textContent = windChillResult;

// Footer: current year + last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified;