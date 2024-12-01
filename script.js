// Pobierz elementy z DOM
const buttons = document.querySelectorAll("button");
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');
// Twój klucz API
const kluczAPI = "617f1674c75eb7058425b911e7591ae2"
// Nasłuchiwanie formularza
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim().lower();
  if(city){
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`);
      if(response.ok) throw new Error("Nie znaleziono miasta");
      const data=await response.json()
      //Miejste Temperatura Opis Wilgoność Wiatr
      weatherResult.innerHTML="W ${data.name} temperatura jest od ${data.temp_min.Metric} do $(data.temp_max.Metric) stopni celsjusza. Powietrze leci ${data.wind.speed} metrów na sekunde. Chmury pokrywają ${data.clouds.all}% nieba i wilgoność jest %{data.main.humidity}%."
    }catch (error) {
      weatherResult.innerHTML="<p class='błąd'>${error.message}</p>"
    }
  }
});
