const API_KEY = "ba55ed667465ec32128bdaa1376374d6"

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError) // success, error 함수


function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = data.weather[0].main;
    city.innerText = data.name;
  }); // fetch : 크롬 network -> request : JS 가 url을 부름, promise(당장x, 시간이 좀 걸림), json 값을 받고 함수 실행
}

function onGeoError() {
  alert("Can't find you. No weather for you.")
}