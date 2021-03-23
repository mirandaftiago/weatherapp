class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.minTemp = document.getElementById('w-minTemp');
    this.maxTemp = document.getElementById('w-maxTemp');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.temp.textContent = `${weather.main.temp}ºC`;
    //this.icon.setAttribute('src', `${weather.weather[0].icon_url}`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelslike.textContent = `Feels Like: ${weather.main.feels_like}ºC`;
    this.minTemp.textContent = `Minimum Temperature: ${weather.main.temp_min}ºC`;
    this.maxTemp.textContent = `Maximum Temperature: ${weather.main.temp_max}ºC`;
    this.wind.textContent = `Wind: ${weather.wind.speed} windspeed / ${weather.wind.deg} degrees`;
  }
 }