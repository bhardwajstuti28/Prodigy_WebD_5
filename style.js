const form = document.getElementById("locationForm");
const locationInput = document.getElementById("locationInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = locationInput.value;

  // Simulated/mock weather data for demo
  const mockData = {
    name: city,
    main: { temp: 29.5, humidity: 60 },
    weather: [{ description: "partly cloudy" }],
    wind: { speed: 10 }
  };

  // Display the mock data
  weatherResult.classList.remove("hidden");
  cityName.textContent = mockData.name;
  temperature.textContent = mockData.main.temp;
  condition.textContent = mockData.weather[0].description;
  humidity.textContent = mockData.main.humidity;
  wind.textContent = mockData.wind.speed;
});
