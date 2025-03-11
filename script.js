async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '872d9e0e5621145207994f920bb4c8c3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weatherResult').innerHTML = result;
    } catch (error) {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
  }
  