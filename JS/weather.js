const KEY = "bb55be2e2899e92b472381887ec44a0f";

function geo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoErr() {
  alert("어딘지 몰라서 날씨를 몰라요");
}

navigator.geolocation.getCurrentPosition(geo, geoErr);

// 37.5051472 126.9433486
