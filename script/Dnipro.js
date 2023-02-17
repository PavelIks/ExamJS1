// https://openweathermap.org/city/709930
// https://api.openweathermap.org/data/2.5/weather?q=Dnipro,ua&appid=04217cf9928bd134bd91a2c1f7df5fce

fetch('https://api.openweathermap.org/data/2.5/weather?q=Dnipro,ua&appid=04217cf9928bd134bd91a2c1f7df5fce')
.then(function(resp) { return resp.json() })
.then
  (function(data)
    {
      console.log(data);
      document.querySelector('.city-name').textContent = data.name;
      document.querySelector('.temperature').innerHTML = Math.round(data.main.temp-273) + '&deg;';
      document.querySelector('.weather-forecast').textContent = data.weather[0]['description'];
      document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    }
  )
  .catch(function()
  {
    console.log("error");
  });