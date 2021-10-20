const api = {
  key: "858641eb236a719a566b5f37e31293e1",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

console.log(api.baseurl);
console.log(api.key);

const searchBox = document.querySelector("#sch");

searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getResult(searchBox.value);
    console.log(searchBox.value);
  }
}

function getResult(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
}

function displayResult(weather) {
  const nm = document.querySelector(".city");
  const dt = document.querySelector(".date");
  const tmp = document.querySelector(".temp-in");
  const tmps = document.querySelector(".temps");
  const fg=document.querySelector('.fog');

  const tms = new Date();
  tmp.innerHTML=`${Math.round(weather.main.temp)}°<span>C</span>`;
  dt.innerHTML = tmsuz(tms);
  tmps.innerHTML=`${weather.main.temp_max}°C  / ${weather.main.temp_min}°C`
  nm.innerHTML = `${weather.name} , ${weather.sys.country}`;
  fg.innerHTML=`${weather.weather[0].main}`
  console.log(weather);
}

function tmsuz(m) {
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augst",
    "Septnber",
    "October",
    "November",
    "December",
  ];
  let weeks = [
    "Monday",
    "Thusday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day=weeks[m.getDay()];
  let date=m.getDate();
  let months=month[m.getMonth()];
  let year=m.getFullYear();

  return `${day} ${date} ${months} ${year}`;
}




