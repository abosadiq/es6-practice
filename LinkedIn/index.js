// console.log("Hi");
// setTimeout(() => {
//   console.log("wafi");
// }, 5000);

// console.log("Aisha");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let httpRequest = new XMLHttpRequest();
get = (url, success) => {
  httpRequest.open("GET", url);
  httpRequest.onload = function() {
    success(httpRequest.responseText);
  };
  httpRequest.send();
};
tempToF = k => {
  return ((k - 273.15) * 1.8 + 32).toFixed(0);
};

function handler(data) {
  const dataObj = JSON.parse(data);
  const weatherDiv = document.getElementById("weather");
  const weatherFragmet = `<h1> Whe</h1>
  <h2 = class="top">
  ${dataObj.name}
  </h2>
  <p>
  <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span> | ${
    dataObj.weather[0].description
  } </p>`;
  weatherDiv.innerHTML = weatherFragmet;
}
document.addEventListener("DOMContentLoaded", function() {
  const apiKey = "df2e24f4de6201ae412fdb10e85a777b";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=los+angles&APPID" +
    apiKey;
  get(url, handler);
});
